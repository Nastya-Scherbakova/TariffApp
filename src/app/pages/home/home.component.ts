import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';
import { Tariff } from '../../models/tariff.model';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  dataSource: Observable<Array<Tariff>>;
  asc: boolean = true;
  savedValue: string= "";
  public sortVariants= [
    {
      name: "Price",
      by: "cost"
    },
    {
      name: "Tariff name",
      by: "name"
    },
    {
      name: "Download speed",
      by: "download"
    }
  ]
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dataSource = this.api.getTariffList();
  }

  sort(by: string){
    let those = this;
    this.dataSource.subscribe(data =>{

      if(by==="cost"){
        data.sort(function(a,b){
          if(those.asc){
            return a[by] - b[by];
          }
          return b[by] - a[by];
        })
      }
      if(by==="name"){
        data.sort(function(a,b){
          if(those.asc){
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
          }

            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;

            return 0;
        })
      }
      if(by==="download"){
        data.sort(function(a,b){
          if(those.asc){
            return a.speed[by] - b.speed[by];
          }
          return b.speed[by] - a.speed[by];
        })
      }


      this.dataSource = of(data);

    })
  }

}
