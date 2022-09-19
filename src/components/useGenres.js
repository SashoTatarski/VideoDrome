import { useState } from 'react';

export const useGenres = () => {
  const [selectedGenre, setSelectedGenre] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setCurrentPage(1);
    setSelectedGenre(genre);
  };

  return {
    selectedGenre,
    currentPage,
    handlePageChange,
    handleGenreSelect,
    pageSize
  };
};
