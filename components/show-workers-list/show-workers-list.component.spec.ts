import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkersListComponent } from './show-workers-list.component';

describe('ShowWorkersListComponent', () => {
  let component: ShowWorkersListComponent;
  let fixture: ComponentFixture<ShowWorkersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWorkersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
