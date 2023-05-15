import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  xperience_list:any;
  flag_form_exp:boolean=false;
  formulario_exp:FormGroup;

  constructor(private datosPortfolio:PortfolioService,private formBuilder:FormBuilder){
    this.formulario_exp=this.formBuilder.group(
      {
        position:['',Validators.required],
        company:['',Validators.required],
        url_logo_company:['',Validators.required],
        cityjob:['',Validators.required],
        cicle:['',Validators.required],
        persona_id:1
      }
    )


  }
  
   ngOnInit(): void {
    this.obtener_Exp();
   }

   agregar_Exp(){
    this.formulario_exp.get('position');
    this.formulario_exp.get('company');
    this.formulario_exp.get('url_logo_company');
    this.formulario_exp.get('cityjob');
    this.formulario_exp.get('cicle');
    this.datosPortfolio.agregarExperiencia(this.formulario_exp).subscribe(() =>{
    this.obtener_Exp();
    });
   }

  delete_Exp(id:string): void{
    this.datosPortfolio.borrarExperiencia(id).subscribe(() =>{
      this.obtener_Exp();
    });
  }

  off_on_form_exp(): void {
    this.flag_form_exp=!this.flag_form_exp;
   }

  obtener_Exp(): void {
    this.datosPortfolio.obtenerExperiencia().subscribe(data=>{
      this.xperience_list = data;
    });

   }

}
