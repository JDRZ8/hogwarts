import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { PEPInterface } from "src/app/interfaces/data.interface";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})

export class StaffComponent implements OnInit {
  secciones: string[] = ['Personajes'];

  personajes!: PEPInterface[];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.dataSvc.getPersonajesDeCasa('gryffindor')
      .pipe(
        tap((personajes: PEPInterface[]) => this.personajes = personajes)
      ).subscribe();
  }

  mostrarPersonajes(event: any): void {
    let valorSelect = event.currentTarget.value;

    this.dataSvc.getPersonajesDeCasa(valorSelect)
      .pipe(
        tap((personajes: PEPInterface[]) => this.personajes = personajes)
      ).subscribe();
  }
}
