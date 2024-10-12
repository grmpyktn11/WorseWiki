import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import Loading from "../components/Loading"
import ErrorWithForm from "../components/ErrorWithForm"

const Content = () => {
  const { title } = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`http://127.0.0.1:5000/get-content/${title}`).then((res) =>
        res.json(),
      ).then((res) => {
        if (!res) {
          throw new Error('No data');
        }
        else {
          return res;
        }
      }),
    enabled: !!title,
  })

  if (isLoading) return (
    <Loading loadingText="Fetching Knowledge..." />
  )

  if (error) return (
    <ErrorWithForm errorText="An error has occurred... Try again?" />
  )

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.summary}</p>
      </div>

      {data.section_titles.map((title: string, index: number) => (
        <div key={index}>
          <h2>{title}</h2>
          <p>{data.sections[title]}</p>
        </div>
      ))}
    </div>
  )
}

export default Content