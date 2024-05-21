import React from "react";
import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/component/UserOrders";
function UserOrderPage() {
  return (
    <div>
      <Navbar>
        <h1 className=" mx-auto text-2xl">My Orders</h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
}

export default UserOrderPage;
