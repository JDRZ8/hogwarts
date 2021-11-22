// Importar Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider'
// Importar Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TablaComponent } from './shared/components/tabla/tabla.component';
import { HomeComponent } from './paginas/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './paginas/form/form.component';
import { StudentsComponent } from './paginas/students/students.component';
import { StaffComponent } from './paginas/staff/staff.component';
import { TeachersComponent } from './paginas/teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TablaComponent,
    FormComponent,
    StudentsComponent,
    StaffComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
