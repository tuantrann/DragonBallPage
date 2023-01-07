import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDialog } from './search-dialog.component';

describe('SearchDialog', () => {
  let component: SearchDialog;
  let fixture: ComponentFixture<SearchDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
