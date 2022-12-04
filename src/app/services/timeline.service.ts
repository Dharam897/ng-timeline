import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { comapnies } from '../components/timeline/timeline.data';
import { ICompany } from '../components/timeline/timeline.interface';


@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  
  getCompanies(): Observable<ICompany[]>{
    return of(comapnies);
  }
}