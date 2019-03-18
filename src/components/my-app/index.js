import './style.pcss';
import view from './template.html';
import { Chart } from '../../lib/Chart/index';
import * as ChartData from '../../../chart_data.json';

const html = String.raw;

export default class MyApp extends HTMLElement {
  static template() {
    return html`${view}`;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }
}

let template = document.createElement('template');
template.innerHTML = MyApp.template();

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('chart');
  console.log(el);
  const FirstChart = new Chart(el, ChartData.default[0]);
  FirstChart.showTest();
});
