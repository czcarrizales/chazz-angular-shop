import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm!: NgForm
  selectedSubscription = 'advanced'
  title = 'chazz-angular-shop';
  testSpells = ['hello', 'goodbye']
  parentEgg = 'Spiked Dragon Egg'
  fireworks = ['rainbow', 'dark and cloudy']

  oddNumbers: number[]= []
  evenNumbers: number[]= []

  loadedFeature = 'spell'
  projectForm!: FormGroup
  forbiddenProjectNames = ['Test']

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initializeForm()
  }

  subscriptionSubmit(value: any) {
    console.log(value)
  }

  initializeForm() {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, this.forbiddenProjectNameCheck()]],
      email: ['', [Validators.required, Validators.email]],
      projectStatus: ''
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  forbiddenProjectNameCheck() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
      if (this.forbiddenProjectNames.includes(control.value)) {
        return {'NameNotAllowed' : true}
      }
      return null
    }
  }

  addOddOrEven(oddOrEven: number) {
    if (oddOrEven % 2 === 0) {
      this.evenNumbers.push(oddOrEven)
    } else if (oddOrEven % 2 === 1) {
      this.oddNumbers.push(oddOrEven)
    }
    console.log(oddOrEven)
  }

  addFirework(newFireworkEvent: string) {
    this.fireworks.push(newFireworkEvent)
  }
}
