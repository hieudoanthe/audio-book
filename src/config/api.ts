export const API = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  auth: {
    login: "/auth/login",
    refresh: "/auth/refresh",
  },
  books: {
    featured: "/books/featured",
    byId: (id: string) => `/books/${id}`,
    search: "/books/search",
  },
  users: {
    me: "/users/me",
    favorites: "/users/me/favorites",
  },
} as const;
