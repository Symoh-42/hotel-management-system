import React from 'react'
import { Link } from 'react-router'

const Rooms = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
                <div className="col-span-2 text-xs flex-1 bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-700 text-lg font-semibold mb-4">
                            Rooms
                        </h2>
                        <div className="flex items-center">
                            <select className="bg-gray-200 rounded-md px-2.5 py-1.5 mr-2 focus:outline-none">
                                <option>
                                    All Type
                                </option>
                            </select>
                            <select className="bg-gray-200 rounded-md px-2.5 py-1.5 focus:outline-none">
                                <option>
                                    All Status
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <input className="mr-2" type="checkbox" />
                            <span className="text-gray-700">
                                Image
                            </span>
                        </div>
                        
                    </div>
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-400">
                            <tr>
                                <th className="py-2">
                                    Image
                                </th>
                                <th className="py-2">
                                    Type
                                </th>
                                <th className="py-2">
                                    Meal
                                </th>
                                <th className="py-2">
                                    Rate
                                </th>
                                <th className="py-2">
                                    Status
                                </th>
                                <th className="py-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-2">
                                    <img alt="Luxury Queen Bed With Garden View" className="rounded" height="60" src="https://storage.googleapis.com/a1aa/image/lW0VYI7uOgfXGE_s9bVNScb1axlUA7onGJ1DL6lJMgY.jpg" width="100" />
                                </td>
                                <td className="py-2">
                                    <p>
                                        #B17
                                    </p>
                                    <p className="text-yellow-500">
                                        Queen Bed
                                    </p>
                                    <p>
                                        Luxury Queen Bed With Garden View
                                    </p>
                                </td>
                                <td className="py-2">
                                    <p>
                                        Complementary Breakfast
                                    </p>
                                    <p>
                                        After Noon Snacks
                                    </p>
                                </td>
                                <td className="py-2">
                                    $1280.50/Day
                                </td>
                                <td className="py-2 text-green-500">
                                    Allocated
                                </td>
                                <td className="py-2">
                                    <i className="fas fa-edit text-gray-500 mr-2">
                                    </i>
                                    <i className="fas fa-trash text-gray-500">
                                    </i>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    <img alt="Single Blast" className="rounded" height="60" src="https://storage.googleapis.com/a1aa/image/gQThV59ezftu152w6RvIc-sqigTaqeMhgA01azKdigU.jpg" width="100" />
                                </td>
                                <td className="py-2">
                                    <p>
                                        #C29
                                    </p>
                                    <p className="text-green-500">
                                        Single Bed
                                    </p>
                                    <p>
                                        Single Blast
                                    </p>
                                </td>
                                <td className="py-2">
                                    <p>
                                        Complementary Breakfast
                                    </p>
                                </td>
                                <td className="py-2">
                                    $225.50/Day
                                </td>
                                <td className="py-2 text-green-500">
                                    Allocated
                                </td>
                                <td className="py-2">
                                    <i className="fas fa-edit text-gray-500 mr-2">
                                    </i>
                                    <i className="fas fa-trash text-gray-500">
                                    </i>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    <img alt="Luxury King With Privet pool" className="rounded" height="60" src="https://storage.googleapis.com/a1aa/image/_ozkb4lj4JkaEGeadJhVW6gk1erziwpSPOtf7BwfYgQ.jpg" width="100" />
                                </td>
                                <td className="py-2">
                                    <p>
                                        #C47
                                    </p>
                                    <p className="text-blue-500">
                                        Luxury King
                                    </p>
                                    <p>
                                        Luxury King With Privet pool
                                    </p>
                                </td>
                                <td className="py-2">
                                    <p>
                                        Complementary Breakfast
                                    </p>
                                    <p>
                                        After Noon Snacks
                                    </p>
                                </td>
                                <td className="py-2">
                                    $1547.50/Day
                                </td>
                                <td className="py-2 text-gray-500">
                                    Not Allocated
                                </td>
                                <td className="py-2">
                                    <i className="fas fa-edit text-gray-500 mr-2">
                                    </i>
                                    <i className="fas fa-trash text-gray-500">
                                    </i>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    <img alt="Trip Double Bed" className="rounded" height="60" src="https://storage.googleapis.com/a1aa/image/ehvOurD9U2QwIjfT_esjwIpBf0jevy2b7UG0MYuP8zw.jpg" width="100" />
                                </td>
                                <td className="py-2">
                                    <p>
                                        #E14
                                    </p>
                                    <p className="text-purple-500">
                                        Double Bed
                                    </p>
                                    <p>
                                        Trip Double Bed
                                    </p>
                                </td>
                                <td className="py-2">
                                    <p>
                                        Complementary Breakfast
                                    </p>
                                    <p>
                                        After Noon Snacks
                                    </p>
                                </td>
                                <td className="py-2">
                                    $854.50/Day
                                </td>
                                <td className="py-2 text-green-500">
                                    Allocated
                                </td>
                                <td className="py-2">
                                    <i className="fas fa-edit text-gray-500 mr-2">
                                    </i>
                                    <i className="fas fa-trash text-gray-500">
                                    </i>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    <img alt="Single Moon" className="rounded" height="60" src="https://storage.googleapis.com/a1aa/image/jBc2u7QD-FjNINNSG5gSWJEyLs0ufU7gCONzqpBHLiQ.jpg" width="100" />
                                </td>
                                <td className="py-2">
                                    <p>
                                        #A14
                                    </p>
                                    <p className="text-green-500">
                                        Single Bed
                                    </p>
                                    <p>
                                        Single Moon
                                    </p>
                                </td>
                                <td className="py-2">
                                    <p>
                                        Complementary Breakfast
                                    </p>
                                </td>
                                <td className="py-2">
                                    $652.50/Day
                                </td>
                                <td className="py-2 text-gray-500">
                                    Not Allocated
                                </td>
                                <td className="py-2">
                                    <i className="fas fa-edit text-gray-500 mr-2">
                                    </i>
                                    <i className="fas fa-trash text-gray-500">
                                    </i>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    <img alt="Single Moon" className="rounded" height="60" src="https://storage.googleapis.com/a1aa/image/jBc2u7QD-FjNINNSG5gSWJEyLs0ufU7gCONzqpBHLiQ.jpg" width="100" />
                                </td>
                                <td className="py-2">
                                    <p>
                                        #A25
                                    </p>
                                    <p className="text-green-500">
                                        Single Bed
                                    </p>
                                    <p>
                                        Single Moon
                                    </p>
                                </td>
                                <td className="py-2">
                                    <p>
                                        Complementary Breakfast
                                    </p>
                                </td>
                                <td className="py-2">
                                    $415.50/Day
                                </td>
                                <td className="py-2 text-green-500">
                                    Allocated
                                </td>
                                <td className="py-2">
                                    <i className="fas fa-edit text-gray-500 mr-2">
                                    </i>
                                    <i className="fas fa-trash text-gray-500">
                                    </i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-4">
                        <nav>
                            <ul className="flex items-center">
                                <li className="mr-2">
                                    <a className="px-3 py-1 bg-gray-200 rounded-full" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a className="px-3 py-1 bg-gray-200 rounded-full" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a className="px-3 py-1 bg-gray-200 rounded-full" href="#">
                                        ...
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a className="px-3 py-1 bg-gray-200 rounded-full" href="#">
                                        9
                                    </a>
                                </li>
                                <li>
                                    <a className="px-3 py-1 bg-gray-200 rounded-full" href="#">
                                        10
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-xs">
                        <h2 className="text-gray-700 text-lg font-semibold mb-4">
                            Add Room
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Room Type
                                </label>
                                <select className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none">
                                    <option>
                                        Single Bed
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Room No.
                                </label>
                                <input className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none" type="text" value="#B24" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Room Name
                                </label>
                                <input className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none" type="text" value="Luxury King with Pool" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Rate
                                </label>
                                <input className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none" type="text" value="$1280.50 / Day" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Facilities list
                                </label>
                                <select className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none">
                                    <option>
                                        Facility 1
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Upload
                                </label>
                                <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                                    <p className="text-gray-500">
                                        Click to Upload or drag and drop
                                    </p>
                                    <p className="text-gray-500">
                                        (Max. File size: 25 MB)
                                    </p>
                                    <div className="mt-4">
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-700">
                                                Room Image 1.jpeg
                                            </p>
                                            <i className="fas fa-trash text-gray-500">
                                            </i>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <div className="bg-blue-500 h-2 rounded-full w-[40%]">
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-sm mt-2">
                                            200 KB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button className="bg-gray-200 rounded-full px-4 py-2" type="button">
                                    Save as Draft
                                </button>
                                <button className="bg-blue-500 text-white rounded-full px-4 py-2" type="submit">
                                    Add Room
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rooms