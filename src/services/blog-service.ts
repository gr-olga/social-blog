import axios from "axios";

const token = 'pj11daaQRz7zUIH56B9Z'
const Url = 'https://frontend-case-api.sbdev.nl/api/'

export async function getBlogs() {
    const res = await axios.get(`${Url}posts?page=1&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1`,
        {headers: {'token': token}});
    return res.data;
}

export async function getBlogCategories() {
    const res = await axios.get(`${Url}categories`,
        {headers: {'token': token}});
    return res.data;
}