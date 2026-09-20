import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsEdit } from './teams-edit';

describe('TeamsEdit', () => {
  let component: TeamsEdit;
  let fixture: ComponentFixture<TeamsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
