import { Component, OnInit } from '@angular/core';
import { Job, JobsService } from 'src/app/services/jobs.service';
import { WorkersService, Worker } from 'src/app/services/workers.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];
  avgForJob: any[] = [];
  workers: Worker[] = [];


  constructor(private _jobsService: JobsService, private workersService: WorkersService) {
    this._jobsService.getJobs().subscribe((jobs => this.jobs = jobs));
    this.workersService.getWorkers().subscribe((workers) => {
      this.workers = workers;
      console.log(this.workers)
    })
    // this.calcAvg();//כשחישבתי את כל הממוצעים מראש - מערך התוצאה נשאר ריק, כי כשהשקריאה לפונקצית חישוב מתבצעת - עדיין הנתונים לא חזרו מהקריאת שרת. יש דרך לעשות שהבנאי יעצור עד שהנתונים חוזרים? כמו אווייט
  }

  calcAvg(jobDesc: string) : number {
    const worksInJob = this.workers.filter(w => w.job === jobDesc);
    let salarySum = 0;
    worksInJob.forEach(worker => {
      salarySum += worker.salary;
    });
    return salarySum / worksInJob.length;
  }

  ngOnInit(): void {
  }

}

// הפונקציה הראשונה שעשיתי
// calcAvg() {
//   this.avgForJob = this.jobs.map(job => {
//     const worksInJob = this.workers.filter(w => w.job === job.desc);
//     let salarySum = 0;
//     worksInJob.forEach(worker => {
//       salarySum += worker.salary;
//     });
//     return salarySum / worksInJob.length;
//   })

//   console.log(this.avgForJob)
// }
