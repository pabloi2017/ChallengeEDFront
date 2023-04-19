import react, {useState} from 'react';
import NewsCard from './NewsCard';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );


}

const NewsGrid = ({articles}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Función para cambiar la página
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Calcular elementos en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
    
    return (
        <div>
          <div>
            {currentItems.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={articles.length}
            paginate={paginate}
          />
        </div>
      );
}

export default NewsGrid