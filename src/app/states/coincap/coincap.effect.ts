import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

// Services
import { CoincapApiService } from '../../services/coincap-api/coincap-api.service';

// Actions
import * as coincapActions from './coincap.action';

@Injectable()
export class CoincapEffects {

  constructor(
    private actions$: Actions<any>,
    private coincapApiService: CoincapApiService,
  ) { }

  fetchListCoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(coincapActions.fetchListCoins.type),
      switchMap(() =>
        this.coincapApiService.assets().pipe(
          map((data) => {
            return coincapActions.fetchListCoinsSuccess({ data: data.data });
          }),
          catchError((error) =>
            of(coincapActions.fetchListCoinsFailed({ error: error }))
          )
        )
      )
    )
  );

}