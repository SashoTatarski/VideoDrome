import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return null;
  return (
    <nav data-testid="pagination">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            style={{ cursor: 'pointer' }}
            key={page}
            className={
              page === currentPage ? 'page-item active' : 'page-item'
            }
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
