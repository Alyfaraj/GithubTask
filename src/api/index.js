import axios from "axios";
const axiosApi = axios.create({
    baseURL: "https://api.github.com"
});


axios.interceptors.request.use(request => {
    request.headers['Authorization'] = 'token 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'
})

export default axiosApi