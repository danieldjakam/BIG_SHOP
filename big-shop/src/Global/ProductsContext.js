import React, {createContext, useState} from 'react';

import bague from '../assets/products_img/bague.jpg';
import montre from '../assets/products_img/montre.jpg';
import tennis from '../assets/products_img/tennis.jpg';
import vetements_homme from '../assets/products_img/vetements_homme.jpg';
import produits_femme from '../assets/products_img/produits_femme.jpg';
import sacs from '../assets/products_img/sacs.jpg';

import air_pods from '../assets/products_img/air_pods.jpg';
import iphone_air_pods from '../assets/products_img/iphone_air_pods.jpg';
import i_mac from '../assets/products_img/i-mac.jpg';
import mac_book_pro from '../assets/products_img/mac-book-pro.jpg';
import iphone from '../assets/products_img/iphone.jpg';
import samsung_galaxy_s21 from '../assets/products_img/samsung-galaxy-s21.jpg';

export const ProductsContext = createContext();

const ProductscontextProvider = (props) => {
    const [products] = useState([
        {id: 1 , name: "Bague", price: 500, image: bague, status: 'new'},
        {id: 2 , name: "Montre", price: 200, image: montre, status: 'new'},
        {id: 3 , name: "Tennis", price: 100, image: tennis, status: 'hot'},
        {id: 4 , name: "Vêtement pour homme", price: 300, image: vetements_homme, status: 'hot'},
        {id: 5 , name: "Produits de femme", price: 60, image: produits_femme, status: 'hot'},
        {id: 6 , name: "Sac à main", price: 7, image: sacs, status: 'hot'},
        
        {id: 7 , name: "Air Pods", price: 200, image: air_pods, status: 'new'},
        {id: 8 , name: "I-mac", price: 200, image: i_mac, status: 'hot'},
        {id: 9 , name: "Iphone avec air pods", price: 1400, image: iphone_air_pods, status: 'new'},
        {id: 10 , name: "Mac Book Pro", price: 1200, image: iphone, status: 'hot'},
        {id: 11 , name: "Mac Book Pro Air", price: 2000, image: mac_book_pro, status: 'new'},
        {id: 12 , name: "Samsung Galaxy s21", price: 1000, image: samsung_galaxy_s21, status: 'new'},
    ])
    return (
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductscontextProvider;