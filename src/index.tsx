import React from "react";
import useIntersect from "use-intersect";

export interface Props {
  src: string;
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
  const { src, style} = props;

  const imgRef = useIntersect((targetElement: HTMLImageElement) => {
    targetElement.src = targetElement.dataset.src || "";
  });

  const includeKeys = Object.keys(props).filter((key) => {
    return !['src'].includes(key)
  })

  const customProps = includeKeys.reduce((acc, key) => {
    acc[key] = props[key]
    return acc
  }, {})

  const imgProps = {
    ...customProps,
    "data-src" : src,
    style: style ? { ...defaultStyle, ...style } : {}
  };

  return <img ref={imgRef} {...imgProps} />;
};

export default LazyImg;
