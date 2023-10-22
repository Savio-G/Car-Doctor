import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))

  }, [])
  return (
    <div className='mt-28'>
      <div className='text-center space-y-5 mb-12'>
        <h1 className='font-bold text-xl text-error'>Our Services</h1>
        <h2 className='text-3xl font-bold text-black'>Our Services Area</h2>
        <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised
          <br />
          words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-3 mb-28'>
        {services.map(service => <ServiceCard
          key={service._id}
          service={service}
        ></ServiceCard>)}
      </div>
    </div>
  );
};

export default Services;