import { TestBed } from '@angular/core/testing';

import { WalletBuilderService } from './wallet-builder.service';

describe('WalletBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletBuilderService = TestBed.get(WalletBuilderService);
    expect(service).toBeTruthy();
  });
});
