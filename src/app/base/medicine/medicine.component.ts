import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss'],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [style({ opacity: 0 }), animate(500)]),
      transition(":leave", animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class MedicineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
