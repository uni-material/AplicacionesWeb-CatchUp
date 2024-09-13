import axios from "axios";
import {LogoApiService} from "@/shared/services/news-api.service.js";


const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});


const NES_API_KEY = import.meta.env.VITE_NEWS_API_KEY;


export class NewsApiService{
    apiKey = NES_API_KEY;
    logoApi = new LogoApiService();

    //metodos
    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`)
    }

    getArticlesForSource(sourceId){
        return http.get( `top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
    }

    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }


}