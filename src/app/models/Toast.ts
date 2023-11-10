export interface ToastParam {
  severity: ToastType;
  summary: string;
  detail: string;
  navigate?: string;
  key: string;
}

export enum ToastType {
  default = 'default',
  success = 'success',
}
