export default interface UserSchema {
  id: number;
  username: string;
  email: string;
  admin: boolean;
  groups: string[];
  discord: {
    tag: string;
    id: string;
    active: boolean;
  };
  patreon?: {
    active: boolean;
    tier?: string;
  };
}
