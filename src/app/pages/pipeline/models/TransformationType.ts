export interface TransformationType {
  mapperId: string;
  transformationName: string;
  status: 'queued' | 'active';
  date: string;
}
