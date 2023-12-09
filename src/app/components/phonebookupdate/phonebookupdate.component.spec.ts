import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookupdateComponent } from './phonebookupdate.component';

describe('PhonebookupdateComponent', () => {
  let component: PhonebookupdateComponent;
  let fixture: ComponentFixture<PhonebookupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonebookupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonebookupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
