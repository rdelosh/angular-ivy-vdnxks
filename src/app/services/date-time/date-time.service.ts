// date-time.service
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DateTimeService
{
  private _format: string;
  private _locale: string;
  public _formatSubject = new Subject<string>();
  public _formatSubscription = this._formatSubject.asObservable();
  public constructor()
  {
    this._format = "LL";
    this._locale = "en-US";
  }

  public get format(): string
  {
    return this._format;
  }
  public set format(value: string)
  {
    // console.log(`Setting format to '${ value }'`);

    this._format = value;
    this._formatSubject.next(this._format);
  }

  public get locale(): string
  {
    return this._locale;
  }  
  public set locale(value: string)
  {
    // console.log(`Setting locale to '${ value }'`);

    this._locale = value;
    
  }
}