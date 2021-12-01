import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ado-debt-success',
  templateUrl: './ado-debt-success.component.html',
  styleUrls: ['./ado-debt-success.component.scss']
})
export class AdoDebtSuccessComponent implements OnInit {
  date: any;
  constructor(private route: ActivatedRoute) { 
    this.date = this.route.snapshot.params.date;
  }

  ngOnInit(): void {
  }

}
