import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GeneralLeftSidebarComponent } from './general-left-sidebar.component';

describe('GeneralLeftSidebarComponent', () => {
  let component: GeneralLeftSidebarComponent;
  let fixture: ComponentFixture<GeneralLeftSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [GeneralLeftSidebarComponent],
    });
    fixture = TestBed.createComponent(GeneralLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const iconElement: HTMLElement = fixture.debugElement.query(
      By.css('.sidebar img')
    ).nativeElement;

    expect(iconElement).toBeTruthy();
  });
});
