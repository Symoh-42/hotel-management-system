const Header = () => {
    return (
        <div className="flex justify-between px-4 shadow-md">
            <span className="text-center text-blue-600 text-2xl font-bold">
                HOTEL MANAGEMENT
            </span>
            <div className="flex space-x-4 items-center">
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
        </div>

    )
}

export default Header