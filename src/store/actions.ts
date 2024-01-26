import {getBlogs} from "../services/blog-service";
import {setBlogs} from "./sclice";
import {BlogState} from "../types";

export const getBlogsApi = async (dispatch, getState) => {
    try {
      const res =  getBlogs()
            const blogsData = res.data;
            dispatch(setBlogs(blogsData));

    } catch (e) {
        console.log(e.message)
    }
}