import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { PEPInterface } from "src/app/interfaces/data.interface";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})

export class TeachersComponent implements OnInit {
  secciones: string[] = ['Profesores'];

  profesores!: PEPInterface[];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.mostrarProfesores();
  }

  mostrarProfesores(): void {
    this.dataSvc.getProfesores()
      .pipe(
        tap((profesores: PEPInterface[]) => this.profesores = profesores)
      ).subscribe();
  }
}
