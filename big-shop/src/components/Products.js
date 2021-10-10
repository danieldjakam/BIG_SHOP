import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../Global/ProductsContext';
import Banner from './Banner';

const Products = () => {
    const {products} = useContext(ProductsContext)
    console.log(products)
    return (
        <div className="container">
          <Banner/>
            <div className="products">
                {products.map((product) => (
                        <div className="product" key={product.id}>
                            <div className="product-image">
                                <img width='300px' height='300px' src={product.image} alt={product.name} title={product.name}/>
                            </div>
                            <div className="product-detail">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-price">
                                    ${product.price}.00
                                </div>
                            </div>
                            <div className="add-to-cart">
                                Ajouter au panier
                            </div>
                            {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                            {product.status === 'new' ? <div className="new">New</div> : ''}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;