import { useState } from "react";
import "./sb.css";

export default function Sidebar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="sidebar1 close1">
      <ul className="nav-links">
        <li>
          <a href="/admin/dashboard">
            <i className="fa fa-tachometer"></i> Dashboard
          </a>
        </li>
        <hr />
        <li className={isProductsOpen ? "active open" : "active"}>
          <div className="iocn-link" onClick={() => setIsProductsOpen(!isProductsOpen)}>
            <a href="#">
              <i className="fa fa-list-alt"></i> Products

            <i className={`fa ${isProductsOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </a>
          </div>
        </li>
        {isProductsOpen && (
          <ul className="sub-menu">
            <li>
              <a href="/admin/products">
                <i className="fa fa-product-hunt"></i> All
              </a>
            </li>
            <li>
              <a href="/admin/products/create">
                <i className="fa fa-plus-circle"></i> Create
              </a>
            </li>
          </ul>
        )}
        <hr />
        <li>
          <a href="/admin/orders">
            <i className="fa fa-shopping-cart"></i> Orders
          </a>
        </li>
        <hr />
        <li>
          <a href="/admin/users">
            <i className="fa fa-users"></i> Users
          </a>
        </li>
        <hr />
        <li>
          <a href="/admin/reviews">
            <i className="fa fa-star-o"></i> Review
          </a>
        </li>
        <hr />
      </ul>
    </div>
  );
}
