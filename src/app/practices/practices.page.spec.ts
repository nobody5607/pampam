import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesPage } from './practices.page';

describe('PracticesPage', () => {
  let component: PracticesPage;
  let fixture: ComponentFixture<PracticesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
