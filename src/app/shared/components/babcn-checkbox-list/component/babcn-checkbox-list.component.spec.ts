import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabcnCheckboxListComponent } from './babcn-checkbox-list.component';

describe('BabcnCheckboxListComponent', () => {
  let component: BabcnCheckboxListComponent;
  let fixture: ComponentFixture<BabcnCheckboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabcnCheckboxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabcnCheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
