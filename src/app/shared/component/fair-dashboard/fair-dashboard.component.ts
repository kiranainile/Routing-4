import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fair';
import { FairService } from '../../services/fair.service';
import { error } from 'console';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.css']
})
export class FairDashboardComponent implements OnInit {
  fairsArr:Ifairs[]=[]

  constructor(
    private _fairService:FairService

  ) { }

  ngOnInit(): void {
    this.getFairsDetails()

  }
 
  getFairsDetails(){
    this._fairService.fectchFairs()
    .subscribe({
      next:data=>{
        this.fairsArr=data
      },
      error:err=>{
        console.log(err)
      }
    })
  }


}
