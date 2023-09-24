export interface TeamRoleInterface {
  [teamId: string]: string;
}

export interface PrincipalInterface {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  organizationId: string;
  teamRoles: TeamRoleInterface;
}
