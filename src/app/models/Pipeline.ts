export interface Pipeline {
  id: string;
  createdAt: number;
  modifiedAt: number;
  createdBy: string | null;
  modifiedBy: string | null;
  organizationId: string;
  name: string;
  teamId: string;
  description: string;
}

export interface CreatePipeline {
  name: string;
  organizationId: string;
  description?: string;
  teamId: string;
}
