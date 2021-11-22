import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { PEPInterface } from "src/app/interfaces/data.interface";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  secciones: string[] = ['Estudiantes'];

  estudiantes!: PEPInterface[];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.mostrarEstudiantes();
  }

  mostrarEstudiantes(): void {
    this.dataSvc.getEstudiantes()
      .pipe(
        tap((estudiantes: PEPInterface[]) => this.estudiantes = estudiantes)
      ).subscribe();
  }
}
