import { Box } from '@chakra-ui/react'
import { Carousel } from '../components/Carousel'
import { Testimonials } from '../components/Testimonials'

import PopularCourses from '../components/PopularCourses/PopularCourses'
import { Partners } from '../components/Partners/Partners'
import CallToAction from '../components/CallToAction/CallToAction'

export const Home = () => (
    <Box id="content">
      <Carousel />
      <CallToAction />
      <PopularCourses courses={[{
        id: 1,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 2,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 3,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 4,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 1,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 2,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 3,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }, {
        id: 4,
        image: {
          link: 'https://online-learning.harvard.edu/sites/default/files/styles/social_share/public/course/cs50x-original.jpg?itok=kR_JV8DW',
          alt: 'CS50 Introduction to Computer Science'
        },
        title: 'Title',
        text: 'Text'
      }
      ]}/>
      <Partners partners={[]}/>
      <Testimonials />
    </Box>
)
