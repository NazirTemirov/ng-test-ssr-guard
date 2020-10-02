import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyForBrowserComponent } from './only-for-browser.component';

describe('OnlyForBrowserComponent', () => {
  let component: OnlyForBrowserComponent;
  let fixture: ComponentFixture<OnlyForBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyForBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyForBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
