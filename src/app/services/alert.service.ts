import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  _ngToast : ToastrService;
  _translate : TranslateService;


  constructor(ngToast : ToastrService,translateService : TranslateService) {
    this._ngToast = ngToast;
    this._translate = translateService;
    
  }

  /**
   * ERROR ALERT
   */
  missingFormData() {
    let alert = this;
    this._translate.get('ALERT.MISSING_FROM_DATA')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  errorWalletDownload() {
    let alert = this;
    this._translate.get('ALERT.ERROR_WALLET_DOWNLOAD')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  passwordsNotMatching() {
    let alert = this;
    this._translate.get('ALERT.PASSWORDS_NOT_MATCHING')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  invalidKeyForAddress() {
    let alert = this;
    this._translate.get('ALERT.INVALID_KEY_FOR_ADDR')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  noWalletLoaded() {
    let alert = this;
    this._translate.get('ALERT.NO_WALLET_LOADED')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  walletNameExists() {
    let alert = this;
    this._translate.get('ALERT.WALLET_NAME_EXISTS')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  invalidWalletFile() {
    let alert = this;
    this._translate.get('ALERT.INVALID_WALLET_FILE')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  invalidCustomNode() {
    let alert = this;
    this._translate.get('ALERT.INVALID_CUSTOM_NODE')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  invalidWebsocketPort() {
    let alert = this;
    this._translate.get('ALERT.INVALID_WEBSOCKET_PORT')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );
  }
  websocketError(message : string) {
    this._ngToast.show(message);
  }
  mijinDisabled() {
    let alert = this;
    this._translate.get('ALERT.MIJIN_DISABLED')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }
  getNamespacesByIdError(message) {
    let alert = this;
    this._translate.get('ALERT.GET_NS_BY_ID_ERROR')
      .subscribe({
        next : x=> alert._ngToast.show(x + message),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }
  getAccountDataError(message) {
    let alert = this;
    this._translate.get('ALERT.GET_ACCOUNT_DATA_ERROR')
      .subscribe({
        next : x=> alert._ngToast.show(x + message),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }
  invalidAddressForNetwork(address,network) {
    let alert = this;
    this._translate.get(['ALERT.ERROR_OCCURRED','ALERT.INVALID_ADDR_FOR_NETWORK'])
      .subscribe({
        next : ([x,y])=> alert._ngToast.show(x + address + y + '(' + network + ')'),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }
  invalidPassword() {
    let alert = this;
    this._translate.get('ALERT.INVALID_PASSWORD')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }
  transactionError(message) {    
    this._ngToast.show(message)       
  }
  invalidPrivateKey() {
    let alert = this;
    this._translate.get('ALERT.INVALID_PRIVATE_KEY')
      .subscribe({
        next : x=> alert._ngToast.show(x),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }
  createWalletFailed(err) {
    let alert = this;
    this._translate.get('ALERT.CREATE_WALLET_FAILED')
      .subscribe({
        next : x=> alert._ngToast.show(x + err),
        error : err => alert._ngToast.show(err)      
      }
    );    
  }



}
