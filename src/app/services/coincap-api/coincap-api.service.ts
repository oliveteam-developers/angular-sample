import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Services
import { ApiBaseService } from  '../api-base/api-base.service';

// Env
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoincapApiService extends ApiBaseService {

  private apiBase: string;

  constructor(
    private http: HttpClient,
  ) {
    super();
    this.apiBase = environment.coincapApiBase;
  }

  assets(): Observable<any> {
    const url = this.makeUrl(`${this.apiBase}/assets`);
    return this.http.get(url);
  }

  exchanges(): Observable<any> {
    const url = this.makeUrl(`${this.apiBase}/exchanges`);
    return this.http.get(url);
  }

}
