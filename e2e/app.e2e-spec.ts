import { CookprojectPage } from './app.po';

describe('cookproject App', () => {
  let page: CookprojectPage;

  beforeEach(() => {
    page = new CookprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
