import { TestBed } from '@angular/core/testing';

import { Neo4jsService } from './neo4js.service';

describe('Neo4jobjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Neo4jsService = TestBed.get(Neo4jsService);
    expect(service).toBeTruthy();
  });
});
