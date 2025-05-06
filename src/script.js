import { ScrollSmooth } from './modules/scroll-animate.js';
import { DropDown } from './modules/dropdown-menu.js';

const scroll = new ScrollSmooth(
  '[data-animate="scroll"]',
  window.innerHeight * 0.6,
);

scroll.init();

const dropdown = new DropDown('[data-animate="drop-down"] a', 'active');

dropdown.init()