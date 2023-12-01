export interface Mapping {
  id: string;
  jobId: string;
  sequenceNumber: number;
  columnName: string;
  transformationTypeId: string;
}

export interface CreateMapping {
  teamId: string;
  jobId: string;
  sequenceNumber: number;
  columnName: string;
  transformationTypeId: string;
}