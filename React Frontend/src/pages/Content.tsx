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
    
    <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
      <p className="text-lg text-gray-600">{data.summary}</p>
    </div>

    <div className="space-y-8">
      {data.section_titles.map((title: string, index: number) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{data.sections[title]}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Content