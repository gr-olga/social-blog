 export interface BlogState{
    title: string;
    category: string;
    photoUrl: string | null;
    mainText: string;
}

 export interface InitialState {
    blogs: BlogState[];
    categories: string[];
}