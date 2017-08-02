import { FitsmapTourPage } from './app.po';

describe('fitsmap-tour App', () => {
  let page: FitsmapTourPage;

  beforeEach(() => {
    page = new FitsmapTourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
