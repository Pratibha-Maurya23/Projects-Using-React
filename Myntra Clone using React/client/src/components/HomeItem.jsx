import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.aadToBag(item.id));
  };
  const handleRemove = () => {
    console.log("removed was clicked ")
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars}⭐|{item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price"> ₹ {item.current_price}</span>
        <span className="original-price"> ₹ {item.original_price}</span>
        <span className="discount">(${item.discount_percentage}% OFF )</span>
      </div>
      {elementFound ? (
        <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemove}>
          <MdDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          <FaShoppingCart />
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
