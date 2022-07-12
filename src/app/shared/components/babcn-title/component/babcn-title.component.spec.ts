import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabcnTitleComponent } from './babcn-title.component';

describe('BabcnTitleComponent', () => {
  let component: BabcnTitleComponent;
  let fixture: ComponentFixture<BabcnTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabcnTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabcnTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
