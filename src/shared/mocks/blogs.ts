import { BlogType } from 'shared/types/blogs'
import mountain from '/public/assets/images/blogs/firstblog.jpg'
import airplane from '/public/assets/images/blogs/airplane.jpg'

export const blogs: BlogType[] = [
  {
    id: 1,
    title: 'blogs.blog1PreviewTitle',
    subTitle: 'blogs.blog1PreviewSubTitle',
    description: 'blogs.blog1PreviewText',
    image: mountain,
    read: 5,
  },
  {
    id: 2,
    title: 'blogs.blog2PreviewTitle',
    subTitle: 'blogs.blog2PreviewSubTitle',
    description: 'blogs.blog2PreviewText',
    image: airplane,
    read: 5,
  },
]
