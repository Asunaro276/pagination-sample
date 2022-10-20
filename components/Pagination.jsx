import { Link as MuiLink, Pagination as MuiPagination, PaginationItem } from '@mui/material'
import Link from 'next/link'

const Pagination = ({ pageNumber, totalCount }) => {
  return (
    <MuiPagination
      page={pageNumber}
      count={totalCount}
      renderItem={item => (
        <Link href={item.page === 1 ? `/` : `/${item.page}`} passHref>
          <PaginationItem
            {...item}
            component={MuiLink}
          />
        </Link>
      )}
    />
  )
}

export default Pagination