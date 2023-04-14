import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../payment/payment.css"

let data = ["1234 5678 9101 2345", "12/25", "123", "Prakash Chandra"];
function Payment(){
    let [inp, setInp] = useState(data);
    let [color, setColor] = useState("#06A759");
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/checkout/summary");
      };

      const clr = () => {
        if (color === "#06A759") {
          setColor("grey");
          return;
        }
        setColor("#06A759");
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
    return(
        <section className="payment-container-box">
        <div className="cod-box">
             <p>Cash on Delivery</p>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          iconSize="20"
          className="Icon-sc-1iwi4w1-0 fvvrdU"
          onClick={clr}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.355 12.322l2.761 2.76 7.863-7.85A.793.793 0 1118.1 8.355l-8.42 8.413a.793.793 0 01-1.122 0l-3.326-3.324a.791.791 0 01.56-1.354c.211 0 .413.084.562.233z"
            fill={color}
          ></path>
        </svg>
        </div>
        <form action="">
        <h1>ADD PAYMENT METHOD</h1>
        <hr />
        <h2>Card Number</h2>
        <input
          type="text"
          placeholder="Card Number"
          id="0"
          value={inp[0]}
          onChange={changeHandler}
        />
        <h2>Expiry Date</h2>
        <input
          type="text"
          placeholder="MM/YY"
          id="1"
          value={inp[1]}
          onChange={changeHandler}
        />
        <h2>CVV</h2>
        <input
          type="text"
          placeholder="CVV"
          id="2"
          value={inp[2]}
          onChange={changeHandler}
        />
        <h2>Name on Card</h2>
        <input
          type="text"
          placeholder="Name on Card"
          id="3"
          value={inp[3]}
          onChange={changeHandler}
        />
        <button onClick={handleClick}>Place Order</button>
      </form>
        </section>
    )
}
export default Payment;