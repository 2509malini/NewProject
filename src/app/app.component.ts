import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ApiServiceService } from './api-service.service';
const ELEMENT_DATA:Data[]=[];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newProject';
  sortBooks=[];
  displayedColumns:string[]=['author','birthday','birthPlace','books'];
  dataSource:any[]=[];
  constructor(private service:ApiServiceService){this.service.getData().then((data)=>{
      this.dataSource=data;
  });
}
}
