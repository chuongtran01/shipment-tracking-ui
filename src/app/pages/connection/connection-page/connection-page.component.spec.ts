import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionPageComponent } from './connection-page.component';
import { constants } from 'src/app/utils/app.constants';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConnectionPageComponent', () => {
  let component: ConnectionPageComponent;
  let fixture: ComponentFixture<ConnectionPageComponent>;
  let CONSTANTS: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionPageComponent],
      imports: [SharedModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ConnectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    CONSTANTS = constants;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.connection-header-title .title').textContent).toEqual(CONSTANTS.connection.title);
    expect(fixture.nativeElement.querySelector('.connection-header-btn app-button')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.connection-header-btn app-button').textContent).toContain(CONSTANTS.global.createNew);
    expect(fixture.nativeElement.querySelector('.connection-header-description').textContent).toContain(CONSTANTS.connection.description);
    expect(fixture.nativeElement.querySelectorAll('.filter').length).toEqual(2);

    expect(fixture.nativeElement.querySelector('.no-connections')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.no-connections-image')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.no-connections-title').textContent).toContain(CONSTANTS.connection.noConnectionsFound.toUpperCase());
    expect(fixture.nativeElement.querySelector('.no-connections-description').textContent).toContain(CONSTANTS.connection.noConnectionsFound);
    expect(fixture.nativeElement.querySelector('.no-connections-description').textContent).toContain(CONSTANTS.global.createNew);

    component.connections = [{
      id: "9dcfabf2-fc0d-4f6e-9f9a-214b7a1f8d4e",
      createdAt: "2023-10-26 13:46:06",
      modifiedAt: "2023-10-26 13:46:06",
      createdBy: "6b3dd6ff-fe66-457c-982f-4a02c87182d6",
      modifiedBy: "6b3dd6ff-fe66-457c-982f-4a02c87182d6",
      organizationId: "1",
      connectionName: "Postgres1",
      teamId: "1",
      connectionTypeId: "1",
      connectionString: ""
    }];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.connection-cards')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-product-card')).toBeTruthy();
  });

  it('should navigate to select connection page', () => {
    spyOn(component, 'navigateToSelectConnection');
    fixture.nativeElement.querySelector('.connection-header-btn app-button').click();
    fixture.nativeElement.querySelector('.no-connections-description .link').click();
    expect(component.navigateToSelectConnection).toHaveBeenCalledTimes(2);
  });

  it('should refresh connections', () => {
    spyOn(component, 'refreshConnections');
    fixture.nativeElement.querySelector('.connection-filters > fa-icon').click();
    expect(component.refreshConnections).toHaveBeenCalled();
  });
});
