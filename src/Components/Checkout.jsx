import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const { price, title, service_id, _id } = useLoaderData()
  console.log(price, title)
  return (
    <form className="card-body">
      <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="First name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered bg-white" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone No.</span>
          </label>
          <input type="text" placeholder="Phone no." className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered bg-white" required />

        </div>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-error">Order Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;