export class ScrollSmooth {
  constructor(sections, windowHalf) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = windowHalf;
    this.topOfElements();
  }

  topOfElements() {
    this.sections.forEach((section) => {
      const distanceOfTop = section.offsetTop
    });
  }
}
