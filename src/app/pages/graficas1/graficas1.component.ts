import { Component, OnInit } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {

  public labels1: string[] =  ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public data1 = [
    [350, 450, 100],
  ];


  ngOnInit(): void {
  }

}
