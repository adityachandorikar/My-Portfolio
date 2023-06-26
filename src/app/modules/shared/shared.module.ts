import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BasicDetailsComponent } from './components/basic-details/basic-details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BasicDetailsComponent
  ]
})
export class SharedModule { }
