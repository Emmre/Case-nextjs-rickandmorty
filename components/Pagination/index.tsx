import * as React from "react"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"
import Stack from "@mui/material/Stack"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

interface PaginationProps {
  count: number
  page?: number
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
}

const PaginationComp: React.FC<PaginationProps> = ({ count, ...props }) => {
  return (
    <Stack spacing={2} className="pagination">
      <Pagination count={count} {...props} />
    </Stack>
  )
}

export default PaginationComp
