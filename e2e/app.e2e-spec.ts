import { SetupNgBootstrapPage } from './app.po';

describe('setup-ng-bootstrap App', () => {
  let page: SetupNgBootstrapPage;

  beforeEach(() => {
    page = new SetupNgBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
