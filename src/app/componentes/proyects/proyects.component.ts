import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyects_list:any;
  formulario_Proy:FormGroup;
  flag_form_proy:boolean=false;


  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder){
    this.formulario_Proy=this.formBuilder.group(
      {
        name_proyect:['',Validators.required],
        description:['',Validators.required],
        persona_id:1
      }
    )

  }
  
   ngOnInit(): void {
    this.obtener_Proy();
   }

   agregar_Proy(){
    this.formulario_Proy.get('name_proyect');
    this.formulario_Proy.get('description');
    this.datosPortfolio.agregarProyecto(this.formulario_Proy).subscribe(() =>{
    this.obtener_Proy();
    });
   }

  delete_Proy(id:string): void{
    this.datosPortfolio.borrarProyectos(id).subscribe(() =>{
      this.obtener_Proy();
    });
  }

  off_on_form_proy(): void {
    this.flag_form_proy=!this.flag_form_proy;
   }

  obtener_Proy(): void {
    this.datosPortfolio.obtenerProyectos().subscribe(data=>{
      this.proyects_list = data;
    });

   }

}
