import axios from "axios";
import {BlogPost} from "../types";

const token = 'pj11daaQRz7zUIH56B9Z'
export const API_URL = 'https://frontend-case-api.sbdev.nl/api/'

export async function getBlogs() {
    try {
        const res = await axios.get(`${API_URL}posts`,
            {headers: {'token': token}});
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getPaginationData(page: number) {
    try {
        const res = await axios.get(`${API_URL}posts?page=${page}`,
            {headers: {'token': token}});
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getBlogCategories() {
    try {
        const res = await axios.get(`${API_URL}categories`,
            {headers: {'token': token}});
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export async function postBlogs(data: BlogPost): Promise<void> {
    try {
        const res = await axios.post(`${API_URL}posts`, data, {headers: {'token': token}})
        return res.data;
    } catch (e) {
        console.log(e)
    }
}