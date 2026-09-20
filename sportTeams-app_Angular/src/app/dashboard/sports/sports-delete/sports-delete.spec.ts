import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsDelete } from './sports-delete';

describe('SportsDelete', () => {
  let component: SportsDelete;
  let fixture: ComponentFixture<SportsDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
