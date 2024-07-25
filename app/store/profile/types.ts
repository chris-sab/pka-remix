export interface ActivityType {
  id: string | number;
  title: string;
  date: Date | string;
};

export interface ProfileType {
  username?: string | null;
  profile?: string | null;
  email?: string | null;
  phone?: string | null;
  activity?: ActivityType[] | null;
};

export interface ProfileState {
  loading: boolean;
  profile: ProfileType;
};