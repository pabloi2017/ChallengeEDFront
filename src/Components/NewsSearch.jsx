import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import NewsList from './NewsList';
import SelectPageSizing from './SelectPageSizing';
import  ArticleContext  from '../Context/ArticleContext'
import configData from '../config.json';
import formatDate from '../Utils/DateHelper';

const NewsSearch = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [keywords, setKeywords] = useState('');
  const [language, setLanguage] = useState('');
  
  const [countries, setCountries] = useState([]);
  const { articles, LoadArticles } = useContext(ArticleContext);

  useEffect(() => {
   setCountries(configData.countries);
  }, []);

  

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const params = {
      dateFrom: moment(dateFrom).format('YYYY-MM-DD'),
      dateTo: moment(dateTo).format('YYYY-MM-DD'),
      keywords,
      language,
    };
    console.log(params.dateFrom);
    LoadArticles(params);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="container mb-3">
        <div className="row">
          <div className="col-12 text-start">
            <h1>Portal de Noticias</h1>
            <hr className="hr-primary" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 offset-8">
              <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="">Selecciona un país</option>
                {countries.map((country) => (
                  <option key={country.language} value={country.language}>
                    {country.name}
                  </option>
                ))}
              </select>
          </div>
        </div>
          <div className="row mb-3">
            <div className="col-2">
                <input className="form-control"
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  required
                />
            </div>
            <div className="col-10">
                <input className="form-control"
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Palabras clave"
                  required
                />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <input className="form-control"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary col-2 offset-8" type="submit">Buscar</button>
          </div>
        </div>
      </form>
      <NewsList articles={articles} />
      </>
  );
};

export default NewsSearch;