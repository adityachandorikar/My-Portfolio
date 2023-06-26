import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  baseurl:string="http://localhost:3000"


  constructor(private http:HttpClient) { }

//getrecords
getrecords(uname:string){
  const url=`${this.baseurl}/${uname}`
  return this.http.get(url)
}
//addrecords
addrecords(uname:string,pdata:any){
  const url=`${this.baseurl}/${uname}`
  return this.http.post(url,pdata)
}
//delete records
deleterecord(tname:any,id:any){
const url =`${this.baseurl}/${tname}/${id}`
return this.http.delete(url)
}

//update records
updaterecord(tname:any,pdata:any){
  const url= `${this.baseurl}/${tname}`
 return this.http.put(url,pdata)
 
}
}
