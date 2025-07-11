import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import axios from "axios";
import { get } from "@/routes/user";
import { AuthContextType } from "./types";
import useSimpleQuery from "@/hooks/Query/useSimpleQuery";

const AuthContext = createContext<AuthContextType>({
    authenticated: false,
    loading: true,
    setAuthenticated: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const { data, isPending: loading } = useSimpleQuery({
        queryKey: ["auth-user"],
        route: get().url,
        enabled: true,
        staleTime: 0,
        retry: false,
    });

    useEffect(() => {
        setAuthenticated(!!data);
    }, [data, loading]);

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                loading,
                setAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
