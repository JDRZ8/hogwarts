// Módulos importados:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes importados:
import { FormComponent } from './paginas/form/form.component';
import { HomeComponent } from './paginas/home/home.component';
import { StudentsComponent } from './paginas/students/students.component';
import { StaffComponent } from './paginas/staff/staff.component';
import { TeachersComponent } from './paginas/teachers/teachers.component';

// Define a qué partes de la página se va a dirigir si se da una ruta
/* - path: Indica el apartado dentro de la página
/  - component: Indica qué componente se mostrará
/  - redirectTo: Indica a qué ruta va a redirigirse al usuario */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'staff', component: StaffComponent },
  { path:'**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
