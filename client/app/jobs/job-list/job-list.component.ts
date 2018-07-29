import { Component, OnInit } from '@angular/core';

import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [
    new Job(
      "Google",
      "Senio Dev",
      "120,000",
      null,
      null,
      null,
      null,
      "accepted",
      "none",
      "John Doe",
      "64621312345",
      "john.doe@google.com"
    ),
    new Job(
      "Google",
      "Senio Dev",
      "120,000",
      null,
      null,
      null,
      null,
      "accepted",
      "none",
      "John Doe",
      "64621312345",
      "john.doe@google.com"
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
