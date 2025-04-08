import { Link } from 'react-router'

const Restaurant = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
                {/* // < !--Main Content-- > */}
                <div className="col-span-2 flex-1 text-xs border border-gray-200 p-2 rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-700 text-lg font-semibold mb-4">
                            Food List
                        </h2>
                        <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Add Food
                        </Link>
                    </div>
                    <div className="flex justify-between space-x-2 items-center mb-6">
                        <div className="flex space-x-2">
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-blue-400 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                All
                            </Link>
                            <Link to="" className="flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                🍕 <span>Pizza</span>
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                🍹 Drinks
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                🍣 Sushi
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                🍔 Burger
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                📋 Set Menu
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                🍝 Pasta
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                🥟 Momos
                            </Link>
                            <Link to="" className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                📃 View List
                            </Link>
                        </div>

                    </div>
                    <div className="grid grid-cols-4  gap-2">
                        {/* <!-- Food Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <img alt="Pama Paw Salad" className="rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/ZkzxhEl-09bRva_GXSfa8Oms4o67tXddpZsYr_ibtwM.jpg" width="300" />
                            <h3 className="text-lg font-semibold mb-2">
                                Pama Paw Salad
                            </h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-yellow-500 mr-1">
                                </i>
                                <span>
                                    4.7
                                </span>
                            </div>
                            <div className="text-gray-500">
                                <p>
                                    Price: $25.45
                                </p>
                                <p>
                                    Order: 5452
                                </p>
                                <p>
                                    Repeat Buyers: 35%
                                </p>
                            </div>
                        </div>
                        {/* <!-- Food Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <img alt="Beef Oregano Momos" className="rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/a25g0t4lL9VpYwM_oLXugePWYdhkbb9xuh_TihZsrhw.jpg" width="300" />
                            <h3 className="text-lg font-semibold mb-2">
                                Beef Oregano Momos
                            </h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-yellow-500 mr-1">
                                </i>
                                <span>
                                    4.7
                                </span>
                            </div>
                            <div className="text-gray-500">
                                <p>
                                    Price: $47.45
                                </p>
                                <p>
                                    Order: 52
                                </p>
                                <p>
                                    Repeat Buyers: 11%
                                </p>
                            </div>
                        </div>
                        {/* <!-- Food Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <img alt="Beef Salad" className="rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/0QgjlmqZiI5Kf8nqDBu56qfmQabn34w3baXRRd4h858.jpg" width="300" />
                            <h3 className="text-lg font-semibold mb-2">
                                Beef Salad
                            </h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-yellow-500 mr-1">
                                </i>
                                <span>
                                    4.7
                                </span>
                            </div>
                            <div className="text-gray-500">
                                <p>
                                    Price: $40.45
                                </p>
                                <p>
                                    Order: 78
                                </p>
                                <p>
                                    Repeat Buyers: 3%
                                </p>
                            </div>
                        </div>
                        {/* <!-- Food Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <img alt="Italian Blast Pasta" className="rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/iju5rfYdEjocfz5JfyU0b-Ak-VQ0RdbA-mu1gliB0W4.jpg" width="300" />
                            <h3 className="text-lg font-semibold mb-2">
                                Italian Blast Pasta
                            </h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-yellow-500 mr-1">
                                </i>
                                <span>
                                    4.7
                                </span>
                            </div>
                            <div className="text-gray-500">
                                <p>
                                    Price: $244.45
                                </p>
                                <p>
                                    Order: 40
                                </p>
                                <p>
                                    Repeat Buyers: 2%
                                </p>
                            </div>
                        </div>
                        {/* <!-- Food Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <img alt="Beef Origano Pizza" className="rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/vBZKf5at9skzXzZI67G21RELniNVmwgMVEdO3LPVXaA.jpg" width="300" />
                            <h3 className="text-lg font-semibold mb-2">
                                Beef Origano Pizza
                            </h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-yellow-500 mr-1">
                                </i>
                                <span>
                                    4.7
                                </span>
                            </div>
                            <div className="text-gray-500">
                                <p>
                                    Price: $8.45
                                </p>
                                <p>
                                    Order: 76
                                </p>
                                <p>
                                    Repeat Buyers: 49%
                                </p>
                            </div>
                        </div>
                        {/* <!-- Food Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                            <img alt="Masala Sushi" className="rounded-lg mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/JPsX3H1DFJhm4aLSiGo1_6nLvk0nbM4015FUHnHiIrY.jpg" width="300" />
                            <h3 className="text-lg font-semibold mb-2">
                                Masala Sushi
                            </h3>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-star text-yellow-500 mr-1">
                                </i>
                                <span>
                                    4.7
                                </span>
                            </div>
                            <div className="text-gray-500">
                                <p>
                                    Price: $24.45
                                </p>
                                <p>
                                    Order: 442
                                </p>
                                <p>
                                    Repeat Buyers: 75%
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-col items-center">
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900">
                                Prev
                            </button>
                            <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                {/* // <!--Orders Section-- > */}
                <div className="">
                    <div className="bg-white border border-gray-200 rounded-lg p-2">
                        <h2 className="text-gray-700 text-lg font-semibold mb-4">
                            Orders
                        </h2>
                        <div className="flex mb-6">
                            <button className="bg-blue-500 text-white px-2.5 py-1.5 text-xs font-medium text-center rounded-lg mr-2">
                                Active
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-2.5 py-1.5 text-xs font-medium text-center rounded-lg mr-2">
                                Past
                            </button>
                            <button className="bg-gray-200 text-gray-700 px-2.5 py-1.5 text-xs font-medium text-center rounded-lg">
                                Canceled
                            </button>
                        </div>
                        <div className="space-y-4 text-xs">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-700">
                                        #458568625542
                                    </p>
                                    <p className="text-gray-500 font-semibold">
                                        Egg Aulette
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        2715 Ash Dr. San Jose, South Dakota 83475
                                    </p>
                                </div>
                                <p className="text-gray-700 font-semibold">
                                    $45.45
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant