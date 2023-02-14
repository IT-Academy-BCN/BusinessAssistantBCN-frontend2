import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAssistantMainContentComponent } from './virtual-assistant-main-content.component';

describe('VirtualAssistantMainContentComponent', () => {
  let component: VirtualAssistantMainContentComponent;
  let fixture: ComponentFixture<VirtualAssistantMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualAssistantMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualAssistantMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
