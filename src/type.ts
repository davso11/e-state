export type APIResponse<T> = { data: T } | { error: string };

export type Property = {
  id: number;
  city: string;
  commune: string;
  street: string | null;
  price: number;
  surface: number;
  type: string;
  rooms: number;
  isAvailable: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
  medias?: Media[];
  progress?: ProgessState;
};

export type Media = {
  id: string;
  url: string;
  encryption: string | null;
  type: string | null;
  size: number | null;
  property?: Property;
  propertyId: number;
};

export type ProgessState = {
  id: number;
  currentStep: string;
  rate: number;
  createdAt: string;
  updatedAt: string;
  property?: Property;
  propertyId: number;
};

export type TBoolParam = "0" | "1";

export type TQueryParams = Partial<{
  medias: TBoolParam;
  progress: TBoolParam;
}>;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthData = {
  user: Pick<User, "id" | "firstName" | "lastName" | "email" | "phone">;
  token: string;
};

export type Booking = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  message: string | null;
  createdAt: string;
};
