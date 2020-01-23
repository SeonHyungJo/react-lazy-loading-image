import React, { useRef, useEffect } from "react";
import { lazyImageObj } from './util'
import styles from "./styles.css";

export type Props = { src?: string; srcSet?: string; dataSrc?: string };

const LazyHooks = ({ src, srcSet, dataSrc }: Props) => {
  const myRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    myRef !== null && !src && lazyImageObj.observe(myRef.current as Element)
  }, [myRef])

  return (
    <>
      <img
        src={src}
        data-src={dataSrc}
        data-srcset={srcSet}
        ref={myRef}
        className={styles.img}
      />
    </>
  );
};

export default LazyHooks;
