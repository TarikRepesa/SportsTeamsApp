import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsDelete } from './teams-delete';

describe('TeamsDelete', () => {
  let component: TeamsDelete;
  let fixture: ComponentFixture<TeamsDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
