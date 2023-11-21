import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestaBidingComponent } from './testa-biding.component';

describe('TestaBidingComponent', () => {
  let component: TestaBidingComponent;
  let fixture: ComponentFixture<TestaBidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestaBidingComponent]
    });
    fixture = TestBed.createComponent(TestaBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
