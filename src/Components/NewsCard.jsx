import react from 'react';

const NewsCard = ({article}) => {
    return(
        <div className="container">
          <div className="row">
            <div className="col">
            <div class="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="mr-3 img-fluid"
                    />
                  </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <p className="card-text"><small className="text-body-secondary">{article.publishedAt}</small></p>
                  </div>
                </div>
            </div>
            </div>
            </div>
          </div>
        </div>
    )
}

export default NewsCard