import React from 'react';
import {Icon} from "../Icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonIconPropsType = {
  iconId: string,
  width?: string,
  height?: string,
  viewBox?: string,
}

export const ButtonIcon: React.FC<ButtonIconPropsType> = (props: ButtonIconPropsType) => {
  return (
    <StyledButton>
      <Icon width={props.width} height={props.height} iconId={props.iconId} viewBox={props.viewBox}/>
    </StyledButton>
  );
};

const StyledButton = styled.button`
    max-width: 52px;
    max-height: 52px;
    padding: 14px;
    border-radius: 8px;
    background-color: ${theme.colors.backgrounds.secondary};
    
    svg{
        fill: ${theme.colors.backgrounds.secondary};
    }
`
