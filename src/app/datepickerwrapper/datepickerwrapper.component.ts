import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NgControl,
  NgForm,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DatepickerwrapperTemplate } from './datepickerwrapper.template.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl, MatInput } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { CustomDateAdapter } from '../services/date-time/customDateAdapter';
import { DateTimeService } from '../services/date-time/date-time.service';

export class CustomErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control.touched && control.invalid;
  }
}

@Component({
  selector: 'datepickerwrapper',
  templateUrl: './datepickerwrapper.component.html',
  styleUrls: ['./datepickerwrapper.component.css'],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => DatepickerwrapperComponent),
    //   multi: true,
    // },
    //  {
    //   provide: ErrorStateMatcher,
    //   useExisting: CustomErrorMatcher,
    //   multi: true
    // }
  ],
})
export class DatepickerwrapperComponent
  extends DatepickerwrapperTemplate
  implements OnInit
{
  @ViewChild(MatInput, { static: true }) myinput;
  @Input() labelName: string;
  constructor(private ngControl: NgControl
    ,private dateTimeService: DateTimeService
    ) {
    super();
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.ngControl.statusChanges.subscribe((status) => {
      console.log(status);
      this.setInvalidStatus();
    });
    this.dateTimeService._formatSubscription.subscribe((x) => {
      this.refreshMe();
    });
  }
  refreshMe() {
    this.value = this.value ? new Date(this.value) : null;
  }
  dosomething(){
    this.dateTimeService.format = 'L';
    //this.adapter.format(new Date(),'LL')
  }

}

