import {atom, selector} from "recoil";
import {getBlogs} from "../services/blog-service";

export const blogsState = atom({
    key: 'blogs',
    default: [],
});
const postForBlog = atom({
    key: 'postForBlog',
    default: {
        title: '',
        category: '',
        img_url: '',
        content: '',
    },
});

 export const getBlogsState = selector({
    key: 'getBlogsState',
     get: async ({get}) => {
         const res = await getBlogs();
         return res.data;
     }
});