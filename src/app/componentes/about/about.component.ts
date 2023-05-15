import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data_portfolio:any;
  formulario_about:FormGroup;
  clon_about:String='';
  flag_form_about:boolean=false;

  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder){
    this.formulario_about=this.formBuilder.group(
      {
        id:1,
        nombre_y_apellido:['',Validators.required],
        nac:['',Validators.required],
        domicilio:['',Validators.required],
        correo:['',Validators.required],
        sobre_mi:['',Validators.required],
        url_foto:['',Validators.required],
        url_banner:['',Validators.required]
      }
    )

  }
  
   ngOnInit(): void {
    this.obtener_aboutMe();
    
   }

   modifica_About(): void {
    this.formulario_about.get('nombre_y_apellido');
    this.formulario_about.get('nac');
    this.formulario_about.get('domicilio');
    this.formulario_about.get('correo');
    this.formulario_about.get('sobre_mi');
    this.formulario_about.get('url_foto');
    this.formulario_about.get('url_banner');
    this.datosPortfolio.modifica_aboutMe(this.formulario_about).subscribe(() =>{
      this.obtener_aboutMe();
    });
    console.log(this.data_portfolio.value);

   }

    off_on_form_about(): void{
    this.flag_form_about=!this.flag_form_about;
    }

   obtener_aboutMe(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.data_portfolio = data;
    });
   }

}
