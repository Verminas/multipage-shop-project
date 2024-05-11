import React from 'react';
import {Container} from "../../components/Container";
import logoSrc from '../../assets/images/behoof_logo.svg';
import {ButtonIcon} from "../../components/ButtonIcon/ButtonIcon";
import {SearchForm} from "../../components/SearchForm/SearchForm";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/Logo/Logo";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper align="center" gap={'30px'}>
          <h1>Behoof</h1>
          <FlexWrapper gap={'12px'} align="center" maxwidth={'max-content'}>
            <Logo/>
            <SmallText>Лучшие цены <br/>в интернет-магазинах</SmallText>
          </FlexWrapper>
          <FlexWrapper align="center" justify="space-between" gap={'20px'} flexshrink={'3'}>
            <SearchForm/>
            <ButtonsWrapper>
              <ButtonIcon iconId={'heart'} width={'22'} height={'19'}/>
              <ButtonIcon iconId={'chart'} width={'22'} height={'19'}/>
              <ButtonIcon iconId={'person'} width={'22'} height={'19'}/>
            </ButtonsWrapper>
          </FlexWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    min-height: 76px;
    padding: 12px 0;
    background-color: ${theme.colors.backgrounds.header};
    border-bottom: 1px solid ${theme.colors.backgrounds.secondary};
    outline: 1px solid gold;
    
    h1 {
        display: none;
    }
`
const SmallText = styled.span`
    display: inline-block;
    width: 100%;
    text-align: left;
    white-space: wrap;
    ${font({color: theme.colors.fonts.fontSecondary, lineHeight: 1.28, Fmin: 12, Fmax: 14})}
`

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    @media ${theme.media.large} {
        display: none;
    }
`

const HeaderWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
        & input{
            max-width: 100%;
        }
    }
`