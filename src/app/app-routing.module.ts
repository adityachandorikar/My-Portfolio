import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',
  loadChildren:() =>
  import('./modules/home/home.module').then((m)=>m.HomeModule)
},
{path:'about',
loadChildren:()=>
import('./modules/about/about.module').then((m)=>m.AboutModule)
},
{path:'education',
loadChildren:()=>
import('./modules/education/education.module').then((m)=>m.EducationModule)
},
{path:'project',
loadChildren:()=>
import('./modules/projects/projects.module').then((m)=>m.ProjectsModule)
},
{path:'skills',
loadChildren:()=>
import('./modules/skills/skills.module').then((m)=>m.SkillsModule)
},

{path:'notfound',
 loadChildren:()=>
 import('./modules/notfound/notfound.module').then((m)=>m.NotfoundModule)
},
{path:'**',
 redirectTo:'/notfound',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
