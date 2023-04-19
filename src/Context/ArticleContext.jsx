import { createContext, useEffect } from "react"
// import { useState } from "react";
// import axios from "axios";
// import configData from '../config.json';

const ArticleContext = createContext();

export default ArticleContext;


// const ArticleContextProvider = ({children}) => {
//     const [dateFrom, setDateFrom] = useState('');
//     const [dateTo, setDateTo] = useState('');
//     const [keywords, setKeywords] = useState('');
//     const [language, setLanguage] = useState('');
//     const [articles, setArticles] = useState([]);
//     const [status, setStatus] = useState('');
//     const [pageSizing, setPageSizing] = useState([]);

//     const API_URL = configData.apiUrl;

//     useEffect(() => {
//         setPageSizing(configData.pageSizing);
//         // const params = {
//         //   dateFrom,
//         //   dateTo,
//         //   keywords,
//         //   language
//         // };
//         // axios.get(`${API_URL}`,{ params })
//         //     .then((data) => {
//         //       setArticles(data.data.articles);
//         //       setStatus(data.data.status);
//         //     })
//         //     .catch(() => {
//         //       console.error("Request error");
//         //     })
//     },[])

//     // const loadCountries = () => {
//     //     const params = {
//     //       dateFrom,
//     //       dateTo,
//     //       keywords,
//     //       language
//     //     };
//     //     axios.get(`${API_URL}`,{ params })
//     //     .then((data) => {
//     //       setArticles(data.data.articles);
//     //       setStatus(data.data.status);
//     //     })
//     //     .catch(() => {
//     //       console.error("Request error");
//     //     })
//     //   }
    
      
//     return(
//         <ArticleContext.Provider value={articles}>
//             {children}
//         </ArticleContext.Provider>
//     )
// }

// export {ArticleContext, ArticleContextProvider}