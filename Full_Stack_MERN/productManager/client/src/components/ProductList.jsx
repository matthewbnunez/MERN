import React from 'react'
import {Link} from 'react-router-dom';
    
const ProductList = (props) => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map( (eachProduct, i) =>
                <p key={i}><Link to={`api/product/${eachProduct._id}`}>{eachProduct.title}</Link></p>
            )}
        </div>
    )
}
    
export default ProductList;

