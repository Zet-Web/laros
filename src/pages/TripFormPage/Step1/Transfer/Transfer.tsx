import { FC, useEffect, useState } from 'react'
import s from './Transfer.module.scss'

import { Button, Modal, Radio } from 'components';
import { ChangeTransferModal } from 'features';

import { getCars } from 'shared/api/routes/transfer';
import { useModal } from 'shared/hooks/useModal';
import { useTranslate } from 'shared/hooks/useTranslate';

import Image from 'next/image';
import car from '/public/assets/images/carBlackIcon.svg?url'
import ferry from '/public/assets/images/ferryIcon.svg?url'
import exchange from '/public/assets/images/exchange.svg?url'
import airport from '/public/assets/images/airportIcon.svg?url'

import { Option } from 'shared/types';
import { TransferOptions } from 'shared/types/transport';
import { Car, CarTransferType } from 'shared/types/car';


interface TransferProps {
    from?: Option;
    to: string
    value: unknown;
    options: TransferOptions
    onChange: (id: number, type: CarTransferType) => void
};

export const Transfer: FC<TransferProps> = ({ options = {} as TransferOptions, from, onChange, to }) => {
    const transferModal = useModal()
    const [transferType, setTransferType] = useState<string>('')
    const [carType, setCarType] = useState<CarTransferType>(CarTransferType.PICKUP)
    const [availableTransfers, setAvailableTransfers] = useState<Option[]>([])
    const [selectedTransfer, setSelectedTransfer] = useState<number>(Number(availableTransfers[0]?.value))
    const [cars, setCars] = useState<Car[]>([])
    const t = useTranslate()
    const transfersToOptionsMock: TransferOptions = { // use instead of props.options
        ferry: 1,
        airport: 2,
        car: 3
    }
    const loadCars = async () => {
        try {
            const { data } = await getCars({ destination: `${from?.value}, ${to}` })
            setCars(data.data)
        } catch (error) {
            console.log(error)
        }
        transferModal.open()
    }
    const handleCarChange = (type: CarTransferType, car?: number) => {
        setCarType(type)
        car && setSelectedTransfer(car)
    }
    useEffect(() => {
        setAvailableTransfers(transfersToOptions(options))
    }, [options, carType]);
    useEffect(() => {
        availableTransfers[0]?.value && setTransferType(availableTransfers[0].value)
    }, [availableTransfers]);
    useEffect(() => {
        onChange(selectedTransfer, carType)
    }, [selectedTransfer, carType]);
    function transfersToOptions(transfers: TransferOptions): Option[] {
        let options: Option[] = []
        if (transfers.ferry) {
            options = [...options, {
                label: 'tripSteps.transfer.ferry',
                value: transfers.ferry.toString(),
                icon: ferry
            }]
        }
        if (transfers.airport) {
            options = [...options, {
                label: 'tripSteps.transfer.airport',
                value: transfers.airport.toString(),
                icon: airport
            }]
        }
        if (transfers.car) {
            options = [...options, {
                label: carType === CarTransferType.PICKUP ? 'tripSteps.transfer.carPickUp' : 'tripSteps.transfer.carRental',
                value: transfers.car.toString(),
                icon: car
            }]
        }
        return options
    }

    return <>
        <div className={s.transfer}>
            <div className={s.transferBlock}>
                <div className={s.transferIcon}>
                    <Image src={exchange} alt='' width={24} height={28} />
                </div>
            </div>
            <div className={s.transferInfo}>
                <div className={s.transferTitle}>Transfer: </div>
                <div className={s.transferRoute}>
                    {from?.label ?? '?'} &gt; {to ?? '?'}
                </div>
                <div className={s.transferType}>
                    <div className={s.transferTypeIcon}></div>
                    {from && to && !availableTransfers.length && <div>Ask manager to get information about transfer</div>}
                    {(!from || !to) && <div>Select where or from to go to see the options</div>}
                    {Boolean(availableTransfers.length) && from && to && <>
                        {availableTransfers.length > 1 ? <Radio onChange={(value) => setTransferType(value)} name='' options={transfersToOptions(options)} value={transferType} /> : <div className={s.transferValue}><Image alt='' src={availableTransfers[0]?.icon ?? ''} width={12} height={12} /> {t(availableTransfers[0]?.label)}</div>}
                        {options.car && <Button onClick={() => loadCars()} classname={s.editBtn}>
                            Edit
                        </Button>}
                    </>}
                </div>
            </div>
        </div>
        <Modal {...transferModal} title='Changing transfer option'>
            <ChangeTransferModal
                type={CarTransferType.RENTAL}
                onClick={handleCarChange}
                cars={cars}
                {...transferModal}
            />
        </Modal>
    </>
}