import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

// Services
import { CoincapApiService } from '../../services/coincap-api/coincap-api.service';
import { HelperService } from '../../services/helper/helper.service';

// States
import { selectCoincapData } from '../../states/coincap';

// Interfaces
import { ICoincapAsset, ICoincapExchange, ITableColumn } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public coinColumns: ITableColumn[] = [];
  public exchangeColumns: ITableColumn[] = [];
  public listCoins: ICoincapAsset[] = [];
  public listExchanges: ICoincapExchange[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private coincapApiService: CoincapApiService,
    private helperService: HelperService,
  ) { }

  ngOnInit() {
    this.coinColumns = [
      { field: 'rank', header: 'Rank' },
      { field: 'id', header: 'ID' },
      { field: 'symbol', header: 'Symbol' },
      { field: 'name', header: 'Name' },
      { field: 'priceUsd', header: 'Price in USD' },
    ];

    this.exchangeColumns = [
      { field: 'rank', header: 'Rank' },
      { field: 'id', header: 'ID' },
      { field: 'exchangeUrl', header: 'Url' },
      { field: 'volumeUsd', header: 'Volume' },
    ];

    this.subscriptions.push(
      this.store.select(selectCoincapData).subscribe(res => {
        if (res && res.length) {
          this.listCoins = res;
        }
      })
    );

    this.getListCoins();
  }

  public getFloatNumber(value: string) {
    return this.helperService.getFloatNumber(value);
  }

  private async getListCoins() {
    try {
      const result = await this.handleListExchanges();
      this.listExchanges = result.data;
    } catch (e) {
      console.log(e);
    }
  }

  private handleListExchanges(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.subscriptions.push(
        this.coincapApiService.exchanges().subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
      );
    });
  }

  ngOnDestroy() {
    if (this.subscriptions.length) {
      this.subscriptions.map(sub => {
        if (sub) {
          sub.unsubscribe();
        }
      });
    }
  }

}
