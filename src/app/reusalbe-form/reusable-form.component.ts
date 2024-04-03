import {Component, inject, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: () => inject(ControlContainer, {skipSelf: true})
    // useExisting: FormGroupDirective
  }
  ],
  template: `
    <ng-container>

      <fieldset [formGroupName]="controlKey">
        <legend>{{formName}}</legend>
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
export class ReusableFormComponent implements OnInit, OnDestroy {

  @Input({required: true}) controlKey!: string;
  @Input() formName!: string;

  private _parentControlContainer = inject(ControlContainer);

  constructor(private childViewContainer: ViewContainerRef) {
    console.log({childView: this.childViewContainer})
    console.log('%c parentControlContainer', 'color: green', this._parentControlContainer);
  }


  get parentControlContainer(): FormGroup {
    return this._parentControlContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentControlContainer.addControl(this.controlKey, new FormGroup({
      street: new FormControl<string>(''),
      city: new FormControl<string>('')
    }));
  }

  ngOnDestroy(): void {
    this.parentControlContainer.removeControl('styles');
  }



}
