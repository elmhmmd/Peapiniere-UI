export interface User {
    id: number;
    email: string;
    name: string;
  }
  
  export interface LoginResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
  }
  
  export interface Category {
    id: number;
    category_name: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Plant {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    images: string[];
    category_id: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface ErrorResponse {
    message: string;
    code: number;
  }