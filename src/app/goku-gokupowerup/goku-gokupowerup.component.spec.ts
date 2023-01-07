import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokuGokupowerupComponent } from './goku-gokupowerup.component';

describe('GokuGokupowerupComponent', () => {
  let component: GokuGokupowerupComponent;
  let fixture: ComponentFixture<GokuGokupowerupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GokuGokupowerupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GokuGokupowerupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
