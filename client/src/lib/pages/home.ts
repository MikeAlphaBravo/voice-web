import Page from './page';

const CLASS_NAME = 'home';

export default class HomePage extends Page {
  constructor() {
    super(CLASS_NAME);
  }

  init(navHandler: Function) {
    super.init(navHandler);
    this.content.innerHTML = 'Welcome to Common Voice';
    return null;
  }
}
