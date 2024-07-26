import React from 'react'
import { useSelector } from 'react-redux'

function Booking() {
  const data = useSelector((state) => state.bookings.myBookings)

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800 ">
      <div className="text-2xl font-semibold text-center my-4 text-white">Your Bookings</div>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="py-3 px-4 text-left uppercase tracking-wider">Name</th>
              <th className="py-3 px-4 text-left uppercase tracking-wider">Service</th>
              <th className="py-3 px-4 text-left uppercase tracking-wider">Date</th>
              <th className="py-3 px-4 text-left uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody>
            {(
              data.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-600">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.bookings}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">{item.time}</td>
                </tr>
              ))
            ) 
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Booking