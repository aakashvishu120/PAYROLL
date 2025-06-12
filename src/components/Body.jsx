import React, { useState } from 'react'
import Table from './Table'
// import Table from '../utils/MOCK_DATA.json'



const Body = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {

        try {
            const response = await fetch('/MOCK_DATA.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const jsonData = await response.json();
            console.log("this is a data coming from body")
            console.log(jsonData)
            setData(jsonData);
        } catch (err) {
            // setError(err.message);
        } finally {
            // setLoading(false);
        }
    };



    return (
        <div className=''>
            <div className='flex items-center justify-center'>
                <button onClick={fetchData} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Populate Data</button>
            </div>
                
                {/* if (data.length != 0){
                    <Table/>
                } */}

                 {data.length != 0? <Table data={data} />: null }
        </div>
    )
}

export default Body