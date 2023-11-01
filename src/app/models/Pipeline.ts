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

export interface Job {
  id: string;
  createdAt: string;
  modifiedAt: string;
  createdBy: string;
  modifiedBy: string;
  name: string;
  pipelineId: string;
  sourceId: string;
  destinationId: string;
}

export interface CreateJob {
  name: string;
  pipelineId: string;
  sourceId: string;
  destinationId: string;
}