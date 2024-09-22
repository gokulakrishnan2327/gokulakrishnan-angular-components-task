import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from "./component1/component1.component";
import { Component2Component } from "./component2/component2.component";
import { Component3Component } from "./component3/component3.component";
import { PeoCardsComponentComponent } from "./peo-cards-component/peo-cards-component.component";
import { ProgramOutcomeComponent } from "./program-outcome/program-outcome.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component1Component, Component2Component, Component3Component, PeoCardsComponentComponent, ProgramOutcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'obe-chart-app';
}
export { Component1Component };

