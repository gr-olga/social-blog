import {atom, selector} from "recoil";
import {getBlogCategories, getBlogs} from "../services/blog-service";
import {Category} from "../types";

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
export const categoriesState = atom({
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
export const getCategoriesState = selector({
    key: 'getCategoriesState',
    get: async ({get}) => {
        const res = await getBlogCategories();
        return res.map((category: Category) => category.name)
    }
})