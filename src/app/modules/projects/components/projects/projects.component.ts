import { Component,OnInit } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 projects:any
  constructor(private service:GlobalServiceService ){}
  ngOnInit(): void {
      this.service.getrecords("projects").subscribe((res)=>{
        return this.projects=res
      })
  }
  delete(id:any){
    this.service.deleterecord("projects",id).subscribe(()=>{
      alert("record deleted successfully")
    })
  }





project1:any[]=[
  {title:"A Blog using Angular",
   languages:"Angular,Bootstrap,Typescript,Javascript,CSS,HTML,JSON Server",
   desc:"The Project is a blog website made by using Angular, Bootstrap, HTML and CSS. The site has registration and login form which will get consumers details. In this site user can see different blogs uploaded by different persons and can read them. In styling perspective, the project has a responsive navigation bar, a carousel. It also has few cards which shows different types of blog topics. The site also has a footer which shows the essential details about website. In this project I have implemented the angular for the purpose of CRUD operations, verification, routing, data-binding etc. For database server JSON server is used. ",
}
]
project2:any[]=[
  {
    title:"Online Courier Services System",
    languages:" HTML, CSS, JavaScript, PHP, MySQL",
    desc:"This project deals with the 'Courier Information System'. The system is used for daily activities such as booking a courier, maintain employee details, process payroll of employees, maintain hub details, maintain company details etc. This project deals with the 'Courier management. The system is used for daily activities such as booking, delivery, return, company details and pickup centers. It is very difficult to do this process manually. Hence it is recommended to computerize the process by developing the relative software as the world is turning into information and technology; computerization becomes necessity in all walks of life."
  }
]
project3:any[]=[
  {
    title:"E-commerce Website ",
    languages:"HTML5, CSS, JavaScript, Bootstrap",
    desc:"The Project is a E-commerce Website Named as (ShopLocal) made by using Bootstrap. The site has registration and signup form which will get consumers details. It has a responsive navigation bar with dropdown menu. It has a carousel which shows the products that are on special discount. It also has few cards which shows different variety of products. The site also has a footer which shows the essential details about website"
  }
]
}
