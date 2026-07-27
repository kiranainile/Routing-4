import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from 'src/app/shared/models/fair';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.css']
})
export class FairCardComponent implements OnInit {
    @Input() fairObj!: Ifairs


  constructor() { }

  ngOnInit(): void {
  }

}
