import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cartProducts = useSelector(state => state.cart); // Retrieve cart items from Redux store
  const dispatch = useDispatch()

  const removeCart = (id)=>{
    dispatch(remove(id))
  }

  return (
    <div>
      <h1 className="font-700 text-[30px] text-center">Cart</h1>
      {cartProducts.length > 0 ? cartProducts.map((item,i) => (
        <div key={i} className="p-4 border-b border-gray-300">
          {item.title} - INR.{item.price}
          <div className="flex justify-end items-center">
          <img src={item.image} className="w-12 h-12" alt="" />
          </div>
          <div><Button variant="danger" onClick={()=>{removeCart(item.id)}}>Remove Item</Button></div>
        </div>
      )) : <p className="text-center mt-4">No items in the cart</p>}
    </div>
  );
}

export default Cart;
