import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img_link, title, details,duration, price} = props.product;
    return (
        <div className="product jumbotron">
            <div>
                <img className="image" src={img_link} alt=""></img>
            </div>
            <div>
                <h2 className="product-name">{title}</h2>
                <h4 className="mt-4">{details}</h4>
                <p className="mt-3">Duration: {duration}</p>
                <h3>${price}</h3>
                <button 
                    className="main-button mt-4 btn btn-success"
                    onClick={() => props.handleAddProduct(props.product)}
                    > <FontAwesomeIcon icon={faPlus} /> Enroll Now
                    </button>
            </div>  
        </div>
    );
};

export default Product;