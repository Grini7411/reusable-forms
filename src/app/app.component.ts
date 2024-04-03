import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ReusableFormComponent} from "./reusable-form/reusable-form.component";

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
<!--      <app-reusable-form [form]="form"></app-reusable-form>-->
      <fieldset formGroupName="deliveryAddress">
        <legend>Address</legend>
        <div>
          <label for="street">Street</label>
          <input type="text" id="street" formControlName="street"/>
        </div>
        <div>
          <label for="city">City</label>
          <input type="text" id="city" formControlName="city"/>
        </div>
      </fieldset>

      <button>Submit</button>
    </form>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    deliveryAddress: new FormGroup({
      city: new FormControl<string>(''),
      street: new FormControl<string>('')
    })
  });


  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
