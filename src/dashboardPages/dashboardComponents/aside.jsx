import { Link } from "react-router"

const Aside = () => {
    return (
        <div className="w-64 h-[98%] flex flex-col bg-gray-100 border border-gray-200 rounded-md overflow-y-auto">
            <h1 className="text-center text-blue-600 text-2xl font-bold">
                HOTEL MANAGEMENT
            </h1>
            <div className="flex-grow">
                <nav className="space-y-2">
                    <a className="flex items-center px-4 py-2 text-gray-700 bg-blue-100 border-r-2 border-blue-600" href="#">
                        <i className="fas fa-home mr-3">
                        </i>
                        Home
                    </a>
                    <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" href="#">
                        <i className="fas fa-users mr-3">
                        </i>
                        Guests
                    </a>
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" to="/">
                        <i className="fas fa-calendar-alt mr-3">
                        </i>
                        Reservations
                    </Link>
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" to="/rooms">
                        <i className="fas fa-bed mr-3">
                        </i>
                        Rooms
                    </Link>
                    <Link className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" to="/restaurant">
                        <i className="fas fa-utensils mr-3">
                        </i>
                        Restaurant
                    </Link>
                    <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" href="#">
                        <i className="fas fa-parking mr-3">
                        </i>
                        Parking
                    </a>
                    <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" href="#">
                        <i className="fas fa-envelope mr-3">
                        </i>
                        Message
                        <span className="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            12
                        </span>
                    </a>
                    <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100" href="#">
                        <i className="fas fa-cog mr-3">
                        </i>
                        Settings
                    </a>
                </nav>
            </div>
            <div className="px-4 py-2 border-t border-gray-300">
                <h3 className="text-gray-600 text-sm font-semibold">
                    Notice
                </h3>
                <ul className="mt-2 text-gray-600 text-sm">
                    <li className="mt-1">
                        Summer Vacation
                    </li>
                    <li className="mt-1">
                        Employment Notice
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Aside