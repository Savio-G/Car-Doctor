import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, price, img, title } = service
  return (
    <div className="card w-96  shadow-xl">
      <figure className="px-10 pt-10 h-[1/2]">
        <img src={img} alt="Shoes" className="rounded-xl object-cover" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-[#444444]">{title}</h2>
        <p className="text-error">Price : ${price}</p>
        <div className="card-actions">
          <Link to={`/Checkout/${_id}`}> <button className="btn btn-error">Proceed Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;