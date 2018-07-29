import { Component, OnInit } from '@angular/core';

import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor() { }

  ngOnInit() {
  }

}
