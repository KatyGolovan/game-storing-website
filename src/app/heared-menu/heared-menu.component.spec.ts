import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearedMenuComponent } from './heared-menu.component';

describe('HearedMenuComponent', () => {
  let component: HearedMenuComponent;
  let fixture: ComponentFixture<HearedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
