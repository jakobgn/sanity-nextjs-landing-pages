import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'
import Link from 'next/link'

function TextSection (props) {
  const {heading, label, text} = props
  if (heading && heading.includes('secondaryButton')) {
    const elements = heading.split(',')
    return (
      <section
        className={styles.article}
        style={{textAlign: label === 'center' ? 'center' : 'left'}}
      >
        <Link
          href={elements[2]}
          prefetch
        >
          <button className={styles.secondaryButton} data-is-active={'false'}>{elements[1]}</button>
        </Link>

      </section>
    )
  }
  return (
    <div className={styles.root}>
      <section
        className={styles.article}
        style={{textAlign: label === 'center' ? 'center' : 'left'}}
      >
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object)
}

export default TextSection
