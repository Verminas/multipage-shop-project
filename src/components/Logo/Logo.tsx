import React from 'react';
import logoSrc from "../../assets/images/behoof_logo.svg";
import styled from "styled-components";
import {font} from "../../styles/Common";

export const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <img src={logoSrc} alt="behoof logo"/>
      <LogoTitle>Behoof</LogoTitle>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

const LogoTitle = styled.h2`
    ${font({family: 'Verdana', weight: 700, Fmin: 23, Fmax: 35})};
`