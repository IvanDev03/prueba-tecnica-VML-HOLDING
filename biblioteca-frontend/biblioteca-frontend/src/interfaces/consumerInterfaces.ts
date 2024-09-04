export interface ICompLoginProps {
  email: string;
  password: string;
}

export interface IBook {
  id?: number ;
  title: string;
  author: string;
  categorie_id: number | string;
  stock: number | string;
}

export interface ICompSignUpProps {
  name: string;
  email: string;
  password: string;
}

export interface ICompManageLoansProps {
  id: number
  user_id: number;
  book_id: number;
  loan_date: Date;
  return_date: Date;
  status: string;
}
export interface ICompManageUsersProps {
  name: string;
  email: string;
  password: string;
}
export interface IUserLoans {
  id: number;
  name: string;
  loans_count: number;
}

export interface ICompUpdateLoansProps {
  user_id: number;
  book_id: number;
  loan_date: Date;
  return_date: Date;
  status: string;
}