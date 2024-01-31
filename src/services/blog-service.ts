import axios from "axios";
import {BlogPost} from "../types";

const token = 'pj11daaQRz7zUIH56B9Z'
const Url = 'https://frontend-case-api.sbdev.nl/api/'

export async function getBlogs() {
    try {
        const res = await axios.get(`${Url}posts`,
            {headers: {'token': token}});
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getPaginationData(page: number) {
    try {
        const res = await axios.get(`${Url}posts?page=${page}`,
            {headers: {'token': token}});
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getBlogCategories() {
    try {
        const res = await axios.get(`${Url}categories`,
            {headers: {'token': token}});
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

export async function postBlogs(data: BlogPost): Promise<void> {
    try {
        const res = await axios.post(`${Url}posts`, data, {headers: {'token': token}})
        return res.data;
    } catch (e) {
        console.log(e)
    }
}