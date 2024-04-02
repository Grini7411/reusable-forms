import {AfterViewInit, Component, Renderer2, ViewContainerRef, ViewRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ReusableFormComponent} from "./reusalbe-form/reusable-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, ReusableFormComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" formControlName="name">
      </div>
      <div>
        <label for="name">Email</label>
        <input type="text" id="email" formControlName="email">
      </div>
      <app-reusable-form controlKey="billingAddress" formName="billing address"></app-reusable-form>
      <app-reusable-form controlKey="deliveryAddress" formName="delivery address"></app-reusable-form>
      <button>Submit</button>
    </form>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor(private viewContainer: ViewContainerRef) {
    console.log({view: this.viewContainer})
  }


  form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
  });


  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
