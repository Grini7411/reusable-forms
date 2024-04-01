import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-dance-style-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <ng-container [formGroup]="form">
      <legend>Dance Styles</legend>

      <fieldset formGroupName="styles">
        <div>
          <input type="text" id="style" formControlName="style"/>
          <label for="style">Style</label>
        </div>
        <div>
          <input type="number" id="years" formControlName="years"/>
          <label for="years">How many years</label>
        </div>
      </fieldset>

    </ng-container>
  `,
  styleUrl: './dance-style-form.component.css'
})
export class DanceStyleFormComponent {

  @Input() form!: FormGroup;

}
