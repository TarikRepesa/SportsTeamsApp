import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCreate } from './country-create';

describe('CountryCreate', () => {
  let component: CountryCreate;
  let fixture: ComponentFixture<CountryCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
