import React from 'react';
import {footerData} from "../../index";
import {Icon} from "../Icon/Icon";
import {TitleList} from "../../layout/footer/TitleList";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../FlexWrapper";

export const SocialNetworks: React.FC = () => {
  const socialListElements = footerData.socialList.map(l => {
    const title = l.title;
    const listElements = l.list.map((i) => {
      return (
        <li key={i.id}><a href={i.href}><Icon iconId={i.iconId} width={'24'} height={'24'}/></a></li>
      )
    })
    return (
      <>
        <TitleList>{title}</TitleList>
        <List>
          {listElements}
        </List>
      </>
    )
  })

  return (
    <FlexWrapper direction="column" gap={'20px'}>
      {socialListElements}
    </FlexWrapper>
  );
};

const List = styled.ul`
    display: flex;
    gap: 20px;
    
    svg{
        fill: ${theme.colors.icons.social};
    }
`

