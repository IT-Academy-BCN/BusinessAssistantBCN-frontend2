import { TestBed } from '@angular/core/testing';

import { VirtualAssistantSelectionsService } from './virtual-assistant-selections.service';

describe('VirtualAssistantSelectionsService', () => {
  let service: VirtualAssistantSelectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualAssistantSelectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setSelections should create a valid selections Object', () => {
    const sampleSelectedData=['sampleData']
    service.setSelections(sampleSelectedData);
    const expectedResult = {
      userID:1,
      content:[{id:0, content: sampleSelectedData[0]}]
    }
    expect(service.selections).toEqual(expectedResult);
  });
});
