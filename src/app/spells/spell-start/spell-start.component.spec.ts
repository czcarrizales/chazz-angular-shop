import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellStartComponent } from './spell-start.component';

describe('SpellStartComponent', () => {
  let component: SpellStartComponent;
  let fixture: ComponentFixture<SpellStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
