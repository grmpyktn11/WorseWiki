import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-neutral-200 to-neutral-400">
      <Outlet />
    </div>
  )
}

export default MainLayout