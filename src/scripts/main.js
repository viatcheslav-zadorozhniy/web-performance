import { Modal } from './bootstrap';

import '../styles/style.css';

document.getElementById('show-chart').addEventListener('click', () => {
  import('./chart').then(chartModule => {
    const modal = new Modal('#chart-modal');

    modal.show();
    chartModule.initChart();
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
