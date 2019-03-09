import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechblogComponent } from './techblog.component';

describe('TechblogComponent', () => {
  let component: TechblogComponent;
  let fixture: ComponentFixture<TechblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
