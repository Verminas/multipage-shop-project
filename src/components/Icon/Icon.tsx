import React from 'react';
import sprites from "../../assets/images/sprites.svg";

type IconPropsType = {
  iconId: string,
  width?: string,
  height?: string,
  viewBox?: string,
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg width={props.width || '18'} height={props.height || "16"} viewBox={props.viewBox ||  "0 0 24 24"}  xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${sprites}#${props.iconId}`}/>
    </svg>
  );
};