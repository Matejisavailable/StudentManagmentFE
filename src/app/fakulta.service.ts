import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fakulta} from "./fakulta";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FakultaService {
  private API_URL = environment.URL;
  constructor(private http: HttpClient) { }
  public getFakulty(): Observable<Fakulta[]> {
    return this.http.get<any>(`${this.API_URL}/fakulta/all`);
  }
}
