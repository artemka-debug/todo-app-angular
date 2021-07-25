import { TestBed } from '@angular/core/testing';

import { TodoSdkService } from './todo-sdk.service';

describe('TodoApiService', () => {
  let service: TodoSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
