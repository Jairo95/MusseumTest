import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizformat5Component } from './quizformat5.component';

describe('Quizformat5Component', () => {
  let component: Quizformat5Component;
  let fixture: ComponentFixture<Quizformat5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizformat5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizformat5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
