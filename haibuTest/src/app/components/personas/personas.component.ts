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
  selectedPersona: Persona = new Persona();
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
    if(!this.validarFecha(this.selectedPersona.fechaNacimiento)) this.selectedPersona.observacion = "Fecha Nacimiento No Cumple Formato"
  }

  validarRut(){

  }

  validarFecha(fecha: any){
    var fechaf = fecha.split("/");
        var d = fechaf[0];
        var m = fechaf[1];
        var y = fechaf[2];
        return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
  }

}
