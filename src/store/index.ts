import {atom, selector} from "recoil";
import {getBlogCategories, getBlogs, postBlogs} from "../services/blog-service";
import {Category} from "../types";

export const blogsState = atom({
    key: 'blogs',
    default: [],
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

// export const postBlogState = selector({
//     key: 'postBlogState',
//     get: async ({get}) => {
//         const res = await postBlogs(postFormBlog);
//         return res.data;
//     }
// })