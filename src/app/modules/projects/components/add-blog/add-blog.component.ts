import { Component } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {


constructor(private gservice:GlobalServiceService){}
adddata(pdata:any){
  const obj={
    title:pdata.pname,
    languages:pdata.langused,
    desc:pdata.pdesc,
    link:pdata.gitlink
  }
 this.gservice.addrecords("projects",obj).subscribe(()=>{
  alert("Record Added Successfully")

 })
}
}
