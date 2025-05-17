export class DropDown {
  constructor(menus, activeClass) {
    this.menus = document.querySelectorAll(menus);
    this.activeClass = activeClass;
    this.displayDropDown = this.displayDropDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  displayDropDown(event) {
    event.preventDefault();
    this.menus.forEach((menu) => {
      const parent = event.target.nextElementSibling;
      if (parent.contains(event.target) || menu.contains(event.target)) {
        parent.classList.toggle(this.activeClass);
        setTimeout(() => {
          document.addEventListener('click', this.handleClickOutside);
        }, 0);
      }
    });
  }

  handleClickOutside(event) {
    this.menus.forEach((menu) => {
      const parent = menu.nextElementSibling;
      if (
        parent &&
        parent.classList.contains(this.activeClass) &&
        !menu.contains(event.target) &&
        !parent.contains(event.target)
      ) {
        parent.classList.remove(this.activeClass);
        document.removeEventListener('click', this.handleClickOutside);
      }
    });
  }

  addEventMenu() {
    this.menus.forEach((menu) => {
      menu.addEventListener('click', this.displayDropDown);
    });
  }

  init() {
    if (this.menus.length && this.activeClass) {
      this.addEventMenu();
    }
    return this;
  }
}
