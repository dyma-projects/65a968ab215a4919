import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  nombre: number = 0;
  public crochets = {
    propriété1: 'propriété1',
    propriété2: 'propriété2',
  };
  public interpolation: string = 'Interpolation';
  typeText: string = 'text';
  public incrementerDe1(): void {
    this.nombre++;
  }

  constructor() {}

  ngOnInit() {}
}
