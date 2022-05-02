export interface UserObject {
  email: string;
  _id: string;
  token: string;
  role: string;
}

export interface UserInfInterface {
  user: UserObject;
}
