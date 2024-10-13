import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ErrorWithForm from "../components/ErrorWithForm"
import Loading from "../components/Loading"

const Content = () => {
  const { title } = useParams()
  const navigate = useNavigate()

  const { isLoading, isFetching, error, data } = useQuery({
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

  return (isLoading || isFetching) ? (
    <Loading loadingText="Fetching Knowledge..." />
  ) : (error) ? ( <ErrorWithForm errorText="An error has occurred... Try again?" /> ) : 
  (
    <div className="px-12">
      <div onClick={() => navigate(-1)}>
        <div className="absolute top-10 left-10 animate-slide-left hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 512 512"><path fill="none" stroke="yellow" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{data?.title}</h1>
          <p className="text-lg text-gray-600 whitespace-pre-line">{data?.summary}</p>
        </div>

        <div className="space-y-8">
          {data?.section_titles.map((title: string, index: number) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{data?.sections[title]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content