import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsDetails } from './sports-details';

describe('SportsDetails', () => {
  let component: SportsDetails;
  let fixture: ComponentFixture<SportsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
