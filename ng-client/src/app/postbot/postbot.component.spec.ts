import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbotComponent } from './postbot.component';

describe('PostbotComponent', () => {
  let component: PostbotComponent;
  let fixture: ComponentFixture<PostbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
