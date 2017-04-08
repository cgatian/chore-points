import { ChorePointsPage } from './app.po';

describe('chore-points App', () => {
  let page: ChorePointsPage;

  beforeEach(() => {
    page = new ChorePointsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
