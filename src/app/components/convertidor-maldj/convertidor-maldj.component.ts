import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor-maldj',
  templateUrl: './convertidor-maldj.component.html',
  styleUrls: ['./convertidor-maldj.component.css']
})
export class ConvertidorMaldjComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero  = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA']

  constructor() { }

  ngOnInit(): void {
  
  }
  convertir(): void {
    //console.log('Llamada al metodo');
    switch (this.tengo) {
        case 'USD':
          if (this.quiero === 'USD') {
            this.total = this.cantidad;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.91; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.78; 
          }
          break;
        case 'EUR':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 1.10;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.86; 
          }
          break;
        case 'LIBRA':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 1.10;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 1.17; 
          }
          break;
    }
  }


}
