import React from 'react';
import styled from "styled-components";
import {footerData} from "../../../index";
import {TitleList} from "../TitleList";
import {theme} from "../../../styles/Theme";

export const InfoLists = () => {
  const ListItemsElements = footerData.infoLists.map((i,indexI) => {
    const title = i.title;
    const itemsElements = i.items.map((e, index) => {
      return (
        <li key={index}><a href={e.href}>{e.text}</a></li>
      )
    })
    return (
      <WrapperListItem key={indexI}>
        <TitleList>{title}</TitleList>
        <List>
          {itemsElements}
        </List>
      </WrapperListItem>
    )
  })

  return (
    <WrapperLists>
      {ListItemsElements}
    </WrapperLists>
  );
};

const WrapperLists = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: left;
    flex-grow: 3;
    gap: 15px;
    
    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`

const WrapperListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${theme.media.mobile}{
        gap: 16px;
    }
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: ${theme.colors.fonts.fontSecondary};
    
    @media ${theme.media.mobile}{
        gap: 12px;
    }
`