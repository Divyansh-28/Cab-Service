
import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CabService {
    
    Cabsinkart: any ={}

    addtoCart( id: any,Name: any, Contact: any, Price: any, Route: any){

      
        this.Cabsinkart.id= id
        this.Cabsinkart.DriverName= Name
        this.Cabsinkart.DriverContact=Contact
        this.Cabsinkart.Price=Price
        this.Cabsinkart.Route=Route
        return this.Cabsinkart



    }

}