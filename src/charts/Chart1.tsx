import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {Title} from '../shared/Title';
import {createEchartsOptions} from '../shared/createEchartsOptions';

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
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
        data: [27, 20, 36, 25, 15, 26, 37, 18, 29]
      }]
    }));
  }, []);
  return (
    <div className="chartWrapper">
      <Title title="案发派出所管辖统计"/>
      <div ref={divRef} className="chart"/>
    </div>
  );
};