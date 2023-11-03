import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderNavbarComponent } from './header-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderNavbarComponent', () => {
  let component: HeaderNavbarComponent;
  let fixture: ComponentFixture<HeaderNavbarComponent>;

  let teams = [
    {
      id: '1',
      name: 'Team 1',
    },
    {
      id: '2',
      name: 'ADS Team',
    },
    {
      id: '3',
      name: 'XRP Team',
    },
  ];

  let teamSettings = [
    {
      id: '1',
      title: 'Team Settings',
      navigate: 'team-settings',
    },
    {
      id: '2',
      title: 'Join Team',
      navigate: 'join-team',
    },
    {
      id: '3',
      title: 'Create Team',
      navigate: 'create-team',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavbarComponent],
      imports: [FontAwesomeModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.teams = teams;
    component.teamSettings = teamSettings;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const bellElement = fixture.debugElement.query(
      By.css('.pipeline-header-navbar-bell-component')
    ).nativeElement;
    expect(bellElement).toBeTruthy();

    const userElement = fixture.debugElement.query(
      By.css('.pipeline-header-navbar-name')
    ).nativeElement;
    expect(userElement).toBeTruthy();

    const teamSettingElement = fixture.debugElement.query(
      By.css('.pipeline-header-navbar-team-settings')
    ).nativeElement;
    expect(teamSettingElement).toBeTruthy();

    const teamElement = fixture.debugElement.query(
      By.css('.pipeline-header-navbar-team')
    ).nativeElement;
    expect(teamElement).toBeTruthy();
  });

  it('should open Team Setting Dropdown', () => {
    component.handleTeamSettingsDropDown();

    fixture.detectChanges();

    for (let i = 0; i < teamSettings.length; i++) {
      const teamSettingsText = fixture.debugElement.query(
        By.css(
          `.pipeline-header-navbar-team-settings-dropdown-menu li:nth-child(${
            i + 1
          }) div`
        )
      ).nativeElement;
      expect(teamSettingsText.innerHTML).toContain(teamSettings[i].title);
    }
  });

  it('should open Team Dropdown', () => {
    component.handleTeamDropDown();

    fixture.detectChanges();

    for (let i = 0; i < teams.length; i++) {
      const teamSettingsText = fixture.debugElement.query(
        By.css(
          `.pipeline-header-navbar-team-dropdown-menu li:nth-child(${
            i + 1
          }) div:nth-child(2)`
        )
      ).nativeElement;
      expect(teamSettingsText.innerHTML).toContain(teams[i].name);
    }
  });
});
