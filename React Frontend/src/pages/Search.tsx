import { useQuery } from "@tanstack/react-query"
import { Link, useSearchParams } from "react-router-dom"
import ErrorWithForm from "../components/ErrorWithForm"
import Loading from "../components/Loading"
import StickyNote from "../images/sticky_note.png"
import StickyNoteStraight from "../images/sticky_note_straight.png"

const Search = () => {
  const [searchParams] = useSearchParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData', searchParams.get('title')],
    queryFn: () =>
      fetch(`http://127.0.0.1:5000/get-search/${searchParams.get('title')}`).then((res) =>
        res.json(),
      ).then((res) => {
        if (!res) {
          throw new Error('No data');
        }
        else {
          return res;
        }
      }),
    enabled: !!searchParams.get('title'),
  })

  if (isLoading) return (
    <Loading loadingText="Fetching Knowledge..." />
  )

  if (error) return (
    <ErrorWithForm errorText="An error has occurred... Try again?" />
  )
  
  return (
    <div className="px-12">
      {/* Back button */}
      <Link to="/">
        <div className="absolute top-10 left-10">
          <button className="btn btn-active btn-accent">Back</button>
        </div>
      </Link>

      {/* Main Result */}
      {data.length > 0 && 
      (
        <div className="flex justify-between h-screen items-center">
          <Link to={`/article/${data[0]}`} className="hover:scale-105">
            <div className="relative inline-block w-96 ml-20">
              <img src={StickyNote} alt="main_article"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] w-8/12">
                <div className="text-black text-2xl font-bold line-clamp-2">
                  {data[0]}
                </div>
                {/* <hr className="border-1 border-black my-4 w-8/12"/>
                <div className="text-black text-lg line-clamp-5 w-11/12">
                  {fakeData[0].content}
                </div> */}
              </div>
            </div>
          </Link>

          {/* Other Results */}
          {data.length > 1 && 
          (
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {data.slice(1).map((item: string, index: number) => (
                <Link to={`/article/${item}`} key={index} className="hover:scale-105">
                  <div className="relative inline-block w-64">
                    <img src={StickyNoteStraight} alt="sub_article"/>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12">
                      <div className="text-black text-md font-bold line-clamp-2">
                        {item}
                      </div>
                      {/* <hr className="border-1 border-black my-2 w-8/12"/>
                      <div className="text-black text-sm line-clamp-5 w-11/12">
                        {fakeData[index+1].content}
                      </div> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search