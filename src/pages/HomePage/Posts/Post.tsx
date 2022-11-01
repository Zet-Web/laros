import React, { FC } from 'react'
import s from './Post.module.scss'
import cls from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from 'shared/types/posts'

interface PostBlockProps {
  posts: Post[]
}

export const PostBlock: FC<PostBlockProps> = ({ posts }) => {
  const fullPost = posts.filter((item, index) => index === 0)
  const post = posts.filter((item, index) => index !== 0 && index <= 2)

  return (
    <div className={s.wrapper}>
      {fullPost.map((post, idx) => (
        <div className={s.left} key={idx}>
          <h3 className={s.title}>{post.title}</h3>
          <p className={s.subtitle}>{post.subtitle}</p>
          <Image
            className={cls(s.image, s.fullPostImage)}
            width={652}
            height={384}
            src={post.image}
          />
          <h3 className={cls(s.title, s.fullPostTitle)}>{post.second_title}</h3>
          <p className={s.text}>{post.text}</p>
          <p className={s.date}>{post.date}</p>
        </div>
      ))}

      <div className={s.rightWrapper}>
        <div className={s.right}>
          {post.map((post, idx) => (
            <div className={s.post} key={idx}>
              <div className={s.textBlock}>
                <h3 className={cls(s.title, s.postTitle)}>{post.title}</h3>
                <p className={s.text}>{post.text}</p>
                <p className={s.date}>{post.date}</p>
              </div>

              <Image
                className={cls(s.image, s.smallImage)}
                width={260}
                height={184}
                src={post.image}
              />
            </div>
          ))}

          <button className={s.button}>
            <Link className={s.link} href={'/blogs'}>
              More posts
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
