import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersComponent } from './team-members.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { constants } from 'src/app/utils/app.constants';

describe('TeamMembersComponent', () => {
  let component: TeamMembersComponent;
  let fixture: ComponentFixture<TeamMembersComponent>;
  let CONSTANTS: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(TeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    CONSTANTS = constants;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector("app-general-left-sidebar")).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".team-members-header-info-picture")).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".team-members-header-info-text-title")).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".team-members-header-info-text-title").textContent).toContain(CONSTANTS.teams.teamMembers);
    expect(fixture.nativeElement.querySelector(".team-members-header-info-text-description")).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".team-members-header-tabs")).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".team-members-body-container")).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".member-card")).toBeTruthy();
  });
});
