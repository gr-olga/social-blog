import {atom, DefaultValue, selector} from "recoil";
import {getBlogCategories, getBlogs, getPaginationData} from "../services/blog-service";
import {Category} from "../types";

export const currentPaginationState = atom({
    key: 'currentPaginationState',
    default: 1,
})

export const getBlogsState = selector({
    key: 'getBlogsState',
    get: async ({get}) => {
        const res = await getBlogs();
        return res.data;
    },
});
export const getCategoriesState = selector({
    key: 'getCategoriesState',
    get: async ({get}) => {
        const res = await getBlogCategories();
        return res.map((category: Category) => category)
    }
})
export const getPaginationState = selector({
    key: 'getPaginationState',
    get: async ({get}) => {
        const res = await getPaginationData(get(currentPaginationState));
        return res.data;
    },
    set: ({set}, newValue) => {
        if (newValue instanceof DefaultValue) {
            set(currentPaginationState, 1);
        } else {
            set(currentPaginationState, newValue);
        }
    }
});
