import { SignInMethod } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Checkout = () => {
  const { price, title, service_id, _id, img } = useLoaderData()
  const { user } = useContext(AuthContext)
  const handleCheckout = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const price = form.price.value
    const date = form.date.value
    const email = form.email.value
    const checkoutInfo = { name, price, date, email, img, title }

    fetch('http://localhost:5000/checkout', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(checkoutInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }
  return (
    <form onSubmit={handleCheckout} className="card-body">
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" defaultValue={user?.name} name='name' className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="Your Email" defaultValue={user?.email} name='email' className="input input-bordered bg-white" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Price</span>
          </label>
          <input type="text" placeholder="Due Price" defaultValue={price} name='price' className="input input-bordered bg-white" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of order</span>
          </label>
          <input type="date" placeholder="Date" name='date' className="input input-bordered bg-white" required />
        </div>
      </div>
      <div className="form-control mt-6">
        <input type="submit" className='btn btn-error' value="Order Confirm" />
      </div>
    </form>
  );
};

export default Checkout;