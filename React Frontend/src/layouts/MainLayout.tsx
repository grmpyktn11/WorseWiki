import { Outlet } from "react-router-dom"
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <>
      <Toaster />
      <div className="h-full w-screen bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout