import {Component, Input, OnInit, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements ControlValueAccessor {
  // @ts-ignore
  @Input() label: string;
  // @ts-ignore
  @Input() maxDate: Date;
  // @ts-ignore
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
      containerClass: 'theme-red',
      dateInputFormat: 'DD MMMM YYYY'
    }
  }

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  writeValue(obj: any): void {

  }


}
