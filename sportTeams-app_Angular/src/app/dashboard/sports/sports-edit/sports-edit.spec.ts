import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsEdit } from './sports-edit';

describe('SportsEdit', () => {
  let component: SportsEdit;
  let fixture: ComponentFixture<SportsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
