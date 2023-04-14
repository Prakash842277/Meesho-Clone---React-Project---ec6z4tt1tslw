import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import "../Address/Address.css";
import { useStateContext } from "../context/Context";

let data = [
    "Prakash Chandra",
    7068992212,
    "W-38, D3",
    "Chinchwad",
    846001,
    "Pune",
    "Maharashtra",
    "Near Chaphekar chowk",
  ];
function Address(){
  const { totalPrice }=useStateContext();
    let [inp, setInp] = useState(data);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/checkout/payment");
      };
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const changeHandler = (e) => {
        let newInp = [...inp];
        let { id, value } = e.target;
        newInp[+id] = value;
        setInp(newInp);
      };
    return (
        <section id="address-section">
        <form action="" onSubmit={handleSubmit}>
          <h1>ADD ADDRESS</h1>
          <hr />
          <div>
            <FaPhone
              style={{ color: "#E93599", marginRight: "10px" }}
            />
            <h2>Contact Details</h2>
          </div>
          <input
            type="text"
            placeholder="Name"
            id="0"
            value={inp[0]}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Phone Number"
            id="1"
            value={inp[1]}
            onChange={changeHandler}
          />
          <div>
            <FaLocationArrow
              style={{ color: "#E93599", marginRight: "10px" }}
            />
            <h2>Address Details</h2>
          </div>
          <input
            type="text"
            placeholder="House no./ Building Name"
            id="2"
            value={inp[2]}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Road Name/ Area/ Colony"
            id="3"
            value={inp[3]}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Pincode"
            id="4"
            value={inp[4]}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="City"
            id="5"
            value={inp[5]}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="State"
            id="6"
            value={inp[6]}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Nearby Location (optional)"
            id="7"
            value={inp[7]}
            onChange={changeHandler}
          />
          <button>Deliver to this Address</button>
        </form>
        <div>
          <h1>Price Details</h1>
          <p>
            Product Charges<span>₹{totalPrice}</span>
          </p>
          <p>
            Delivery Charges<span>+ ₹0</span>
          </p>
          <p>
            COD Charges<span>+ ₹0</span>
          </p>
          <p>
            1st Order Discount<span>- ₹50</span>
          </p>
          <hr />
          <h2>
            Order Total <span>₹{totalPrice - 50}</span>
          </h2>
        </div>
      </section>
    )
}
export default Address;