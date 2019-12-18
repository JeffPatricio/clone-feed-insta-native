import React from "react";
import { Small, Original } from "./styles";

const LazyImage = ({ smallSource, source, aspectRatio }) => {

  return (
    <Small source={smallSource} ratio={aspectRatio} resizeMode="contain" blurRadius={1}>
      <Original source={source} ratio={aspectRatio} resizeMode="contain" />
    </Small>
  )
}

export default LazyImage;