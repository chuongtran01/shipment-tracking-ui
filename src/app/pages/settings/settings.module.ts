import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { TeamMembersComponent } from './team-members/team-members.component';

@NgModule({
  declarations: [
    SettingsComponent,
    TeamMembersComponent,
  ],
  imports: [SharedModule, SettingsRoutingModule, CommonModule],
})
export class SettingsModule {}
