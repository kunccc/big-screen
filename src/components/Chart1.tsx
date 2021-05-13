import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/createEchartsOptions';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [27, 20, 30, 25, 15, 26, 20],
    2: [17, 26, 22, 29, 17, 21, 30],
    3: [14, 23, 30, 18, 20, 23, 14]
  };
  const render = data => {
    myChart.current.setOption(createEchartsOptions({
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      xAxis: {
        data: ['广东省', '浙江省', '福建省', '北京', '上海', '重庆', '新疆'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
        data: data
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    render(data[1]);
    setInterval(() => {
      render(data[Math.ceil(Math.random() * 3)]);
    }, 1500);
  }, []);
  return (
    <div className="chartWrapper">
      <div className="title">案发派出所管辖统计</div>
      <div ref={divRef} className="chart"/>
    </div>
  );
};