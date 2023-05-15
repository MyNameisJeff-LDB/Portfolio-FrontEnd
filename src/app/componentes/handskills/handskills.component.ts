import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ViewportScroller } from "@angular/common";
import { Observable } from 'rxjs';


@Component({
  selector: 'handskills',
  templateUrl: './handskills.component.html',
  styleUrls: ['./handskills.component.css']
})
export class HandskillsComponent implements OnInit {
  skill_list:any;
  form:FormGroup;
  show_form:boolean=false;
  constructor(private datosPortfolio:PortfolioService, private formBuilder:FormBuilder, private scroller: ViewportScroller){
    this.form=this.formBuilder.group(
      {
        name_skill:['',Validators.required],
        progress:[Number,[Validators.required,Validators.maxLength(3)]],
        persona_id:1
      }
    )
  }
  
   ngOnInit(): void {
   this.obtenerSkills();
    
   }

   agregar_Skill(){
    this.form.get('name_skill');
    this.form.get('progress');
    this.datosPortfolio.agregarSkill(this.form).subscribe(() =>{
      this.obtenerSkills();
    });;
   }

   obtenerSkills():void {
    this.datosPortfolio.obtenerSkills().subscribe(data=>{
      this.skill_list = data;
    });
   }

   skill_Delete(id:string): void {
    this.datosPortfolio.borrarSkills(id).subscribe(() =>{
      this.obtenerSkills();
    });
   }

   turn_off_on(): void {
    this.show_form=!this.show_form;
   }

   scroll_to_form():void {
    this.scroller.scrollToAnchor("formulario")
   }

}
