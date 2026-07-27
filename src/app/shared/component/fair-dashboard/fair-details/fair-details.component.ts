import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifairs } from 'src/app/shared/models/fair';
import { FairService } from 'src/app/shared/services/fair.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.css']
})
export class FairDetailsComponent implements OnInit {
  fairId!:string;
  fairObj!:Ifairs;


  constructor(
    private _routes:ActivatedRoute,
    private _fairsService:FairService
  ) { }

  ngOnInit(): void {
 this._routes.params.subscribe((params:Params)=>{
  this.fairId=params['fairId']
  if(this.fairId){
    this._fairsService.fetchFairById(this.fairId)
    .subscribe({
      next:data=>{
        this.fairObj=data
      }
    })
  }

 })
}

}
