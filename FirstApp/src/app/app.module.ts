import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../services/about.service';

import { RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
 {path :'about', component:AboutComponent},
 {path :'contacts', component:ContactsComponent},
 {path :'', 
 redirectTo: '', 
 pathMatch:'full'
}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, FormsModule , RouterModule.forRoot(appRoutes)
  ],

  providers: [AboutService],

  bootstrap: [AppComponent]
})
export class AppModule { }
