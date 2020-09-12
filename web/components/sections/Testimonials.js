import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import Testimonial from './Testimonial'
import styles from './Testimonials.module.css'
const builder = imageUrlBuilder(client)

function Testimonials ({testimonials}) {
  return (
    <div className={styles.root}>
      <div className={styles.rectangles} style={{maxWidth: '60em'}}>
        {testimonials.map(testimonial => (
          <Testimonial {...testimonial} key={testimonial._key} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
