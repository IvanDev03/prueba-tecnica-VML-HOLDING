import {  ICompManageLoansProps, ICompUpdateLoansProps, IUserLoans } from "../../interfaces/consumerInterfaces";
import { getAuthToken } from "../common/consumerAuthService";

const token = getAuthToken();

export const getUsers: () => Promise<IUserLoans[]> = async (): Promise<IUserLoans[]> => {
  try {
    
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch("http://localhost:8000/api/statistics/most-active-users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching users");
    }
    const users = await response.json();
    const responseData = users.data;
    return responseData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getLoans: () => Promise<ICompManageLoansProps[]> = async (): Promise<ICompManageLoansProps[]> => {
  try {
    
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch("http://localhost:8000/api/loans", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching users");
    }
    const loans= await response.json();
    const responseData = loans.data;
    return responseData;
  } catch (error) {
    console.error(error);
    return [];
  }
}
export const updateLoan = async (id: number, data:ICompUpdateLoansProps): Promise<string> => {
  try {
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`http://localhost:8000/api/loans/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error updating loan");
    }
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export const getLoanById = async (id: number): Promise<ICompUpdateLoansProps> => {
  try {
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`http://localhost:8000/api/loans/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching loan");
    }
    const loan = await response.json();
    if (!loan || !loan.data) {
      throw new Error("Loan data is undefined");
    }
    return loan.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};