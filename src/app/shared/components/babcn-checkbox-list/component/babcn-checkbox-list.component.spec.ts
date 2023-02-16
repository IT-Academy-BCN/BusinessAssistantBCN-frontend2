import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabcnCheckboxListComponent } from './babcn-checkbox-list.component';

const checkedData = []
const data  = [{zoneName: 'zone1'}, {zoneName: 'zone2'}];
const event = true;

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

  it('should add data to checkedData', () => {
    component.checkData(data, event)
    expect(component.checkedData).toContain(data)  })

  it('should remove data from checkedData', () => {
    component.checkData(data[1], !event)
    component.checkedData.splice(component.checkedData.indexOf(data[1]), 1);
    expect(component.checkedData).not.toContain(data[1])  })
});