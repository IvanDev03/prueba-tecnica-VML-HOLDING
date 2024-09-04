import { IBook } from "../../interfaces/consumerInterfaces";
import { getAuthToken } from "../common/consumerAuthService";

const token = getAuthToken();

export const fetchBooks: (page: number) => Promise<{ books: IBook[], totalPages: number }> = async (page: number): Promise<{ books: IBook[], totalPages: number }> => {
  try {
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`http://localhost:8000/api/books?page=${page}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching books");
    }
    const data = await response.json();
    const books = data.data;
    const totalPages = data.last_page;
    return { books, totalPages };
  } catch (error) {
    console.error(error);
    return { books: [], totalPages: 0 };
  }
};

export const addBook = async (data: IBook, token: string): Promise<IBook> => {
  try {
    const response = await fetch("http://localhost:8000/api/admin/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error adding book");
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error(error);
    return {} as IBook;
  }
};

export const getBookbyId = async (id: string) => {
  try {
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`http://localhost:8000/api/books/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching books");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const updateBook = async (data: IBook, id: string | undefined): Promise<IBook> => {
  try {
    const response = await fetch(`http://localhost:8000/api/admin/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error updating book");
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error(error);
    return {} as IBook;
  }
};

export const deleteBook = async (id: string | undefined): Promise<IBook> => {
  try {
    const response = await fetch(`http://localhost:8000/api/admin/books/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Error deleting book");
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error(error);
    return {} as IBook;
  }
};