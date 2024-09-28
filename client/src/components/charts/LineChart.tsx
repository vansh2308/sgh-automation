

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


const dataset = [
    { x: new Date(2001, 0, 1), y: 2, total: 45, furniture: 23, lighting: 10 },
    { x: new Date(2002, 0, 1), y: 5.5, total: 15, furniture: 20, lighting: 6 },
    { x: new Date(2003, 0, 1), y: 2, total: 35, furniture: 15, lighting: 18 },
    { x: new Date(2004, 0, 1), y: 8.5, total: 23, furniture: 25, lighting: 15 },
    { x: new Date(2005, 0, 1), y: 1.5, total: 19, furniture: 12, lighting: 10 },
    { x: new Date(2006, 0, 1), y: 5, total: 30, furniture: 14, lighting: 21 },
  ];

export default function CategoryDistribution() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={ 
        [{ 
            scaleType: 'time', 
            dataKey: 'x',
            tickNumber: dataset.length
            
        }]
    }
      series={[
        { dataKey: 'y', color: "#5DC4DA" },
        // { dataKey: 'total', color: "#2A7C9E" },
        { dataKey: 'furniture', color: "#FE3494" },
        { dataKey: 'lighting', color: "#181D3C" },
    ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
    />
  );
}
