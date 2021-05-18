import { Component, OnInit } from '@angular/core';
import { WorkersService , Worker } from 'src/app/services/workers.service';

@Component({
  selector: 'app-show-workers-list',
  templateUrl: './show-workers-list.component.html',
  styleUrls: ['./show-workers-list.component.css']
})
export class ShowWorkersListComponent implements OnInit {

  workers: Worker[] = [];

  constructor(private workersService: WorkersService) { 
    this.workersService.getWorkers().subscribe((workers)=>{this.workers = workers})
  }

  ngOnInit(): void {
  }

}
