import { BlogType } from 'shared/types/blogs'
import mountain from '/public/assets/images/blogs/firstblog.jpg'
import airplane from '/public/assets/images/blogs/airplane.jpg'

export const blogs: BlogType[] = [
  {
    id: 1,
    title: 'Diam ac odio id lectus mi..',
    subTitle: 'Quis mi id scelerisque viverra neque',
    description: `Quam sed pellentesque odio sit gravida. Nulla eget sed non
    hendrerit velit quis cum diam. Ante non et hac elit. Mollis sit
    a sit cursus donec turpis orci. Pharetra, donec neque eget
    adipiscing. Auctor nulla orci est vestibulum in non vitae,
    viverra turpis. Dignissim egestas vel, morbi senectus amet
    fermentum tincidunt. Amet imperdiet pharetra, est et quis eu
    mollis ultricies. Quis mi id scelerisque viverra neque.`,
    image: mountain,
    read: 5,
  },
  {
    id: 2,
    title: 'Morbi dignissim lacinia sit proin gravida enim ac',
    subTitle: 'Urna, vestibulum egestas sit diam, mattis pretium',
    description: `Vitae bibendum ornare nascetur massa. Cras tortor quis risus
    tristique nec amet morbi. Urna, vestibulum egestas sit diam,
    mattis pretium. Morbi dignissim lacinia sit proin gravida enim
    ac. Aliquam massa pretium maecenas nisi, imperdiet. Tellus
    aenean tincidunt pharetra proin donec amet, id. Eu felis id
    egestas lobortis rhoncus. Neque id id pellentesque quam ut
    facilisis. Fames elementum eget et nisi aliquam risus. Risus
    arcu a, nisi est, consequat convallis massa maecenas sit.
    Sagittis lectus felis, purus, gravida nec. Faucibus odio
    hendrerit pretium nunc pharetra varius pellentesque euismod
    posuere. Elementum in facilisis elementum sed pellentesque donec
    nunc. Mollis enim auctor volutpat aliquam faucibus enim quis sed
    nunc.`,
    image: airplane,
    read: 5,
  },
]
