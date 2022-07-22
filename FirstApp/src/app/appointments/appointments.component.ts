import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/Models/Doctor';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  AptDoctors:Doctor[];

  constructor() { }

  ngOnInit(): void {
  }
  AddCart(Id:any)
  {
    var doctor;
    doctor=this.doctorService.AddCartDoctor(Id);
    this.AptDoctors=[new Doctor(doctor)];
  }
  public getDoctor(){
    return this.AptDoctors;
}

}
