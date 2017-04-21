import { NoyResumePage } from './app.po';

describe('noy-resume App', () => {
  let page: NoyResumePage;

  beforeEach(() => {
    page = new NoyResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
