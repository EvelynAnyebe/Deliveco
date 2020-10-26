import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {
  targetClient: any ;
  constructor() {
    this.targetClient =
    [{client: 'Individuals', info: 'Send regular parcels as individual customer ?'},
    {client: 'Business', info: ' Offer to your customers a high quality delivery experience?'},
    {client: 'Devs', info: 'Be part of our happy and independent community?'}]
  }

  ngOnInit(): void {
  }


}
