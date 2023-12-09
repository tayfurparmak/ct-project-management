import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookaddComponent } from './phonebookadd.component';

describe('PhonebookaddComponent', () => {
  let component: PhonebookaddComponent;
  let fixture: ComponentFixture<PhonebookaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonebookaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonebookaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
