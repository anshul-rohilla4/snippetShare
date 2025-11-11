import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/snippets';

const getAllSnippets = () => {
    return axios.get(`${API_BASE_URL}/browse`);
}

const getSnippetById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
}

const createSnippet = (snippet) => {
    return axios.post(`${API_BASE_URL}/new`, snippet);
}

const deleteSnippet = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};

const SnippetService = {
    getAllSnippets,
    getSnippetById,
    createSnippet,
    deleteSnippet,
};

export default SnippetService;

