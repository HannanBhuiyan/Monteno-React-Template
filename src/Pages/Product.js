import React from "react";
import { Link } from "react-router-dom";
import products from '../Data'

const Product = () => {
     return(
          <>
               <div className="product_area mt-5">
                   <div className="container">
                         <div className="row">
                              { products.map( (product) => { 
                                   return(
                                        <div className="col-md-3 mb-4" key={product.id}>
                                             <div className="product_item">
                                                  <div className="card">
                                                       <img src={product.image} alt="image" width="100%" height="200px" />
                                                       <div className="card-body">
                                                            <h5 className="card-title">{product.name}</h5>
                                                            <p className="card-text">{product.desc}</p>
                                                            <Link to={`/singleproduct/${product.id}`} className="btn btn-primary">Details</Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   );
                              })}
                              
                         </div>
                    </div>
               </div>
              
          </>
     )
}

export default Product