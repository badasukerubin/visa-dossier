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

const AuthContext = createContext<AuthContextType>({
    authenticated: false,
    loading: true,
    refresh: () => {},
    setAuthenticated: () => {},
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const refresh = () => {
        setLoading(true);
        axios
            .get(get().url)
            .then(() => setAuthenticated(true))
            .catch(() => setAuthenticated(false))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        refresh();
    }, []);

    return (
        <AuthContext.Provider
            value={{ authenticated, loading, refresh, setAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
