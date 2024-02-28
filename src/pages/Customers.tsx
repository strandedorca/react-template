import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomerHeader from "../components/CustomerHeader";
import avatar from "../assets/avatar-default.svg"
import Card from "../components/Card";
import { useState } from "react";

interface CustomersProps {

}

const Customers = () => {
  const [cardView, setCardView] = useState(true);

  return (
    <div className="">
      <CustomerHeader />

      {/* List of customers */}

      <Card avatar={avatar} customerName="Mary" stateName="hallo" city="Phoenix" />
    </div>
  )
}

export default Customers;