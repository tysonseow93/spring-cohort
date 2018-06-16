import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import * as giphyKey from '../local-api-key/giphy-api-key';



@Injectable()
export class GiphyService {

  constructor(
    private http: HttpClient
  ) {
    console.log(giphyKey);
  }

  getGiphys(): Observable<any> {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${giphyKey.default}&limit=5`);
  }
  }



