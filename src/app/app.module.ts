import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { PgnfComponent } from './pgnf/pgnf.component';
import { TechblogComponent } from './blogs/techblog/techblog.component';
import { LifestyleblogComponent } from './blogs/lifestyleblog/lifestyleblog.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent ,children:[
    { path: 'u/0/techblog', component: TechblogComponent  },
    { path: 'u/1/lifestyleblog', component: LifestyleblogComponent  }
  ] },
  { path: 'contact', component: ContactComponent  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PgnfComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BlogsComponent,
    HomeComponent,
    PgnfComponent,
    TechblogComponent,
    LifestyleblogComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
