import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SimpleQueryProps } from "./types";

export default function useSimpleQuery<T>({
    queryKey,
    route,
    enabled = true,
    staleTime = 0,
    retry = 3,
}: SimpleQueryProps) {
    const { data, isError, error, isPending, refetch } = useQuery({
        queryKey,
        queryFn: async () => {
            const { data } = await axios.get<T>(route);
            return data;
        },
        enabled,
        staleTime,
        retry: retry,
    });

    return { data, isError, error, isPending, refetch };
}
