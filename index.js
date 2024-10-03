import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, LineChart, Line } from 'recharts';

const BoxPlotData = [
  { name: 'EGF', опыт: [57.78, 73.27, 79.46, 89.97, 92.67], контроль: [58.60, 65.40, 73.35, 85.46, 90.12] },
  { name: 'GST', опыт: [0.93, 1.44, 1.71, 1.93, 2.34], контроль: [1.23, 1.56, 1.87, 2.39, 2.56] },
  { name: 'RANTEES', опыт: [134.76, 156.87, 168.35, 178.98, 192.56], контроль: [114.66, 128.57, 156.73, 178.25, 191.21] },
  { name: 'ММП-2', опыт: [0.60, 0.65, 0.72, 0.80, 0.93], контроль: [0.47, 0.91, 1.17, 1.36, 1.56] },
  { name: 'ТИМП', опыт: [74.20, 80.93, 91.45, 123.40, 202.10], контроль: [75.48, 111.23, 137.56, 175.47, 206.00] },
  { name: 'G-CSF', опыт: [3.13, 3.67, 4.55, 5.70, 7.89], контроль: [3.13, 4.23, 5.68, 7.28, 8.58] }
];

const CorrelationData = [
  { x: 80.05, y: 103.30, name: 'EGF vs ТИМП' },
  { x: 1.68, y: 4.86, name: 'GST vs G-CSF' },
  { x: 167.50, y: 0.73, name: 'RANTEES vs ММП-2' }
];

const ROCData = [
  { x: 0, y: 0 },
  { x: 0.12, y: 0.73 },
  { x: 0.25, y: 0.84 },
  { x: 0.32, y: 0.90 },
  { x: 1, y: 1 }
];

const BoxPlot = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={BoxPlotData} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="опыт" fill="#8884d8" />
      <Bar dataKey="контроль" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

const CorrelationPlot = () => (
  <ResponsiveContainer width="100%" height={400}>
    <ScatterChart>
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="X" />
      <YAxis type="number" dataKey="y" name="Y" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="Корреляции" data={CorrelationData} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);

const ROCCurve = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={ROCData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" type="number" />
      <YAxis dataKey="y" type="number" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="y" stroke="#8884d8" name="ROC кривая" />
    </LineChart>
  </ResponsiveContainer>
);

const Graphs = () => (
  <div>
    <h2>Сравнение биомаркеров в опытной и контрольной группах</h2>
    <BoxPlot />
    <h2>График корреляций</h2>
    <CorrelationPlot />
    <h2>ROC-кривая (пример для ММП-2)</h2>
    <ROCCurve />
  </div>
);

export default Graphs;
