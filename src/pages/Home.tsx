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
import {Form} from '../components/Form';

export const Home = () => {
  return (
    <div className="home">
      <header>
        <span>国家公安合成作战平台</span>
      </header>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart5/>
          <Chart2/>
        </section>
        <section className="section2">
          <Form/>
          <Chart4/>
        </section>
        <section className="section3">
          <Chart6/>
          <Chart3/>
          <Chart7/>
        </section>
      </main>
    </div>
  );
};
