import { ICompLoginProps, ICompSignUpProps } from "../../interfaces/consumerInterfaces";

export const login = async (data: ICompLoginProps): Promise<string> => {
  try {
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error logging in");
    }
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    const token = responseData.access_token;
    if (!token) {
      throw new Error("Token not found in response");
    }
    localStorage.setItem("authToken", token);
    return token;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export const register = async (data: ICompSignUpProps): Promise<string> => {
  try {
    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error registering");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    return "";
  }
};
export const getAuthToken = (): string | null => {
  return localStorage.getItem("authToken");
};
export const logout = (): void => {
  localStorage.removeItem("authToken");
};
