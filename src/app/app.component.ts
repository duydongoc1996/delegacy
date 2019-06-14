import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from './services/alert.service';
import { WalletBuilderService } from './services/wallet-builder.service';

import { NetworkType } from 'nem2-sdk';
import nem from 'nem-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Delegacy';

  constructor(private translate : TranslateService, builder : WalletBuilderService, toast  : ToastrService){
    translate.setDefaultLang('en');

    toast.show(nem.utils.helpers.createTimeStamp());
    
    
  }
}
