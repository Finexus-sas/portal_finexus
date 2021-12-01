import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() active: number;
  @Input() steps: string[] = [];
  @Input() showHeader: boolean = true;
  @Input() showName: boolean = false;
  
  percentage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateLinePercentage();
  }

  ngOnChanges() {
    this.calculateLinePercentage();
  }


  calculateLinePercentage() {
    const numSteps = this.steps.length;
    const stepPercentage = 100 / (numSteps - 1);
    console.log(stepPercentage)

    this.percentage = stepPercentage * (this.active - 1);
  }

}
