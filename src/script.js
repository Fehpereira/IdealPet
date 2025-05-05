import { ScrollSmooth } from './modules/scroll-animate.js';

const scroll = new ScrollSmooth(
  '[data-animate="scroll"]',
  window.innerHeight * 0.6,
);

scroll.init();
