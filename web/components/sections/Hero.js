import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import useWindowSize from "../../hooks/useWindowSize";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heading, backgroundImage, tagline, ctas, preline, backgroundImageSmall } = props;
  const size = useWindowSize();
  const style = backgroundImage
    ? size.width < 600 && backgroundImageSmall
      ? {
          backgroundImage: `url("${urlFor(backgroundImageSmall).width(500).auto("format").url()}")`,
        }
      : {
          backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
        }
    : {};

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <div className={styles.preline}>{preline && <SimpleBlockContent blocks={preline} />}</div>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  preline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
