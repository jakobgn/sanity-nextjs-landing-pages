// Rectangle.js
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import styles from './Rectangle.module.css'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function Rectangle ({text, ctas}) {
  return <div className={styles.root}>
    <section className={styles.articlebox}>
      {text && <SimpleBlockContent blocks={text} />}
      {ctas && (
        <div className={styles.ctas}>
          {ctas.map(cta => (
            <Cta {...cta} key={cta._key} />
          ))}
        </div>
      )}
    </section>
  </div>
}

export default Rectangle