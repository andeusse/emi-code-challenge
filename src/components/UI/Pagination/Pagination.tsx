import React from 'react';
import { FaFastBackward } from 'react-icons/fa';
import { FaStepBackward } from 'react-icons/fa';
import { FaFastForward } from 'react-icons/fa';
import { FaStepForward } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

import IconButton from '../IconButton/IconButton';
import { iconButton } from '../../../types/iconButton';

import './style.css';

type Props = {
  pages: number;
  currentPage: number;
  setCurrentPage: (p: number) => void;
};

const Pagination = (props: Props) => {
  const { pages, currentPage, setCurrentPage } = props;

  let pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  if (pages > 5) {
    if (currentPage >= 3 && currentPage <= pages - 2) {
      pagesArray = pagesArray.slice(currentPage - 3, currentPage + 2);
    } else {
      if (currentPage === 1) {
        pagesArray = pagesArray.slice(0, currentPage + 4);
      }
      if (currentPage === 2) {
        pagesArray = pagesArray.slice(0, currentPage + 3);
      }
      if (currentPage === pages - 1) {
        pagesArray = pagesArray.slice(currentPage - 4, pages);
      }
      if (currentPage === pages) {
        pagesArray = pagesArray.slice(currentPage - 5, pages);
      }
    }
  }

  return (
    <div className="pagination-container">
      <IconButton
        icon={<FaFastBackward />}
        type={iconButton.square}
        action={() => {
          setCurrentPage(1);
        }}
      ></IconButton>
      <IconButton
        icon={<FaStepBackward />}
        type={iconButton.square}
        action={() => {
          if (currentPage === 1) {
            setCurrentPage(1);
          } else {
            setCurrentPage(currentPage - 1);
          }
        }}
      ></IconButton>
      {pages > 5 && currentPage > 3 && (
        <BsThreeDots className="pagination-dots"></BsThreeDots>
      )}
      {pagesArray.map((page) => {
        return (
          <div key={`page ${page}`}>
            <IconButton
              icon={page}
              type={iconButton.square}
              action={() => {
                setCurrentPage(page);
              }}
              className={`${
                page === currentPage ? 'pagination-selected-page' : ''
              }`}
            ></IconButton>
          </div>
        );
      })}
      {pages > 5 && currentPage < pages - 2 && (
        <BsThreeDots className="pagination-dots"></BsThreeDots>
      )}
      <IconButton
        icon={<FaStepForward />}
        type={iconButton.square}
        action={() => {
          if (currentPage === pages) {
            setCurrentPage(pages);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }}
      ></IconButton>
      <IconButton
        icon={<FaFastForward />}
        type={iconButton.square}
        action={() => {
          setCurrentPage(pages);
        }}
      ></IconButton>
    </div>
  );
};

export default Pagination;
