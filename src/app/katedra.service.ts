import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Katedra} from "./katedra";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KatedraService {
  private API_URL = environment.URL;
  constructor(private http: HttpClient) { }
  public getKatedry(): Observable<Katedra[]> {
    return this.http.get<any>(`${this.API_URL}/katedra/everyone`);
  }
}
