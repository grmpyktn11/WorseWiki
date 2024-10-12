import { Outlet } from "react-router-dom"
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <>
      <Toaster />
      <div className="h-screen w-screen bg-main">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout