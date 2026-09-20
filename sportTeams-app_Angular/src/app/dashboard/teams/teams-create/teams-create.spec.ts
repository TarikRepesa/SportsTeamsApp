import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsCreate } from './teams-create';

describe('TeamsCreate', () => {
  let component: TeamsCreate;
  let fixture: ComponentFixture<TeamsCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
