import { TestBed } from '@angular/core/testing';

import { ColaReproduccion } from './cola-reproduccion';

describe('ColaReproduccion', () => {
  let service: ColaReproduccion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaReproduccion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
