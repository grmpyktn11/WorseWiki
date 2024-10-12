import { useQuery } from "@tanstack/react-query"
import { useSearchParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Loading from "../components/Loading"
import ErrorWithForm from "../components/ErrorWithForm"
import StickyNote from "../images/sticky_note.png"
import StickyNoteStraight from "../images/sticky_note_straight.png"

const fakeData = [
  {
    title: "George Mason University 2024 Edition",
    content: "George Mason (December 11, 1725 [O.S. November 30, 1725] – October 7, 1792) was an American planter, politician, Founding Father, and delegate to the U.S. Constitutional Convention in Philadelphia in 1787, where he was one of three delegates who refused to sign the Constitution. ",
  },
  {
    title: "Faker 2",
    content: "Faker 2 content",
  },
  {
    title: "Faker 3",
    content: "Faker 3 content",
  },
  {
    title: "Faker 4",
    content: "Faker 4 content",
  }
]

const Search = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://api.github.com/repos/TanStack/query/${searchParams.get('title')}`).then((res) =>
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
    <div className="px-12">
      {/* Back button */}
      <Link to="/">
        <div className="absolute top-10 left-10">
          <button className="btn btn-active btn-accent">Back</button>
        </div>
      </Link>

      {/* Main Result */}
      {fakeData.length > 0 && 
      (
        <div className="flex justify-between h-screen items-center">
          <Link to="/content" className="hover:scale-105">
            <div className="relative inline-block w-96 ml-20">
              <img src={StickyNote} alt="main_article"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] w-8/12">
                <div className="text-black text-2xl font-bold line-clamp-2">
                  {fakeData[0].title}
                </div>
                <hr className="border-1 border-black my-4 w-8/12"/>
                <div className="text-black text-lg line-clamp-5 w-11/12">
                  {fakeData[0].content}
                </div>
              </div>
            </div>
          </Link>

          {/* Other Results */}
          {fakeData.length > 1 && 
          (
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {fakeData.slice(1).map((item, index) => (
                <Link to="/content" className="hover:scale-105">
                  <div key={item.title} className="relative inline-block w-64">
                    <img src={StickyNoteStraight} alt="sub_article"/>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9/12">
                      <div className="text-black text-md font-bold line-clamp-2">
                        {fakeData[index+1].title}
                      </div>
                      <hr className="border-1 border-black my-2 w-8/12"/>
                      <div className="text-black text-sm line-clamp-5 w-11/12">
                        {fakeData[index+1].content}
                      </div>
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