import { Injectable } from '@angular/core';

import {} from 'nem2-sdk';

import { AlertService } from './alert.service';
import { generateBIP32Data } from "./../utils/CryptoHelpers.js";
import { haveWallet } from './../utils/Helpers';



@Injectable({
  providedIn: 'root'
})
export class WalletBuilderService {
  //Declare attribute
  _storage : Storage;  
  _Alert : AlertService;
  constructor(private alert : AlertService) {
    
    
    this._storage = localStorage;
    this._Alert = alert;
    
  }


  
  
  
}
