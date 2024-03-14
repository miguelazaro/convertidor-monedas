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

  monedas: string[] = ['USD', 'EUR', 'LIBRA', 'JPY', 'SGD', 'CNY', 'AUD', 'CAD', 'CHF', 'HKD']

  

  constructor() { }

  ngOnInit(): void {
  
  }
  convertir(): void {
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
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 147.69; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 1.33; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 7.19 ; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 1.51; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 1.35; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.88; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 7.82; 
          }
          break;
        case 'EUR':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 1.09;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.86; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 161.67; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 1.46; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 7.87; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 1.65; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 1.47; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.96; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 8.56; 
          }
          break;
        case 'LIBRA':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 1.28;
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 1.17; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 189.00; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 1.71; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 9.21 ; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 1.93; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 1.72; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 1.12 ; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 10.01; 
          }
          break;
        case 'JPY':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.0068; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.0062; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.0053 ; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 0.0090; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 0.049; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 0.010; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 0.0091 ; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.0059; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 0.053; 
          }
          break;
        case 'SGD':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.75; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.69; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.59 ; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 110.88; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 5.40; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 1.13 ; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 1.01 ; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.66; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 5.87; 
          }
          break;
        case 'CNY':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.14; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.13; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.11 ; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 20.55; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 0.19; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 0.22; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 0.19; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.12; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 1.12; 
          }
          break;
        case 'AUD':
          if (this.quiero === 'USD') {
            this.total = this.cantidad *0.66; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.60; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.52 ; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 97.86; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 0.88; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 4.76; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 0.89; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.58; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 5.18; 
          }
          break;
        case 'CAD':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.74; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.68; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.58 ; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 109.74 ; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 0.99; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 5.34; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 1.12 ; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.65; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 5.81; 
          }
          break;
        case 'CHF':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 1.14; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 1.04; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.89; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 168.23 ; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 1.52; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 8.18; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 1.72; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 1.53; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad * 8.90; 
          }
          break;
        case 'HDK':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.13; 
          }
          if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.12; 
          }
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.100; 
          }
          if (this.quiero === 'JPY') {
            this.total = this.cantidad * 18.91; 
          }
          if (this.quiero === 'SGD') {
            this.total = this.cantidad * 0.17; 
          }
          if (this.quiero === 'CNY') {
            this.total = this.cantidad * 0.92 ; 
          }
          if (this.quiero === 'AUD') {
            this.total = this.cantidad * 0.19; 
          }
          if (this.quiero === 'CAD') {
            this.total = this.cantidad * 0.17; 
          }
          if (this.quiero === 'CHF') {
            this.total = this.cantidad * 0.11; 
          }
          if (this.quiero === 'HKD') {
            this.total = this.cantidad; 
          }
          break;
        
    }
  }
}
