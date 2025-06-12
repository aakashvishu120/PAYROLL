import React from 'react'

const Table = () => {
    return (
        <div
            class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table class="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p class="block font-sans text-sm antialiased leading-none font-bold">
                                Emp. NO.
                            </p>
                        </th>
                        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p class="block font-sans text-sm antialiased leading-none font-bold">
                                First Name
                            </p>
                        </th>
                        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p class="block font-sans text-sm antialiased leading-none font-bold">
                                Last Name
                            </p>
                        </th>
                        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p class="block font-sans text-sm antialiased leading-none font-bold">Hourly Wage</p>
                        </th>

                        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p class="block font-sans text-sm antialiased leading-none font-bold">
                                Hour Worked
                            </p>
                        </th>

                        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p class="block font-sans text-sm antialiased leading-none font-bold">
                                Monthly Pay
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         <td class="p-4 border-b border-blue-gray-50">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                               1
                            </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                John 
                            </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                michael
                            </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                              100
                            </p>
                        </td>
                        <td class="p-4 border-b border-blue-gray-50">
                            <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                240
                            </a>
                        </td>

                        <td class="p-4 border-b border-blue-gray-50">
                            <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                24000
                            </a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>


    )
}

export default Table