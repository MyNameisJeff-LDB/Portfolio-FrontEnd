import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandskillsComponent } from './handskills.component';




describe('HandskillsComponent', () => {
  let component: HandskillsComponent;
  let fixture: ComponentFixture<HandskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
