import { Box } from "@mui/material"
import { useRouter } from "next/router"
import Pagination from "../components/Pagination"

export default function Home() {
  return (
    <Box sx={{ marginLeft: "2rem" }}>
      <p>
        Home
      </p>
      <Pagination
        pageNumber={1}
        totalCount={10}
      />
    </Box>
  )
}
