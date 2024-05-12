import React from 'react';
import {Link} from "../Link/Link";
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import {FlexWrapper} from "../FlexWrapper";
import arrowRight from "../../assets/images/arrowRight.svg";
import imgMobile from "../../assets/images/advertiseMobile.png";

type AdvertiseItemPropsType = {
  text: string,
  linkName: string,
  linkHref: string,
  imgSrc?: string,
  imgAlt?: string,
}

export const AdvertiseItem: React.FC<AdvertiseItemPropsType> = (props: AdvertiseItemPropsType) => {
  return (
    <StyledWrapper>
      <Title>{props.text}</Title>
      <FlexWrapper justify={'space-between'}>
        <Link href={props.linkHref}>{props.linkName}</Link>
        {props.imgSrc && <Image src={props.imgSrc} alt={props.imgAlt}/>}
      </FlexWrapper>
    </StyledWrapper>
  );
};

const Title = styled.h3`
    ${font({weight: 800, lineHeight: 1.5, Fmin: 20, Fmax: 48})}
    text-align: left;
`
const StyledWrapper = styled.div`
    padding: clamp(12px,2.5vw ,40px);
    background-color: ${theme.colors.backgrounds.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(12px,2.5vw ,30px);
    border-radius: 16px;
    overflow: hidden;

    max-width: 900px;

    &:nth-child(2n) {
        position: relative;

        ${Title} {
            ${font({weight: 800, lineHeight: 1.5, Fmin: 20, Fmax: 40})}
            position: relative;
            z-index: 2;
        }
    }

    a {
        position: relative;
        padding: 16px 48px 16px 20px;
        z-index: 2;

        &::after {
            content: "";
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-left: 8px;
            margin-right: 16px;
            background: url(${arrowRight});
            z-index: 9;

            position: absolute;
            right: 0;
            bottom: 15px;
        }
    }
    
`
const Image = styled.img`
    max-width: 200px;
    flex-grow: 1;
    position: absolute;
    bottom: 0;
    right: clamp(20px,2vw ,40px);
    z-index: 1;
    transform: translateY(55%) scale(-1, 1);
    background-color: transparent;

    @media ${theme.media.large} {
        max-width: 155px;
    }
    @media ${theme.media.mobile} {
        max-width: 135px;
    }
`