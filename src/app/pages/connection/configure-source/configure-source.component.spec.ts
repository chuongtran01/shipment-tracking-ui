import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSourceComponent } from './configure-source.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ConfigureSourceComponent', () => {
  let component: ConfigureSourceComponent;
  let fixture: ComponentFixture<ConfigureSourceComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureSourceComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(ConfigureSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const title = fixture.nativeElement.querySelector('.configure-source-title');
    expect(title.textContent).toContain('Configure Source');

    expect(fixture.nativeElement.querySelector('.configure-source-description')).toBeTruthy();

    const form = fixture.nativeElement.querySelector('.configure-source-form');
    expect(form).toBeTruthy();
    expect(form.querySelector('input#pipeline-name')).toBeTruthy();
    expect(form.querySelector('label[htmlFor="pipeline-name"]')).toBeTruthy();
    expect(form.querySelector('input#database-host')).toBeTruthy();
    expect(form.querySelector('label[htmlFor="database-host"]')).toBeTruthy();
    expect(form.querySelector('input#database-port')).toBeTruthy();
    expect(form.querySelector('label[htmlFor="database-port"]')).toBeTruthy();
    expect(form.querySelector('input#database-user')).toBeTruthy();
    expect(form.querySelector('label[htmlFor="database-user"]')).toBeTruthy();
    expect(form.querySelector('input#database-password')).toBeTruthy();
    expect(form.querySelector('label[htmlFor="database-password"]')).toBeTruthy();
    expect(form.querySelector('input#auth-db-name')).toBeTruthy();
    expect(form.querySelector('label[htmlFor="auth-db-name"]')).toBeTruthy();

    expect(fixture.nativeElement.querySelector('.configure-source-access-text')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-toggle-switch[name="ssh-connection"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.configure-source-switch-text')).toBeTruthy();

    expect(fixture.nativeElement.querySelector('app-button[id="test-connection"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-button[id="test-continue"]')).toBeTruthy();
  });

  it('should navigate to the previous page when back button is clicked', () => {
    component.navigateToPreviousPage();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/select-source');
  });

  it('should cancel the process and navigate to the root page when cancel button is clicked', () => {
    component.cancelProcess();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should test source connection when the "Test Connection" button is clicked', () => {
    component.configureSourceFormGroup.setValue({
      pipelineName: 'Test Pipeline',
      databaseHost: 'localhost',
      databasePort: '5432',
      databaseUser: 'testuser',
      databasePassword: 'testpassword',
      databaseName: 'testdb',
    });

    expect(component.configureSourceFormGroup.valid).toBeTrue();
    component.testSourceConnection();
    // TODO: Add expectations here to test database connection
  });

  it('should toggle SSH connection when the switch is toggled', () => {
    spyOn(component, 'sshConnectionToggled').and.callThrough();
    const toggleSwitchInput = fixture.nativeElement.querySelector('.toggle-switch');

    // Toggled to be true
    toggleSwitchInput.click();
    fixture.detectChanges();
    expect(component.sshConnection).toBeTrue();

    // Toggled to be false
    toggleSwitchInput.click();
    fixture.detectChanges();
    expect(component.sshConnection).toBeFalse();

    expect(component.sshConnectionToggled).toHaveBeenCalledTimes(2);
  });

  it('should call testAndContinue when button is clicked and the form is valid', () => {
    spyOn(component, 'testAndContinue').and.callThrough();
    const testAndContinueButton = fixture.nativeElement.querySelector('#test-continue button');

    component.configureSourceFormGroup.setValue({
      pipelineName: 'Test Pipeline',
      databaseHost: 'localhost',
      databasePort: '5432',
      databaseUser: 'testuser',
      databasePassword: 'testpassword',
      databaseName: 'testdb',
    });

    fixture.detectChanges();
    expect(component.configureSourceFormGroup.valid).toBeTrue();

    testAndContinueButton.click();
    fixture.detectChanges();
    expect(component.testAndContinue).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/configure-destination');
  });

  it('should not call testAndContinue when button is clicked and the form is invalid', () => {
    spyOn(component, 'testAndContinue').and.callThrough();
    const testAndContinueButton = fixture.nativeElement.querySelector('#test-continue button');

    component.configureSourceFormGroup.setValue({
      pipelineName: '',
      databaseHost: '',
      databasePort: '',
      databaseUser: '',
      databasePassword: '',
      databaseName: '',
    });

    fixture.detectChanges();
    expect(component.configureSourceFormGroup.valid).toBeFalse();

    testAndContinueButton.click();
    fixture.detectChanges();
    expect(component.testAndContinue).not.toHaveBeenCalled();
  });

});
