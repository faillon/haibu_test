import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/personas';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  selectedPersona?: Persona;
  constructor(private personaSrv: PersonasService) { }


  ngOnInit(): void {
    this.obtenerPersonas();
    console.log(this.personas)
  }


  // Requerimos obtener los datos de las personas
  obtenerPersonas() {
    this.personaSrv.obtenerPersonas().subscribe((res: any) => {
      let resp: Persona[];
      resp = res;
      this.personas = resp;
      
    });
  }

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }

}
