import {atom, selector} from "recoil";
import {getBlogs} from "../services/blog-service";

export const blogsState = atom({
    key: 'blogs',
    default: [],
});
const categoriesState = atom({
    key: 'categories',
    default: [],
});

 export const getBlogsState = selector({
    key: 'getBlogsState',
     get: async ({get}) => {
         const res = await getBlogs();
         return res.data;
     }
});