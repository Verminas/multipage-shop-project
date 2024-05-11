import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {Logo} from "../../components/Logo/Logo";
import {footerData} from "../../index";
import {Icon} from "../../components/Icon/Icon";
import {SocialNetworks} from "../../components/SocialNetworks/SocialNetworks";
import {FlexWrapper} from "../../components/FlexWrapper";
import {InfoLists} from "./infoLists/InfoLists";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <WrapperContent>
          <FlexWrapper direction="column" gap={'20px'} width={'fit-content'} >
            <Logo/>
            <SocialNetworks/>
          </FlexWrapper>
          <InfoLists/>
        </WrapperContent>
        <Copyright>
          Copyright © 2023 Behoof, Inc. Все права защищены
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.backgrounds.secondary};
    padding: 32px 0 24px;
`

const WrapperContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    gap: 60px;
    flex-wrap: wrap;
    
    @media ${theme.media.large} {
        gap: 15px;
    }
    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`

const Copyright = styled.span`
    display: block;
    padding-top: 24px;
    ${font({lineHeight: 1.5, color: theme.colors.fonts.fontThird, Fmin: 12, Fmax: 16})};
    text-align: left;
    border-top: 1px solid ${theme.colors.borders.light};
`