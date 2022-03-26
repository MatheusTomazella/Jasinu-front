/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OptionInputListComponent } from './option-input-list.component';

describe('OptionInputListComponent', () => {
  let component: OptionInputListComponent;
  let fixture: ComponentFixture<OptionInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
