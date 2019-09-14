import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnswerPage } from './test-answer.page';

describe('TestAnswerPage', () => {
  let component: TestAnswerPage;
  let fixture: ComponentFixture<TestAnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAnswerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
