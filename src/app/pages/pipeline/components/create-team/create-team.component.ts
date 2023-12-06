import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constants } from '../../../../utils/app.constants';
import {
  faXmark,
  faLock,
  faGlobe,
  faArrowLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent {
  faXmark = faXmark;
  faLock = faLock;
  faGlobe = faGlobe;
  faArrowLeftLong = faArrowLeftLong;
  CONSTANTS = constants;
  teamNameError: string = '';
  isTeamTypeChosen: boolean = false;

  teamTypes: any[] = [
    {
      id: '1',
      title: 'Private',
      icon: faLock,
      description: 'People need permission to join',
    },
    {
      id: '2',
      title: 'Public',
      icon: faGlobe,
      description: 'Anyone in organization can join',
    },
  ];

  constructor(public dialogRef: DialogRef<string>) {}

  createTeamGroup = new FormGroup({
    teamType: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  get showTeamNameErrorMessage(): boolean {
    if (
      this.createTeamGroup.controls.name.invalid &&
      this.createTeamGroup.controls.name.touched
    ) {
      this.teamNameError = 'Please enter Team name';
      return true;
    }
    return false;
  }

  closePopup() {
    this.dialogRef.close();
  }

  handleChooseTeamType(teamType: string) {
    this.createTeamGroup.controls.teamType.setValue(teamType);
    this.isTeamTypeChosen = true;
  }

  handleCreateTeam() {
    // TODO: Connect to the API
    this.dialogRef.close('success');
  }

  handleBackButton() {
    this.isTeamTypeChosen = false;
  }
}
