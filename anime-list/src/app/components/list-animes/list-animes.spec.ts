import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimes } from './list-animes';

describe('ListAnimes', () => {
  let component: ListAnimes;
  let fixture: ComponentFixture<ListAnimes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnimes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnimes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
