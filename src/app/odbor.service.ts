import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Odbor} from "./odbor";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OdborService {
  private API_URL = environment.URL;
  constructor(private http: HttpClient) { }
  public getOdbors(): Observable<Odbor[]> {
    return this.http.get<any>(`${this.API_URL}/odbor/all`);
  }
}
