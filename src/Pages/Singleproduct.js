import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../Data";

const Singleproduct = () => {
     const {product_id} = useParams()
     const product = products.find((priduct) => priduct.id === product_id)

     const {name, price, quantity, image, desc} = product

     return(  
          
          <>
               <div className="container mt-5">
                    <div className="row mb-5">
                         <div className="col-md-8 m-auto mb-2">
                              <div className="product_item">
                                   <div className="card">
                                        <img src={image} alt="image" width="100%" height="300px" />
                                        <div className="card-body">
                                             <h5 className="card-title">{name}</h5>
                                             <p className="card-text">{desc}</p>
                                             <p>Price: {price}</p>
                                             <p>Qty: {quantity}</p> 
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="buttonsection text-center mt-3">
                         <button className="btn btn-success" width="50px">
                              <Link to="/product">Back Product Page</Link>
                         </button>
                         </div>
                    </div>
               </div>
               
          </>
     )
}

export default Singleproduct

