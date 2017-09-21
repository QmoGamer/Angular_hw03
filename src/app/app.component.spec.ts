
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlInputElement: HTMLInputElement;
  let htmlButtonElement: HTMLButtonElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });
  
  it(`should use 'onChange()' on 'click' event in checkbox and toggle enableButton`, () => {
    htmlInputElement = debugElement.query(By.css('input[type="checkbox"]')).nativeElement;

    htmlInputElement.click();
    expect(component.enableButton).toBe(true);
    htmlInputElement.click();
    expect(component.enableButton).toBe(false);
    
    // error
    // htmlButtonElement = debugElement.query(By.css('button')).nativeElement;
    
    // htmlInputElement.click();
    // expect(htmlButtonElement.disabled).toBe(false);
    // htmlInputElement.click();
    // expect(htmlButtonElement.disabled).toBe(true);
  })
});
