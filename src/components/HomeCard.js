import "./HomeCard.css";
export const HomeCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>{price}</p>
        <button>click to buy</button>
      </div>
    </div>
  );
};
