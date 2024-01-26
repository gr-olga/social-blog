 export interface BlogState{
    title: string;
    category: {};
    photoUrl: string | null;
    content: string;
}

 export interface InitialState {
    blogs: BlogState[];
    categories: string[];
}