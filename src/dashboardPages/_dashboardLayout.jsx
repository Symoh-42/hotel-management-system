import { Outlet } from "react-router"
import { Aside, Header } from "./dashboardComponents"

const DashboardLayout = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1 min-h-0 space-x-3 pt-2 px-3">
                    <Aside />
                    <div className="flex-1 overflow-y-auto p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout