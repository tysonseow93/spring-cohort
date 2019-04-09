import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolfApiService {

  constructor( private http: HttpClient) {  }

  private baseUrl = 'https://www.uxcobra.com/golfapi/course';

  getCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}s`);
  }

  getCourseDetails(courseId): Observable<any>{
    return this.http.get(`${this.baseUrl}${courseId}`);
  }

}
