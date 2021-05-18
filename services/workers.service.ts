import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Worker {
  id: number,
  name: string,
  job: string,
  salary: number
}

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/workers.json');//<Worker[]>
  }

  constructor(private httpService: HttpClient) { }
}
