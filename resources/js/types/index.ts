export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Hearse {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    price: number;
}

export interface Voorijder {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface FlowerPackage {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export interface Decoration {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}

export interface Documentation {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User | null;
    };
    flash?: {
        message?: string;
        error?: string;
    };
};
