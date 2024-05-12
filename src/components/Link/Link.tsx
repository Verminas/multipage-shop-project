import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


type LinkPropsType = {
  href: string,
  children: string,
}

export const Link = (props: LinkPropsType) => {
  return (
    <StyledLink href={props.href} >
      <span>{props.children}</span>
    </StyledLink>
  );
};

const StyledLink = styled.a`
    background-color: ${theme.colors.accent};
    color: ${theme.colors.fonts.fontLink};
    padding: 16px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: max-content;
    border-radius: 8px;
    white-space: nowrap;
    
    span{
        ${font({weight: 500, color: theme.colors.fonts.fontLink})};
        font-size: 16px;
        &::first-letter{
            text-transform: uppercase;
        }
    }
`