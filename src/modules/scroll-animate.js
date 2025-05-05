export class ScrollSmooth {
  constructor(sections, windowHalf) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = windowHalf;
    this.topOfElements();
  }

  topOfElements() {
    this.sectionsDatas = [...this.sections].map((section) => {
      const offsetTop = section.offsetTop
      console.log(offsetTop)
      return {
        element: section,
        offset: Math.floor(offsetTop - this.windowHalf)
      }
    })

  }
}
