import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDelete } from './country-delete';

describe('CountryDelete', () => {
  let component: CountryDelete;
  let fixture: ComponentFixture<CountryDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
