 export interface BlogState{
    title: string;
    category: {};
    imgUrl: string | null;
    content: string;
}

 export interface InitialState {
    blogs: BlogState[];
    categories: string[];
}