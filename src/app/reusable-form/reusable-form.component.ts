import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="form">

      <fieldset formGroupName="delivery-address">
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

    </ng-container>
  `,
  styleUrl: './reusable-form.component.css'
})
export class ReusableFormComponent {
  @Input() form!: FormGroup
}
