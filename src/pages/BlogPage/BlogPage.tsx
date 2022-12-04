import React, { FC, useEffect, useState } from 'react'
import b from '../BlogsPage/BlogsPage.module.scss'
import s from './BlogPage.module.scss'
import { blogs } from 'shared/mocks/blogs'
import { BlogType } from 'shared/types/blogs'
import { ArrowIcon, Button } from 'components'
import Image from 'next/image'
import cn from 'classnames'
import blog from '../../../public/assets/images/Blog/blog.png'
import { Slider } from 'components'
import { useRouter } from 'next/router'

export const Blog: FC = () => {
  const router = useRouter()
  const blogId = Number(router.query.id)
  const [post, setPost] = useState<BlogType>()

  useEffect(() => {
    if (blogId) {
      const post = blogs.find(post => post.id === blogId)
      setPost(post)
    }
  }, [blogId])

  console.log(post)

  return (
    <>
      {post ? (
        <div className={s.wrapper}>
          <div className={s.main}>
            <div className={s.header}>
              <Button
                variant={'outline'}
                classname={s.button}
                onClick={() => router.back()}
              >
                <ArrowIcon />
                <div>Back</div>
              </Button>
            </div>
            <div>
              <div className={cn(b.blog, s.blog)}>
                <div className={cn(b.content, s.content)}>
                  <h2 className={b.mainTitle}>{blogs[blogId].title}</h2>
                  <h3 className={b.subTitle}>{blogs[blogId].subTitle}</h3>
                  <div
                    className={s.read}
                  >{`${blogs[blogId].read} min read`}</div>
                  <p className={b.description}>{blogs[blogId].description}</p>
                </div>
                <div className={b.image}>
                  <Image
                    src={blogs[blogId].image}
                    height={580}
                    width={580}
                    alt='blogImage'
                  />
                </div>
              </div>
              <div className={s.mainContent}>
                <h4 className={s.subSubTitle}>
                  Varius vestibulum lorem iaculis ut quam eu at
                </h4>
                <p className={s.textContent}>
                  Diam odio sed mattis mi. Dui, posuere volutpat tellus posuere
                  scelerisque amet vitae tellus volutpat. Euismod donec tortor,
                  eget magna erat feugiat. A, pellentesque facilisi duis viverra
                  laoreet vitae diam, tortor. Aliquam sed scelerisque venenatis
                  volutpat ut. In non morbi ultrices justo.
                </p>
                <p className={s.textContent}>
                  Eget viverra massa, at enim. Augue libero dolor tellus cras
                  sed viverra montes. Adipiscing pellentesque vitae, platea
                  facilisis netus dignissim id pellentesque lacus. Diam commodo
                  id fringilla non egestas. Posuere sed hendrerit amet sed. Nisl
                  gravida quam in scelerisque. Varius arcu pulvinar luctus elit
                  lacus, congue fermentum. Pellentesque pharetra eget tempor nec
                  hendrerit. Id pellentesque vitae, lobortis egestas est vel
                  ullamcorper. Enim arcu lacus fringilla nec quis curabitur
                  nisi, id.
                </p>
                <p className={s.textContent}>
                  Dignissim velit mi malesuada bibendum morbi aliquet sem morbi
                  fames. Mattis nibh purus et nascetur metus hac vitae eleifend
                  vitae. Eu ultrices massa pellentesque proin mus dictumst
                  bibendum pharetra. Purus velit massa massa cras ultricies
                  bibendum. Duis in sed suspendisse nullam. At dolor non
                  faucibus placerat sed dolor eget tempor. Ultrices consectetur
                  urna, magnis lacus, ut gravida facilisi. Vestibulum ultrices
                  dictumst metus convallis lorem gravida. Nunc ultricies lorem
                  elementum eu, quam tristique neque. Cum ornare dui a tellus.
                  Tellus vel vitae gravida aenean lacus pellentesque velit
                  tellus. Semper maecenas sed ipsum vel et interdum.
                </p>
                <p className={s.textContent}>
                  Varius vestibulum lorem iaculis ut quam eu at. Elit amet arcu
                  morbi aliquam quam fames quis sed egestas. At proin vitae
                  euismod eu blandit mus vulputate. Sit cursus varius blandit et
                  sit sit at. Nibh a convallis quam quam pellentesque habitasse
                  feugiat ac
                </p>
                <p className={s.textContent}>
                  Varius lacus lectus purus magna diam faucibus erat condimentum
                  tincidunt. Ipsum, nulla at enim, nunc, quam in aliquet. Vel
                  aenean aliquam ut at eget. Arcu facilisis mauris ac sit neque,
                  vitae ac. Consequat, nec luctus dictum purus ornare sed sed
                  lacus. Dolor, nibh sed in vitae. Eros, consequat in nulla nisl
                  adipiscing rhoncus laoreet integer gravida. Enim ullamcorper
                  cum sagittis nunc, feugiat pharetra et. Hac donec posuere
                  egestas egestas ultricies in non morbi nulla. Imperdiet tortor
                  elementum dolor sem semper dui, sit. Tortor cum augue nec
                  scelerisque turpis consectetur nullam in pretium. Enim magna
                  enim elit sociis orci
                </p>
                <div className={s.gallery}>
                  <div>
                    <Image
                      src={blog.src}
                      alt='Blog image'
                      width={1070}
                      height={404}
                    />
                  </div>
                  <div>
                    <Image
                      src={blog.src}
                      alt='Blog image'
                      width={342}
                      height={160}
                    />
                    <Image
                      src={blog.src}
                      alt='Blog image'
                      width={342}
                      height={160}
                    />
                    <Image
                      src={blog.src}
                      alt='Blog image'
                      width={342}
                      height={160}
                    />
                  </div>
                </div>
                <p className={s.textContent}>
                  Dignissim velit mi malesuada bibendum morbi aliquet sem morbi
                  fames. Mattis nibh purus et nascetur metus hac vitae eleifend
                  vitae. Eu ultrices massa pellentesque proin mus dictumst
                  bibendum pharetra. Purus velit massa massa cras ultricies
                  bibendum. Duis in sed suspendisse nullam. At dolor non
                  faucibus placerat sed dolor eget tempor. Ultrices consectetur
                  urna, magnis lacus, ut gravida facilisi. Vestibulum ultrices
                  dictumst metus convallis lorem gravida. Nunc ultricies lorem
                  elementum eu, quam tristique neque. Cum ornare dui a tellus.
                  Tellus vel vitae gravida aenean lacus pellentesque velit
                  tellus. Semper maecenas sed ipsum vel et interdum.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.noPost}>There is no posts yet</div>
      )}
      <div className={s.sliderContainer}>
        <h5 className={s.sliderTitle}>Other articles you may like</h5>
        <Slider
          slidesPerView={2}
          withPagination
          withNavigation
          nextEl='moreNext'
          prevEl='morePrev'
          classname={s.sliderCustom}
        >
          <div className={s.article}>
            <h1 className={s.articleTitle}>
              Cras integer ut ut vulputate sem platea auctor in eros
            </h1>
            <p className={s.articleText}>
              A lorem nibh maecenas porttitor risus purus enim pretium morbi. Ut
              nec tincidunt risus bibendum facilisis velit. Integer eleifend
              malesuada elit nulla tristique mattis a fusce. Vivamus curabitur
              lectus sit neque sed et facilisi libero mi
            </p>
            <div className={s.articleData}>01 July, 2022</div>
          </div>
          <div className={s.article}>
            <h1 className={s.articleTitle}>
              Cras integer ut ut vulputate sem platea auctor in eros
            </h1>
            <p className={s.articleText}>
              A lorem nibh maecenas porttitor risus purus enim pretium morbi. Ut
              nec tincidunt risus bibendum facilisis velit. Integer eleifend
              malesuada elit nulla tristique mattis a fusce. Vivamus curabitur
              lectus sit neque sed et facilisi libero mi
            </p>
            <div className={s.articleData}>01 July, 2022</div>
          </div>
          <div className={s.article}>
            <h1 className={s.articleTitle}>
              Cras integer ut ut vulputate sem platea auctor in eros
            </h1>
            <p className={s.articleText}>
              A lorem nibh maecenas porttitor risus purus enim pretium morbi. Ut
              nec tincidunt risus bibendum facilisis velit. Integer eleifend
              malesuada elit nulla tristique mattis a fusce. Vivamus curabitur
              lectus sit neque sed et facilisi libero mi
            </p>
            <div className={s.articleData}>01 July, 2022</div>
          </div>
          <div className={s.article}>
            <h1 className={s.articleTitle}>
              Cras integer ut ut vulputate sem platea auctor in eros
            </h1>
            <p className={s.articleText}>
              A lorem nibh maecenas porttitor risus purus enim pretium morbi. Ut
              nec tincidunt risus bibendum facilisis velit. Integer eleifend
              malesuada elit nulla tristique mattis a fusce. Vivamus curabitur
              lectus sit neque sed et facilisi libero mi
            </p>
            <div className={s.articleData}>01 July, 2022</div>
          </div>
        </Slider>
      </div>
      <div className={cn(b.contact, s.contact)}>
        <Button variant='secondary' classname={b.button}>
          Contact
        </Button>
      </div>
    </>
  )
}
