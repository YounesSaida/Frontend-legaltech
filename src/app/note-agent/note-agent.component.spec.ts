import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAgentComponent } from './note-agent.component';

describe('NoteAgentComponent', () => {
  let component: NoteAgentComponent;
  let fixture: ComponentFixture<NoteAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
