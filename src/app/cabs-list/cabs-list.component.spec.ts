import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabsListComponent } from './cabs-list.component';

describe('CabsListComponent', () => {
  let component: CabsListComponent;
  let fixture: ComponentFixture<CabsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
