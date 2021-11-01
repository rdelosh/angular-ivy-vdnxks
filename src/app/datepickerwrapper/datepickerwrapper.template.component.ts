import { ControlValueAccessor, NgControl } from "@angular/forms";

export abstract class DatepickerwrapperTemplate {
  myinput
  ngControl
  value: Date = null;
  disabled = false;
  onChange: (value: Date) => void;
  onTouched: () => void;
  constructor(){

  }
  

  writeValue(obj: Date): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  hasChanged(e){
    console.log(e)
    this.value = e;
    this.onChange(this.value);
  }
  blurEvent(){
    this.onTouched();
    this.setInvalidStatus();
    //console.log(this.ngControl.invalid);
  }
  setInvalidStatus(){
    this.myinput.errorState = this.ngControl.invalid;
  }
}