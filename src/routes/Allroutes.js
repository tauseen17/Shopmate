import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../Pages";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
