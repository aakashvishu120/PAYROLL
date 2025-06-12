import React from 'react'
import { useState } from 'react'

const Table = ({data}) => {

    console.log("inside table jsx")
    console.log(data)

    const [pay, setpay] = useState(0)
      const [hours, setHours] = useState({});

    const handleInputChange = (e, id) => {
    const value = e.target.value;
    setHours((prev) => ({
      ...prev,
      [id]: value,
    }));
  };



    return (
        <div
            className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased leading-none font-bold">
                                Emp. NO.
                            </p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased leading-none font-bold">
                                First Name
                            </p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased leading-none font-bold">
                                Last Name
                            </p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased leading-none font-bold">Hourly Wage</p>
                        </th>

                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased leading-none font-bold">
                                Hour Worked
                            </p>
                        </th>

                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased leading-none font-bold">
                                Monthly Pay
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
            const hoursWorked = hours[item.id] ;
            const monthlyPay = item.hourlyWage * hoursWorked;

            return(
                        <tr>
                         <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                               {item.id}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {item.firstName}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {item.lastName}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                              {item.hourlyWage}
                            </p>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                            <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                 <input type="text" value={hoursWorked} onChange={(e) => handleInputChange(e, item.id)} className="border rounded px-2 py-1 w-20" placeholder="Hours"/>
                            </a>
                        </td>

                        <td className="p-4 border-b border-blue-gray-50">
                            <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                              Rs {monthlyPay || '...'}
                            </a>
                        </td>
                    </tr>
                    )
                }
                )}

                </tbody>
            </table>
        </div>


    )
}

export default Table