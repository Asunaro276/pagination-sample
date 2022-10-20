import { Box } from "@mui/material"
import { useRouter } from "next/router"
import Pagination from "../components/Pagination"

const Page = () => {
  const router = useRouter()
  const { page } = router.query
  return (
    <Box sx={{ marginLeft: "2rem" }}>
      <p>Page: {page}</p>
      <Pagination
        pageNumber={parseInt(page)}
        totalCount={10}
      />
    </Box>
  )
}

export default Page