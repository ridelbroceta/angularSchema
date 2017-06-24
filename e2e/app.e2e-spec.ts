import { MyFirstAngular2Page } from './app.po';

describe('my-first-angular2 App', () => {
  let page: MyFirstAngular2Page;

  beforeEach(() => {
    page = new MyFirstAngular2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
