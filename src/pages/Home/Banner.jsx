import React from 'react';
import Banner1 from '../../assets/assets/images/banner/1.jpg'
import Banner2 from '../../assets/assets/images/banner/2.jpg'
import Banner3 from '../../assets/assets/images/banner/3.jpg'
import Banner4 from '../../assets/assets/images/banner/4.jpg'
import Banner5 from '../../assets/assets/images/banner/5.jpg'
import Banner6 from '../../assets/assets/images/banner/6.jpg'
const Banner = () => {
  const SliderButtons = <>
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5 bg-error border-0">❮</a>
      <a href="#slide2" className="btn btn-circle bg-error border-0">❯</a>
    </div>
  </>
  return (
    <div className="carousel w-full overflow-hidden rounded-2xl ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={Banner1} />
        <div className="absolute flex flex-col justify-center h-full w-3/5 space-y-7 pl-20 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
          <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn btn-error mr-5">Discover More</button>
            <button className="btn btn-outline">Discover More</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-5 bg-error border-0">❮</a>
          <a href="#slide2" className="btn btn-circle bg-error border-0">❯</a>
        </div>

      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Banner2} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full w-3/5 space-y-7 pl-20 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
          <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn btn-error mr-5">Discover More</button>
            <button className="btn btn-outline">Discover More</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 ">
          <h2>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <button className="btn btn-error">Discover More</button>

        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5 bg-error border-0">❮</a>
          <a href="#slide3" className="btn btn-circle bg-error border-0">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Banner3} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full w-3/5 space-y-7 pl-20 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
          <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn btn-error mr-5">Discover More</button>
            <button className="btn btn-outline">Discover More</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5 bg-error border-0">❮</a>
          <a href="#slide4" className="btn btn-circle bg-error border-0">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={Banner4} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full w-3/5 space-y-7 pl-20 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
          <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn btn-error mr-5">Discover More</button>
            <button className="btn btn-outline">Discover More</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5 bg-error border-0">❮</a>
          <a href="#slide5" className="btn btn-circle bg-error border-0">❯</a>
        </div>

      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={Banner5} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full w-3/5 space-y-7 pl-20 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
          <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn btn-error mr-5">Discover More</button>
            <button className="btn btn-outline">Discover More</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5 bg-error border-0">❮</a>
          <a href="#slide6" className="btn btn-circle bg-error border-0">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={Banner6} className="w-full" />
        <div className="absolute flex flex-col justify-center h-full w-3/5 space-y-7 pl-20 bg-gradient-to-r from-[#151515]  to-[rgba(21, 21, 21, 0.00)]">
          <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn btn-error mr-5">Discover More</button>
            <button className="btn btn-outline">Discover More</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-5 bg-error border-0">❮</a>
          <a href="#slide1" className="btn btn-circle bg-error border-0">❯</a>
        </div>

      </div>
    </div>
  );
};

export default Banner;