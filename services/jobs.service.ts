import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Job {
  id: number,
  desc: string,
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  getJobs() {
    return this.httpService.get<Job[]>('/assets/jobs.json');
  }

  constructor(private httpService: HttpClient) { }
}

// עוד 2 תפקידים אפשריים
// {
//     "id": 4,
//     "desc": "customerService"
// },
// {
//     "id": 5,
//     "desc": "cleaner"
// }
