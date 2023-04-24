import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAvocatComponent } from './note-avocat.component';

describe('NoteAvocatComponent', () => {
  let component: NoteAvocatComponent;
  let fixture: ComponentFixture<NoteAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAvocatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
