import React, { useRef, useEffect } from "react";
import { lazyImageObj } from "./util";

interface Props {
  src: string;
  main?: boolean;
  id?: string;
  className?: string;
  alt?: string;
  sizes?: any;
  srcset?: string;
  style?: object;
  height?: number;
  width?: number;
  border?: string;
}

const defaultStyle = {
  background: "#A4A4A4",
  width: "300px",
  height: "300px",
  margin: "1px auto",
  border: "0"
};

const LazyImg = (props: Props) => {
  const { src, main = false, style } = props;
  const imgRef = useRef<HTMLImageElement>(null);
  const imgProps = {
    ...props,
    src: main ? src : '',
    style: style ? { ...defaultStyle, ...style } : {},
    "data-src": !main && src
  };

  !main && delete imgProps.src;

  useEffect(() => {
    imgRef !== null && !main && lazyImageObj.observe(imgRef.current as Element);
  }, [imgRef]);

  return (
    <img
      ref={imgRef}
      {...imgProps}
    />
  );
};

export default LazyImg;
