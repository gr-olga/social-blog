import Pagination from "react-js-pagination"
import {useState} from "react";
import './paginationComponent.scss';
// import 'react-js-pagination/dist/styles.css';

type PaginationProps = {
    postsPerPage: number,
    totalPosts: number,
    onChangePage: (pageNumber: number) => void
}

export default function PaginationComponent({postsPerPage, totalPosts, onChangePage}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber: number): void => {
        setCurrentPage(pageNumber);
        onChangePage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="pagination">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={postsPerPage}
                    totalItemsCount={totalPosts}
                    onChange={handlePageChange}
                />
        </div>
    );
}