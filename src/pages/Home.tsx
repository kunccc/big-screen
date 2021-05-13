import React from 'react';
import './home.scss';
import header from '../images/header.png';
import {Chart1} from '../components/Chart1';
import {Chart2} from '../components/Chart2';
import {Chart3} from '../components/Chart3';
import {Chart4} from '../components/Chart4';
import {Chart5} from '../components/Chart5';
import {Chart6} from '../components/Chart6';
import {Chart7} from '../components/Chart7';
import {Statistic} from '../components/Statistic';
import {Clock} from '../components/Clock';
import {Icon} from '../components/Icon';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <Clock/>
        <span>国家公安合成作战平台</span>
        <div className="info">
          <Icon name="position"/> shenzhen
          <Icon name="weather"/> 28℃ cloudy
        </div>
      </header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart5/>
          <Chart2/>
        </section>
        <section className="section2">
          <Statistic/>
          <Chart4/>
        </section>
        <section className="section3">
          <Chart6/>
          <Chart3/>
          <Chart7/>
        </section>
      </main>
      <p className="foot">© Hee 2021-2022</p>
    </div>
  );
};
