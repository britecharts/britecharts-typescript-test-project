import { select } from 'd3-selection';

import { SAMPLE_BAR_DATA } from '../data/bar-sample';

import { constructChart as constructBarChart } from './bar';

import { buildTemplate } from './template';

export default (window: Window) => {
  const chartContainerId = 'chartArea';

  window.document.body.innerHTML = buildTemplate(chartContainerId);

  const containerNode = document.querySelector(`#${chartContainerId}`);
  const container = select(containerNode);

  container
    .datum(SAMPLE_BAR_DATA)
    .call(constructBarChart(containerNode));
};
