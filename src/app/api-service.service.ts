import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
   getData():Promise<any>{
  //   return this.http.get('https://s3.amazonaws.com/api-fun/books.json').
  //   toPromise();
  return this.http.get('https://jsonplaceholder.typicode.com/todos').
    toPromise();
  }
}
