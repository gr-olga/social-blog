export interface BlogState {
    title: string;
    category: Category;
    imgUrl: string | null;
    content: string;
    created_at: string;
}
export interface InitialState {
    blogs: BlogState[];
    categories: Category[];
}

export interface Category {
    created_at: null | string;
    id: number;
    name: string;
    updated_at: null | string;
}