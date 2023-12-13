import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Tab4Page } from './tab4.page';

describe('Tab4Page', () => {
  let component: Tab4Page;
  let fixture: ComponentFixture<Tab4Page>;

  beforeEach(async(async () => {
    fixture = TestBed.createComponent(Tab4Page);
    component = fixture.componentInstance;
    await fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
