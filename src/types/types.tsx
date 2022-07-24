export interface IAddress {
  street: string;
  city: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}
