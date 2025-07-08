export type AuthContextType = {
    authenticated: boolean;
    loading: boolean;
    setAuthenticated: (auth: boolean) => void;
};
