import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleblogComponent } from './lifestyleblog.component';

describe('LifestyleblogComponent', () => {
  let component: LifestyleblogComponent;
  let fixture: ComponentFixture<LifestyleblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestyleblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestyleblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
