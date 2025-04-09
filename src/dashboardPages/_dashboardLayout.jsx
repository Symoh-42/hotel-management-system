import { Outlet } from "react-router"
import { Aside, Header } from "./dashboardComponents"

const DashboardLayout = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex flex-1 min-h-0 space-x-3 pt-2 px-3">
                    <Aside />
                    <div className="flex-1 overflow-y-auto ">
                        <div className="flex justify-between items-center mb-2">
                            <div className="relative">
                                <input className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" placeholder="Search" type="text" />
                                <button className="absolute right-0 top-0 mt-3 mr-4" type="submit">
                                    <i className="fas fa-search text-gray-400">
                                    </i>
                                </button>
                            </div>
                            <div className="flex items-center">
                                <img alt="User Avatar" className="w-10 h-10 rounded-full mr-3" height="40" src="https://storage.googleapis.com/a1aa/image/42xlCubdScZObofgOE_lg38k7bvNJMKljnZ6kkR5qIQ.jpg" width="40" />
                                <div>
                                    <h4 className="text-gray-700 font-semibold">
                                        Johan Abraham
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        Senior Staff
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout