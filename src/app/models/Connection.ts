export interface ConnectionResponse {
  id: string;
  createdAt: string;
  modifiedAt: string;
  createdBy: string;
  modifiedBy: string;
  organizationId: string;
  connectionName: string;
  teamId: string;
  connectionTypeId: string;
  connectionString: string;
}

export interface ConnectionTypeResponse {
  id: string;
  createdAt: string | null;
  modifiedAt: string | null;
  createdBy: string | null;
  modifiedBy: string | null;
  typeName: string;
  description: string;
}
