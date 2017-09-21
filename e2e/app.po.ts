import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLabelText() {
    return element(by.css('label')).getText();
  }

  getButtonCount() {
    return element.all(by.css('button')).count();
  }

  getCheckboxCount() {
    return element.all(by.css('input[type="checkbox"]')).count();
  }

  getCheckboxStatus() {
    return element(by.css('input[type="checkbox"]')).isSelected();
  }

  clickCheckbox() {
    element(by.css('input[type="checkbox"]')).click();

    return this
  }

  getButtonStatus() {
    return element(by.css('button')).isEnabled();
  }
}
