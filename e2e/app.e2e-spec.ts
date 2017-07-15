import { SecondappPage } from './app.po';

describe('secondapp App', () => {
  let page: SecondappPage;

  beforeEach(() => {
    page = new SecondappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
