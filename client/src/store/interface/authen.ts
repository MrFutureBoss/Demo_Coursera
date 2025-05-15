export interface JwtPayload {
    id: number;
    email: string;
    role: string;
    token: string;
}


export interface Authen {
    id: number;
    email: string;
    role: string;
    token: string;
}

export interface AuthenState {
    authen: Authen | null;
    loading: boolean;
    error: string | null;
}


