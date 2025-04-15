const Dashboard = () => {
    return (
        <>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="col-span-2 text-xs">
                    <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <h2 class="text-gray-700 text-lg font-semibold mb-4">
                            Overview
                        </h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="bg-green-100 p-2 rounded-lg">
                                <h3 class="text-green-600 text-sm font-semibold">
                                    Today's Check in
                                </h3>
                                <p class="text-green-600 text-2xl font-bold">
                                    23
                                </p>

                            </div>
                            <div class="bg-red-100 p-2 rounded-lg">
                                <h3 class="text-red-600 text-sm font-semibold">
                                    Today's Check out
                                </h3>
                                <p class="text-red-600 text-2xl font-bold">
                                    21
                                </p>

                            </div>
                            <div class="bg-blue-100 p-2 rounded-lg">
                                <h3 class="text-blue-600 text-sm font-semibold">
                                    Room's Available
                                </h3>
                                <p class="text-blue-600 text-2xl font-bold">
                                    25
                                </p>
                            </div>
                            <div class="bg-yellow-100 p-2 rounded-lg">
                                <h3 class="text-yellow-600 text-sm font-semibold">
                                    Room's Reserved
                                </h3>
                                <p class="text-yellow-600 text-2xl font-bold">
                                    12
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 mt-4 p-3 rounded-lg border border-gray-200">
                        <div className="flex justify-between mb-4">
                            <h2 class="text-gray-700 text-lg font-semibold">Guest List</h2>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                New Guest
                            </button>
                        </div>
                        <table class="w-full text-left">
                            <thead>
                                <tr>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Guest Name
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Check in
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Check out
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Room Type
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Allocated Room
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Due Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2">
                                        Theresa Webb
                                    </td>
                                    <td class="py-2">
                                        Aug 23; 21:15:33
                                    </td>
                                    <td class="py-2">
                                        -
                                    </td>
                                    <td class="py-2 text-green-500">
                                        Single Bed
                                    </td>
                                    <td class="py-2">
                                        #B25
                                    </td>
                                    <td class="py-2">
                                        $256
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        Jerome Bell
                                    </td>
                                    <td class="py-2">
                                        Aug 23; 24:18:47
                                    </td>
                                    <td class="py-2">
                                        Aug 25; 14:14:38
                                    </td>
                                    <td class="py-2 text-green-500">
                                        Single Bed
                                    </td>
                                    <td class="py-2">
                                        #H29
                                    </td>
                                    <td class="py-2">
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        Ralph Edwards
                                    </td>
                                    <td class="py-2">
                                        Aug 26; 07:41:13
                                    </td>
                                    <td class="py-2">
                                        -
                                    </td>
                                    <td class="py-2 text-purple-500">
                                        Double Bed
                                    </td>
                                    <td class="py-2">
                                        #C41
                                    </td>
                                    <td class="py-2">
                                        $458
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        Albert Flores
                                    </td>
                                    <td class="py-2">
                                        Aug 26; 21:45:00
                                    </td>
                                    <td class="py-2">
                                        -
                                    </td>
                                    <td class="py-2 text-blue-500">
                                        Luxury King
                                    </td>
                                    <td class="py-2">
                                        #A54
                                    </td>
                                    <td class="py-2">
                                        $974
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        Bessie Cooper
                                    </td>
                                    <td class="py-2">
                                        Aug 28; 04:17:26
                                    </td>
                                    <td class="py-2">
                                        -
                                    </td>
                                    <td class="py-2 text-yellow-500">
                                        Queen Bed
                                    </td>
                                    <td class="py-2">
                                        #B26
                                    </td>
                                    <td class="py-2">
                                        $415
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        Cameron Williams
                                    </td>
                                    <td class="py-2">
                                        Aug 28; 04:31:54
                                    </td>
                                    <td class="py-2">
                                        -
                                    </td>
                                    <td class="py-2 text-yellow-500">
                                        Queen Bed
                                    </td>
                                    <td class="py-2">
                                        #B27
                                    </td>
                                    <td class="py-2">
                                        $865
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <!-- Room Clean --> */}
                <div className="text-xs">
                    <div class="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <h2 class="text-gray-700 text-lg font-semibold mb-4">
                            Room Clean
                        </h2>
                        <table class="w-full text-left">
                            <thead>
                                <tr>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Room
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Status
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Task
                                    </th>
                                    <th class="text-gray-600 text-sm font-semibold">
                                        Assignee
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2">
                                        #B25
                                    </td>
                                    <td class="py-2">
                                        Not Allocated
                                    </td>
                                    <td class="py-2 text-red-500">
                                        Dirty
                                    </td>
                                    <td class="py-2">
                                        Kristin Watson
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        #H29
                                    </td>
                                    <td class="py-2">
                                        Allocated
                                    </td>
                                    <td class="py-2 text-green-500">
                                        Clean
                                    </td>
                                    <td class="py-2">
                                        Cameron Will
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        #B45
                                    </td>
                                    <td class="py-2">
                                        Not Allocated
                                    </td>
                                    <td class="py-2 text-red-500">
                                        Dirty
                                    </td>
                                    <td class="py-2">
                                        None
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2">
                                        #B08
                                    </td>
                                    <td class="py-2">
                                        Allocated
                                    </td>
                                    <td class="py-2 text-green-500">
                                        Clean
                                    </td>
                                    <td class="py-2">
                                        None
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-4">
                        <div className="flex justify-between mb-4">
                            <h2 class="text-gray-700 text-lg font-semibold">
                                Quick Action
                            </h2>
                            <div class="flex space-x-4">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                    Check in
                                </button>
                                <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                                    Check out
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 mb-4">
                            <div>
                                <label class="block text-gray-600 text-sm font-semibold mb-2">
                                    Room No.
                                </label>
                                <select class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option>
                                        #B24
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-gray-600 text-sm font-semibold mb-2">
                                    Room Type
                                </label>
                                <select class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option>
                                        Single Bed
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 mb-4">
                            <div>
                                <label class="block text-gray-600 text-sm font-semibold mb-2">
                                    Guest Name
                                </label>
                                <input class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" value="Jerome Bell" />
                            </div>
                            <div>
                                <label class="block text-gray-600 text-sm font-semibold mb-2">
                                    Service list
                                </label>
                                <select class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option>
                                        Service 1
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="flex justify-between items-center mb-4">
                            <span class="text-gray-600 text-sm font-semibold">
                                Total Charge
                            </span>
                            <span class="text-gray-700 text-lg font-bold">
                                $545.25
                            </span>
                        </div>
                        <div class="flex space-x-4">
                            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                                Print Summary
                            </button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard