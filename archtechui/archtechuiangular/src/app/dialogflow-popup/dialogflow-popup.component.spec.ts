import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogflowPopupComponent } from './dialogflow-popup.component';

describe('DialogflowPopupComponent', () => {
  let component: DialogflowPopupComponent;
  let fixture: ComponentFixture<DialogflowPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogflowPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogflowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
