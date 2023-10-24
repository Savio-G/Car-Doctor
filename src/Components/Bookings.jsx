import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import ServiceRow from './ServiceRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()
  console.log(bookings)

  const url = `http://localhost:5000/checkout?email=${user.email}`

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-doctor access token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setBookings(data)
        }
        else {
          navigate("/")
        }
      })
  }, [url, navigate])

  const handleDelete = id => {
    const proceed = confirm('are you sure you want to delete this order?')
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`,
        {
          method: 'DELETE',
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        })
    }
  }

  const handleUpdate = id => {
    fetch(`http://localhost:5000/checkout/${id}`,
      {
        method: "PATCH",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter(booking => booking._id !== id)
          const updated = bookings.find(booking => booking._id === id)
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBookings(newBookings)
        }
      })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map(booking => <ServiceRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></ServiceRow>)}

          </tbody>



        </table>
      </div>
    </div>
  );
};

export default Bookings;