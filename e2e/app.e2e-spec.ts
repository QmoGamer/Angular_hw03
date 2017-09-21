import { AppPage } from './app.po';

describe('homework03 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display I agree', () => {
    expect(page.getLabelText()).toBe('I agree');
  });

  it('should have button', () => {
    expect(page.getButtonCount()).toBe(1);
  })

  it('should have checkbox', () => {
    expect(page.getCheckboxCount()).toBe(1);
  })

  it('button should disable when checkbox onclick', () => {
    page.clickCheckbox();
    expect(page.getButtonStatus()).toBeTruthy();
    expect(page.getCheckboxStatus()).toBeTruthy();
  })

  it('button should enable when checkbox onclick and onclick', () => {
    page.clickCheckbox().clickCheckbox();
    expect(page.getButtonStatus()).toBeFalsy();
    expect(page.getCheckboxStatus()).toBeFalsy();
  })
});
