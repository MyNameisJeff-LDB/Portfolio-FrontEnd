import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data_portfolio:any;

  constructor(private datosPortfolio:PortfolioService){}
  
   ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.data_portfolio = data;
    });
    
   }



}
