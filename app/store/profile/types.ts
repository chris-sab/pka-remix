export interface ProfileType {
  username?: string | null;
  profile?: string | null;
  email?: string | null;
  phone?: string | null;
};

export interface ProfileState {
  loading: boolean;
  profile: ProfileType;
};