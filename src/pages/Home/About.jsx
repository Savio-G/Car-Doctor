import person from '../../assets/assets/images/about_us/person.jpg'
import parts from '../../assets/assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero mt-20 ">
      <div className="hero-content flex-col lg:flex-row h-[80vh] w-[100%] p-0">
        <div className='w-1/2 h-full relative' >
          <img src={person} className="rounded-lg shadow-2xl h-[85%] object-cover w-[90%]" />
          <img src={parts} className='h-[45%] absolute top-[50%] right-0 rounded-lg border-8 border-white overflow-hidden' alt="" />
        </div>
        <div className='w-1/2 pl-16'>
          <div className='w-3/4'>
            <h4 className="text-xl text-error">About us</h4>
            <h1 className='text-4xl font-bold text-black'>We are qualified & of experience in this field</h1>
            <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
          </div>
          <button className="btn btn-error btn-wide">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;