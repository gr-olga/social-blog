export interface BlogState {
    title: string;
    category: {};
    imgUrl: string | null;
    content: string;
}

export interface InitialState {
    blogs: BlogState[];
    categories: string[];
}

export interface Category {
    created_at: null | string;
    id: number;
    name: string;
    updated_at: null | string;
}