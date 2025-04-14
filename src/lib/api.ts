import { LoginResponse, Category, Plant, ErrorResponse } from './types';

const API_BASE_URL = 'http://localhost:8000/api';


async function fetchWithAuth(
  url: string,
  options: RequestInit = {},
  token?: string
): Promise<Response> {
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  return fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });
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