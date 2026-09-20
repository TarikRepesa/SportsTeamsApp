import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsCreate } from './sports-create';

describe('SportsCreate', () => {
  let component: SportsCreate;
  let fixture: ComponentFixture<SportsCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
