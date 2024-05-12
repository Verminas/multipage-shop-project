import React from 'react';
import {Container} from "../../../../../components/Container";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import styled from "styled-components";
import {advertiseData} from "../../../../../index";
import {AdvertiseItem} from "../../../../../components/AdvertiseItem/AdvertiseItem";
import {theme} from "../../../../../styles/Theme";

export const AdvertiseBlock = () => {
  const advertiseElements = advertiseData.map((a, index) => {
    return (
      <AdvertiseItem text={a.text}
                     linkName={a.linkName}
                     linkHref={a.linkHref}
                     imgSrc={a.imgSrc}
                     imgAlt={a.imgAlt}
                     key={index}
      />
    )
  })
  return (
    <Wrapper>
      <Container>
        <StyledFlexWrapper justify="space-between" gap={'30px'}>
          {advertiseElements}
        </StyledFlexWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 40px 0 50px;
    background-color: ${theme.colors.backgrounds.primary};
`
const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`