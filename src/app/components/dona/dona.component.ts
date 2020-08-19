import { Component, OnInit, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() titulo: string = 'sin titulo';
  //@Input() labels: string ;
  //@Input() data ;

  constructor() { }

  ngOnInit(): void {

    console.log(this.titulo)
  }

  @Input('labels') doughnutChartLabels: Label[] = ['Pan', 'Refresco', 'Tacos'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [10, 15, 40],
  ];

  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059'] }
  ]



}
