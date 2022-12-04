import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { ICompany, IExperience } from './timeline.interface';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private timelineService: TimelineService) { }

    title: string = "Experience";
    comapnies: ICompany[] = [];
    
    ngOnInit(): void {
        this.timelineService.getCompanies().subscribe(companies => {
          this.comapnies = companies;
        });
    }
  
}
