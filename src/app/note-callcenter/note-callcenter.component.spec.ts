import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCallcenterComponent } from './note-callcenter.component';

describe('NoteCallcenterComponent', () => {
  let component: NoteCallcenterComponent;
  let fixture: ComponentFixture<NoteCallcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCallcenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCallcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
