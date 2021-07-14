import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './components/update/update.component';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { DeleteUsersComponent } from './components/delete-users/delete-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTab, MatTabsModule } from '@angular/material/tabs';

const routes : Routes = [
  {path:'',pathMatch:'full',redirectTo:'dashboard'},
  {path:'dashboard',component:DashboardComponent},
  {path:'get-users',component:GetUsersComponent},
  {path:'delete-users',component:DeleteUsersComponent},
  {path:'update-users',component:UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UpdateComponent,
    GetUsersComponent,
    DeleteUsersComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
