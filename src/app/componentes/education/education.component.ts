import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educ_form:boolean=false;
  educ_list:any;
  formulario_educ:FormGroup;

  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder){
    this.formulario_educ=this.formBuilder.group(
      {
        institucion:['',Validators.required],
        carrera:['',Validators.required],
        inicio:[Number,[Validators.required,Validators.maxLength(4)]],
        fin:[Number,[Validators.required,Validators.maxLength(4)]],
        url_logoInst:['',Validators.required],
        persona_id:1
      }
    )
  }
  
  ngOnInit(): void {
   this.obtener_Educ();
  }

  agregar_Educ(){
    this.formulario_educ.get('institucion');
    this.formulario_educ.get('carrera');
    this.formulario_educ.get('inicio');
    this.formulario_educ.get('fin');
    this.formulario_educ.get('url_logoInst');
    this.datosPortfolio.agregarEducacion(this.formulario_educ).subscribe(() =>{
      this.obtener_Educ();
    });
   }

  delete_Educ(id:string): void{
    this.datosPortfolio.borrarEducacion(id).subscribe(() =>{
      this.obtener_Educ();
    });


  }

  off_on_form_educ(): void {
    this.educ_form=!this.educ_form;
   }

  obtener_Educ(): void {
    this.datosPortfolio.obtenerEducacion().subscribe(data=>{
      this.educ_list = data;
    });

   }

}

