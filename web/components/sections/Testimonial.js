import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import styles from "./Testimonial.module.css";
import useWindowSize from "../../hooks/useWindowSize";

const builder = imageUrlBuilder(client);

function Testimonial({ name, photo, quote }) {
  const size = useWindowSize();
  return (
    <div className={styles.root}>
      <section className={styles.articlebox} style={{}}>
        <div
          className={styles.container}
          style={{
            padding: size.width > 700 ? "2rem" : "2rem 0",
            width: size.width > 700 ? 375 : "",
          }}
        >
          <figure className={styles.figure}>
            <img
              src={builder.image(photo).auto("format").width(200).height(200).url()}
              className={styles.photo}
              alt={photo.alt}
            />
          </figure>
          <div>
            {name && <h2 className={styles.name}>{name}</h2>}
            <blockquote className={styles.quote}>{quote}</blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
