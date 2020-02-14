import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromToDialogComponent } from './from-to-dialog.component';

describe('FromToDialogComponent', () => {
  let component: FromToDialogComponent;
  let fixture: ComponentFixture<FromToDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromToDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromToDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
