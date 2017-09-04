import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowForumComponent } from './show-forum.component';

describe('ShowForumComponent', () => {
  let component: ShowForumComponent;
  let fixture: ComponentFixture<ShowForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
