import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import styles from './Testimonial.module.css'

const builder = imageUrlBuilder(client)

function Testimonial ({name, photo, quote}) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <figure className={styles.figure}>
          <img
            src={builder
              .image(photo)
              .auto('format')
              .width(200)
              .height(200)
              .url()}
            className={styles.photo}
            alt={photo.alt}
          />
        </figure>
        <div>
          {name && <h2 className={styles.name}>
            {name}
          </h2>}
          <blockquote className={styles.quote}>
            {quote}

          </blockquote>
        </div>

      </div>
    </div>
  )
}

export default Testimonial
