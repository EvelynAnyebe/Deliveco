import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {
  targetClient:any;
  constructor() {
    this.targetClient =
    [{client: 'Individuals',info:'Want to send regular parcels as individual customer ?'},
    {client: 'Business',info:'Want to offer to your customers a high quality delivery experience?'},
    {client:'Devs', info:'Want to be part of our happy and independent couriers community ?'}
  ]
  }

  ngOnInit(): void {
  }


}
