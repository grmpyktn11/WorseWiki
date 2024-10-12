import { useQuery } from "@tanstack/react-query"
import { useSearchParams, useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import ErrorWithForm from "../components/ErrorWithForm"

const Search = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  })

  if (isLoading) return (
    <Loading loadingText="Fetching Knowledge..." />
  )

  if (error) return (
    <ErrorWithForm errorText="An error has occurred... Try again?" />
  )
  
  return (
    // <span className="text-black font-bold">No data so far...</span>
    <ErrorWithForm errorText="An error has occurred... Try again?" />
  )
}

export default Search