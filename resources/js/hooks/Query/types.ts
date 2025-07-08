export interface SimpleQueryProps {
    queryKey: (string | number)[];
    route: string;
    enabled?: boolean;
    staleTime?: number;
    retry?: number | boolean;
}
