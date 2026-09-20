import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsDetails } from './teams-details';

describe('TeamsDetails', () => {
  let component: TeamsDetails;
  let fixture: ComponentFixture<TeamsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
