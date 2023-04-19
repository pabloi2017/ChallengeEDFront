import { useState } from 'react';
import NewsSearch from './Components/NewsSearch';
import moment from 'moment';
import ArticleContext  from './Context/ArticleContext';
import axios from "axios";
import configData from './config.json';

// const initialParams = {
//   DateTo: moment().subtract(6,'days').calendar(),
//   DateFrom: moment().subtract(1,'days').calendar(),
//   keyword: 'Apple',
//   Page:1,
//   PageSize: 10
// }

const App = () => {
  const[articles, setArticles] = useState([]);

  const LoadArticles = (params) => {
    const API_URL = configData.apiUrl;
    axios.get(`${API_URL}search`,{ params })
      .then(data => {
        setArticles(data.data.data);
      })
      .catch((e) => console.error(e))
  }

  const data = { articles, LoadArticles };

  return (
    <div className="App">
      <ArticleContext.Provider value={data}>
        <NewsSearch />
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
