import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'

function Footer (props) {
  const {navItems, text, router, titles} = props
  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.colContainer}>
          {navItems && navItems.filter(x => x.length>0).map((col, colIndex) => {
            if (!col) {
              return null
            }
            return <div className={styles.ulContainer} key={colIndex}>
              <ul className={styles.items} >
                <li className={styles.colTitle}>{titles[colIndex]}</li>
                {col.map(item => {
                  const isActive = item.slug && router.pathname === '/LandingPage' && router.query.slug === item.slug.current
                  return (
                    <li key={item._id} className={styles.item}>
                      {item.slug
                        ? <Link
                          href={{
                            pathname: '/LandingPage',
                            query: {slug: item.slug.current}
                          }}
                          as={`/${item.slug.current}`}
                          prefetch
                        >
                          <a data-is-active={isActive ? 'true' : 'false'}>{item.title}</a>
                        </Link>
                        : <a href={item.link}>
                          {item.title}
                        </a>
                      }

                    </li>
                  )
                })}
              </ul>
            </div>
          })}
        </div>
      </nav>
      {text &&
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
      }

    </div>
  )
}

Footer.propTypes = {
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string
    })
  })
}

export default withRouter(Footer)
