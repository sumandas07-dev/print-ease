import "./ConfirmOrder.css";

import OrderCard from "../../components/OrderCard";
import PriceCard from "../../components/PriceCard";
import AddressCard from "../../components/AddressCard";
import PaymentCard from "../../components/PaymentCard";

import { IoArrowBack } from "react-icons/io5";

function ConfirmOrder() {
  return (
    <div className="container py-4 confirm-page">

      {/* Header */}

      <div className="d-flex align-items-center mb-4">

        <button className="btn back-btn me-3">
          <IoArrowBack />
        </button>

        <h3 className="fw-bold m-0 flex-grow-1 text-center">
          Confirm Order
        </h3>

      </div>

      {/* Order */}

      <OrderCard />

      {/* Price */}

      <div className="mt-4">
        <h4 className="fw-bold mb-3">
          Price Details
        </h4>

        <PriceCard />
      </div>

      {/* Address */}

      <div className="mt-4">

        <h4 className="fw-bold mb-3">
          Delivery Address
        </h4>

        <AddressCard />

      </div>

      {/* Payment */}

      <div className="mt-4">

        <h4 className="fw-bold mb-3">
          Payment Method
        </h4>

        <PaymentCard />

      </div>

      {/* Button */}

      <button className="btn place-order-btn w-100 mt-5">
        Place Order
      </button>

    </div>
  );
}

export default ConfirmOrder;