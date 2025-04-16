import { LoginResponse, Category, Plant, ErrorResponse } from './types';

const API_BASE_URL = 'http://localhost:8000/api';


//+old versions
async function fetchWithAuth(
  url: string,
  options: RequestInit = {},
  token?: string
): Promise<Response> {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json', 
    ...(token && { 'Authorization': `Bearer ${token}` }),
  });

  if (options.headers) {
    Object.entries(options.headers).forEach(([key, value]) => {
      if (!headers.has(key)) {
         headers.append(key, value);
      }
    });
  }

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });
}

export async function signup (
  name: string,
  email: string,
  password: string,
  role: 'client' | 'employee' 
): Promise<LoginResponse> {
  const response = await fetchWithAuth('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password, role }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    const message = errorData.message || `HTTP error! status: ${response.status}`;
    console.error("Signup Error:", errorData);
    throw new Error(message);
  }

  return response.json();
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetchWithAuth('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}


export async function createCategory(
  category_name: string,
  token: string
): Promise<Category> {
  const response = await fetchWithAuth('/admin/categories', {
    method: 'POST',
    body: JSON.stringify({ category_name }),
  },
    token
  );

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

export async function updateCategory(
  id: number,
  category_name: string,
  token: string
): Promise<Category> {
  const response = await fetchWithAuth(`/admin/categories/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ category_name }),
  },
    token,
  );

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

export async function deleteCategory(id: number, token: string): Promise<void> {
  const response = await fetchWithAuth(`/admin/categories/${id}`, {
    method: 'DELETE'},
    token
  );

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(error.message);
  }
}

// Plants
export async function getPlantBySlug(slug: string, token: string): Promise<Plant> {
  const response = await fetchWithAuth(`/plants/${slug}`, {
    method: 'GET'},
    token
  );

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}