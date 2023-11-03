export interface Team {
  id: string;
  name: string;
}

export interface TeamSetting {
  id: string;
  title: string;
  navigate?: string;
  action?: () => void;
}
