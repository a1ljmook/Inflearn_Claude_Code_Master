/**
 * 공통 도메인 엔티티 타입 정의
 */

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: 'USER' | 'ADMIN';
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T | null;
  error: {
    message: string;
    code?: string;
  } | null;
  success: boolean;
}

export interface PaginationParams {
  page: number;
  limit: number;
}
