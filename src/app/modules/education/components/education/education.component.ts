import { Component,OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
    edudetails:any
   constructor( private gservice:GlobalServiceService){}
   ngOnInit(): void {
    this.gservice.getrecords("edudetails").subscribe((res)=>{
      this.edudetails=res
    })
  }  
  //   pgdetails:any[]=[{
  //     DegreeName:"Msc Computer Science",
  //     College:"College of computer science and information technology, Latur",
  //     percentage:"91%",
  //     yop:"2022"
  //   }]
  // gdetails:any[]=[{
  //   DegreeName:"Bsc Computer Science",
  //   College:"Modern college of arts science and commerce, shivajinagar pune",
  //   percentage:"69%",
  //   yop:"2020"
  // }]
  // hscdetails:any[]=[{
  //   DegreeName:"HSC (CBSE BOARD)",
  //   College:"Jawahar Navodaya Vidyalaya ,Tuljapur Dharashiv",
  //   percentage:"63%",
  //   yop:"2016"
  // }]
  // sscdetails:any[]=[{
  //   DegreeName:"SSC (CBSE BOARD)",
  //   College:"Terna Public School, Dharashiv ",
  //   percentage:"89%",
  //   yop:"2014"
  // }]
}
