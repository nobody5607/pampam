import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonEndPage } from './lesson-end.page';

describe('LessonEndPage', () => {
  let component: LessonEndPage;
  let fixture: ComponentFixture<LessonEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonEndPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
