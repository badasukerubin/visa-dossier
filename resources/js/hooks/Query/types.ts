import { Pagination } from '@/types';
import { QueryFunction } from '@tanstack/react-query';

export interface SimpleQueryProps {
  queryKey: (string | number)[];
  route: string;
  enabled?: boolean;
  staleTime?: number;
}

export interface SimpleInfiniteQueryProps<T> {
  queryKey: (string | number)[];
  queryFn: QueryFunction<
    {
      data: PaginatedData<T> | null;
    },
    (string | number)[],
    number
  >;
}

export type DataProps<T> = PaginatedData<T>;

export interface QueryFnProps {
  pageParam: number;
  route: string;
  extraParams?: Record<string, string | number | null>;
}
