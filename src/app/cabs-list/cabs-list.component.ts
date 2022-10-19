import { Component, OnInit } from '@angular/core';
import {Cabs} from './cabsinterface';
import {CabService} from 'src/app/service/ride-page.service'

@Component({
  selector: 'app-cabs-list',
  templateUrl: './cabs-list.component.html',
  styleUrls: ['./cabs-list.component.css']
})
export class CabsListComponent implements OnInit {

  constructor( private cabService : CabService) { }

  cabList=[{
    id: 1,
    DriverName: "Venku Naidu",
    DriverContact: 6969696969,
    Price: 500,
    Route:"Miyapur-Secunderabad",

  },{
    id: 2,
    DriverName: "GVV",
    DriverContact: 6969667369,
    Price: 700,
    Route:"Miyapur-Secunderabad",

  },{
    id: 3,
    DriverName: "Avinash Eranki",
    DriverContact: 6963457969,
    Price: 900,
    Route:"Miyapur-Secunderabad",

  }]
  
  Cartlist=[]
  

  ngOnInit(): void {

  }
  addtocart(id: any,Name: any, Contact: any, Price: any, Route: any){
this.Cartlist.push(this.cabService.addtoCart(id,Name, Contact, Price, Route))

  }

}
