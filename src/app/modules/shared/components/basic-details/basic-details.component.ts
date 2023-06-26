import { Component,OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent  implements OnInit {
  imgpath="assets/images/adityapassportphoto.png"
//  name="Aditya Chandorikar"
//  info="Full Stack MEAN/MERN Developer "
//  info1="Msc (Computer science)"
//  address="Pune Maharashtra"
//  contact="Mobile No:-8408093105"
//  email="adityavivekchandorikar@gmail.com"
//  dob=" Date of Birth:-04-08-1998"
 myrecords:any
constructor(private gservice:GlobalServiceService){}  
ngOnInit(): void {
   this.gservice.getrecords("basic-details").subscribe((res)=>{
    this.myrecords=res
    return 
   })


}

}
