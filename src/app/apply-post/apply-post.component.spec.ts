import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPostComponent } from './apply-post.component';

describe('ApplyPostComponent', () => {
  let component: ApplyPostComponent;
  let fixture: ComponentFixture<ApplyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
