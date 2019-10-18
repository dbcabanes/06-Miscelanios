import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-switch",
  templateUrl: "./ng-switch.component.html",
  styles: []
})
export class NgSwitchComponent implements OnInit {
  alerta: number = 1;
  reducir() {
    if (this.alerta > 4) {
      this.alerta = 1;
    }
  }
  constructor() {}

  ngOnInit() {}
}
