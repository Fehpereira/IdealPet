export class ScrollSmooth {
  constructor(sections, windowHalf) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = windowHalf;
    this.isVisible = this.isVisible.bind(this);
  }

  topOfElements() {
    this.sectionsDatas = [...this.sections].map((section) => {
      const offsetTop = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offsetTop - this.windowHalf),
      };
    });

    return this.sectionsDatas;
  }

  isVisible() {
    this.sectionsDatas.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      } 
    });
  }

  sectionsAddEvents() {
    window.addEventListener('scroll', this.isVisible);
  }

  init() {
    this.topOfElements();
    this.sectionsAddEvents();
  }
}
