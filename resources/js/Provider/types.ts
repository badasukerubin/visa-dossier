export type AuthContextType = {
    authenticated: boolean;
    loading: boolean;
    refresh: () => void;
    setAuthenticated: (auth: boolean) => void;
};
