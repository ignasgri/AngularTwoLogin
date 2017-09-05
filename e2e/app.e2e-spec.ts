import { AngulartwologinPage } from './app.po';

describe('angulartwologin App', () => {
  let page: AngulartwologinPage;

  beforeEach(() => {
    page = new AngulartwologinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
