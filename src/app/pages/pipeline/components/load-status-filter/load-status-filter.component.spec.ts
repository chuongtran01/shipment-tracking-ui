import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStatusFilterComponent } from './load-status-filter.component';

describe('LoadStatusFilterComponent', () => {
  let component: LoadStatusFilterComponent;
  let fixture: ComponentFixture<LoadStatusFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadStatusFilterComponent]
    });
    fixture = TestBed.createComponent(LoadStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should update the activeTimeFilter state when clicking a time filter option", () => {
    spyOn(component, "setActiveTimeFilter").and.callThrough();
    expect(component.activeTimeFilter).toEqual("All");
    const timeFilterOption = fixture.nativeElement.querySelector("#time-filter-1");
    timeFilterOption.click();
    expect(component.activeTimeFilter).toEqual("In last 30 minutes");
    expect(component.setActiveTimeFilter).toHaveBeenCalled();
  });

  it("should update the activeStageFilter state when clicking a stage filter option", () => {
    spyOn(component, "setActiveStageFilter").and.callThrough();
    expect(component.activeStageFilter).toEqual("All");
    const timeFilterOption = fixture.nativeElement.querySelector("#stage-filter-1");
    timeFilterOption.click();
    expect(component.activeStageFilter).toEqual("Transformations");
    expect(component.setActiveStageFilter).toHaveBeenCalled();
  });
});
