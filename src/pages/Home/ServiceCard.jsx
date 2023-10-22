
const ServiceCard = ({ service }) => {
  const { price, img, title } = service
  return (
    <div className="card w-96  shadow-xl">
      <figure className="px-10 pt-10 h-[1/2]">
        <img src={img} alt="Shoes" className="rounded-xl object-cover" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-[#444444]">{title}</h2>
        <p className="text-error">Price : ${price}</p>

      </div>
    </div>
  );
};

export default ServiceCard;