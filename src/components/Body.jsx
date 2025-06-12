import React from 'react'
import Table from './Table'


const Body = () => {

   



    return (
        <div className=''>
            <div className='flex items-center justify-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Populate Data</button>
            </div>
            <Table />
        </div>
    )
}

export default Body