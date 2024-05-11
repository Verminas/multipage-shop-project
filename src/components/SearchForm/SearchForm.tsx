import React from 'react';
import {Link} from "../Link/Link";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
//icons
import arrow from "../../assets/images/arrowDown.svg";
import search from "../../assets/images/search.svg";

export const SearchForm: React.FC = () => {
  return (
    <StyledForm action="#">
      <Link href="#" >Каталог товаров</Link>
      <InputWrapper>
        <StyledInput type="text" placeholder={'Поиск товаров'}></StyledInput>
      </InputWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form`
    display: flex;
    flex-shrink: 1;
    max-width: 840px;
    width: 100%;

    a {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding: 16px 48px 16px 20px;
        position: relative;
        
        @media ${theme.media.mobile} {
            display: none;
        }

        &::after {
            content: "";
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-left: 8px;
            margin-right: 16px;
            background: url(${arrow});
            z-index: 9;

            position: absolute;
            right: 0;
            bottom: 15px;
        }
    }
`

const InputWrapper = styled.div`
    width: 100%;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 21px;
        top: 15px;
        background: url(${search});
    }
`
const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 14px 20px 14px 54px;
    background-color: ${theme.colors.backgrounds.secondary};
    border-radius: 8px;
    
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
`
