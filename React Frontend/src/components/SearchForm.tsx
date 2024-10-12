import { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
    navigate({
      pathname: '/search',
      search: `?${createSearchParams({title: query})}`,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered input-primary flex items-center gap-2 bg-neutral-100 w-96 text-black text-xl">
        <input 
          type="text" 
          className="grow" 
          placeholder="Start typing..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="black"
          className="h-4 w-4">
          <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd" />
        </svg>
      </label>
    </form>
  )
}

export default SearchForm