import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStatusComponent } from './load-status.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PipelineModule } from '../../pipeline.module';

describe('LoadStatusComponent', () => {
  let component: LoadStatusComponent;
  let fixture: ComponentFixture<LoadStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadStatusComponent],
      imports: [SharedModule, RouterTestingModule, PipelineModule],
    });
    fixture = TestBed.createComponent(LoadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-general-left-sidebar')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-load-status-filter')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-load-status-events-dropdown')).toBeTruthy();
  });
});
