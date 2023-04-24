import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBanqueComponent } from './note-banque.component';

describe('NoteBanqueComponent', () => {
  let component: NoteBanqueComponent;
  let fixture: ComponentFixture<NoteBanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteBanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
