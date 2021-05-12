import React from 'react';
import './home.scss';
import header from '../images/header.png';
import {Chart1} from '../charts/Chart1';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <img src={header}/>
      </header>
      <main>
        <section className="section1">
          <Chart1/>
        </section>
        <section className="section2"></section>
        <section className="section3"></section>
      </main>
    </div>
  );
};
