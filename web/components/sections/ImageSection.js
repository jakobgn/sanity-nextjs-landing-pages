import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./ImageSection.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import useWindowSize from "../../hooks/useWindowSize";
const builder = imageUrlBuilder(client);

function ImageSection(props) {
  const { heading, label, text, image, imageSmall, cta } = props;
  const size = useWindowSize();

  if (!image) {
    return null;
  }

  return (
    <div className={styles.root}>
      {!text && <h2 className={styles.content}>{heading}</h2>}
      <figure
        className={styles.content}
        style={{ flexDirection: label === "right" ? "row-reverse" : "row" }}
      >
        {size.width < 700 && imageSmall ? (
          <img
            src={builder.image(imageSmall).auto("format").width(556).url()}
            className={styles.image}
            style={{ maxWidth: text ? "550px" : "60em" }}
            alt={heading}
          />
        ) : (
          <img
            src={builder.image(image).auto("format").width(556).url()}
            className={styles.image}
            style={{ maxWidth: text ? "550px" : "60em" }}
            alt={heading}
          />
        )}
        {text && (
          <div className={styles.text}>
            <h2>{heading}</h2>
            {text && <SimpleBlockContent blocks={text} />}
            <br />
            {cta && cta.route && <Cta {...cta} />}
          </div>
        )}
      </figure>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
