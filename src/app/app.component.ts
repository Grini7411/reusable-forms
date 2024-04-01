import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DanceStyleFormComponent} from "./dance-style-form/dance-style-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, DanceStyleFormComponent],
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
      <app-dance-style-form [form]="form"></app-dance-style-form>
      <button>Submit</button>
    </form>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    styles: new FormGroup({
      style: new FormControl<string>(''),
      years: new FormControl<number>(0)
    })
  });


  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
