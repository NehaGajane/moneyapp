import React from "react";
import "./styles.css";
import { Line, Pie } from '@ant-design/charts';

const ChartComponent = ({ sortedTransactions }) => {
  const data = sortedTransactions.map((item) => {
    return {
      date: item.date,
      amount: item.amount,
    };
  });

  const spendingData = sortedTransactions.filter((item) => {
    if (item.type === "expense") {
      return {
        tag: item.tag,
        amount: item.amount,
      };
    }
  });
  
  const config = {
    data: data,
    height: 400,
    xField: "date",
    yField: "amount",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#2c2c2c",
      },
    },
  };
  const spendingConfig = {
    data: spendingData,
    height: 400,
    angleField: "amount",
    colorField: "tag"
    }

  let chart;
  let pieChart;

  return (
    <div className="charts-wrapper">
      <div className="line-chart-wrapper">
        <h2>Your Analytics</h2>
        <Line
          className="chart"
          {...config}
          onReady={(chartInstance) => (chart = chartInstance)}
        />
      </div>
      <div 
        className='pie-chart-wrapper'>
        <h2>Your Spendings</h2>
        <Pie
          {...spendingConfig}
          onReady={(chartInstance) => (pieChart = chartInstance)}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
