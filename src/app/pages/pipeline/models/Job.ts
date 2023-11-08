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