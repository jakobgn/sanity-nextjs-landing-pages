// Rectangle.js
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import Rectangle from './Rectangle'
import styles from './Rectangles.module.css'
const builder = imageUrlBuilder(client)

function Rectangles ({rectangles}) {
  return (
    <div className={styles.root}>
      <div className={styles.rectangles}>
        {rectangles.map(rectangle => (
          <Rectangle {...rectangle} key={rectangle._key} />
        ))}
      </div>
    </div>
  )
}

export default Rectangles
