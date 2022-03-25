import axios from "axios";

let http = axios.create({
    baseURL: 'http://yivi.space/api',
    responseType: 'blob'
})

export const ConvertApi = {
    upload: function(body) {
        return http.post('',body);
    }
}