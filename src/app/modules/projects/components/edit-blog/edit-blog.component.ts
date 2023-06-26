import { Component } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent {
 constructor(private gservice:GlobalServiceService){}
  id:any
  editdata(pdata:any){
    const obj={
      id:this.id,
      title:pdata.title,
      languages:pdata.langused,
      link:pdata.gitlink
    }
 this.gservice.updaterecord("projects",obj).subscribe(()=>{
  alert("record added successfully")
 })
  }

}
