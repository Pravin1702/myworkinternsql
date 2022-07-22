import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/Models/Doctor';
import { DoctorService } from 'src/Service/Doctor.Service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  Doctors:Doctor[];

  constructor(private doctorService:DoctorService) {
    this.Doctors = this.doctorService.getDoctor();
   }

   like(Id:any)
   {
      this.doctorService.LikeDoctor(Id);
   }

   AddCart(Id:any)
  {
    var doctor;
    doctor=this.doctorService.AddCartDoctor(Id);
  }


  ngOnInit(): void {
  }

}
