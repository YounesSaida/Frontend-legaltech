import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteHuissierComponent } from './note-huissier.component';

describe('NoteHuissierComponent', () => {
  let component: NoteHuissierComponent;
  let fixture: ComponentFixture<NoteHuissierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteHuissierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteHuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
