import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./styles/GlobalStyle";
// images
import image from '../src/assets/images/behoof_logo.svg';
import imgMobile from '../src/assets/images/advertiseMobile.png';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//data
export const footerData = {
  socialList: [
    {
      title: 'Мы в соц сетях',
      list: [
        {
          name: 'vk',
          iconId: 'vk',
          href: '#',
          id: '1'
        },
        {
          name: 'tiktok',
          iconId: 'tiktok',
          href: '#',
          id: '2'
        },
        {
          name: 'inst',
          iconId: 'inst',
          href: '#',
          id: '3'
        },
        {
          name: 'telegram',
          iconId: 'telegram',
          href: '#',
          id: '4'
        },
        {
          name: 'youtube',
          iconId: 'youtube',
          href: '#',
          id: '5'
        },
      ],
    }
  ],
  infoLists: [
    {
      title: 'Пользователю',
      items: [
        {
          text: 'Связаться с нами',
          href: '#',
        },
        {
          text: 'Поддерка пользователей',
          href: '#',
        },
        {
          text: 'FAQ & Руководства',
          href: '#',
        },
        {
          text: 'Политика конфиденциальности',
          href: '#',
        },
        {
          text: 'Пользовательское соглашение',
          href: '#',
        },
      ],
    },
    {
      title: 'Популярные категории',
      items: [
        {
          text: 'Смартфоны',
          href: '#',
        },
        {
          text: 'Teteras electricas',
          href: '#',
        },
        {
          text: 'Стиральные машины',
          href: '#',
        },
        {
          text: 'Телевизоры',
          href: '#',
        },
        {
          text: 'Ноутбуки',
          href: '#',
        },
      ],
    },
    {
      title: 'Команда Behoof',
      items: [
        {
          text: 'О нас',
          href: '#',
        },
        {
          text: 'Работа у нас',
          href: '#',
        },
      ],
    },
  ],
};
export const advertiseData = [
  {
    text: '1.8 млн товаров в 2272 магазинах найди, сравни, выберай!',
    linkName: 'перейти к категориям',
    linkHref: '#',
  },
  {
    text: 'Топ-10 смартфонов 2023 года',
    linkName: 'смотреть',
    linkHref: '#',
    imgSrc: imgMobile,
    imgAlt: 'сматрфон',
    minCard: true,
  },
]






root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
