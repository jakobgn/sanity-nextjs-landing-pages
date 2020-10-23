// Rectangle.js
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import styles from "./Rectangle.module.css";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import useWindowSize from "../../hooks/useWindowSize";

const builder = imageUrlBuilder(client);

function Rectangle({ text, ctas, photo, title, length }) {
  console.log("ctas", ctas);
  const size = useWindowSize();
  return (
    <div className={styles.root}>
      <section
        className={styles.articlebox}
        style={{
          maxWidth: length == 2 ? "550px" : "349px",
          minWidth: length == 2 && size.width > 600 ? "550px" : "",
        }}
      >
        {photo && (
          <img
            src={builder.image(photo).auto("format").width(100).url()}
            className={styles.image}
            alt={title}
          />
        )}
        {text && <SimpleBlockContent blocks={text} />}
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Rectangle;
