import React, {createContext, useState} from 'react';
import one from '../assets/products_img/bigfod2.jpg';
import two from '../assets/products_img/bague.jpg';
import three from '../assets/products_img/montre.jpg';
import four from '../assets/products_img/bigshop.jpg';
import five from '../assets/products_img/tennis.jpg';
import six from '../assets/products_img/vetements_homme.jpg';
import seven from '../assets/products_img/daniel_djakam_game.jpg';
import height from '../assets/products_img/iphone_4s_sreenshot.jpg';
import nine from '../assets/products_img/other.jpg';
import ten from '../assets/products_img/kakashi.jpg'
import eleven from '../assets/products_img/produits_femme.jpg';
import twelve from '../assets/products_img/sacs.jpg';

export const ProductsContext = createContext();

const ProductscontextProvider = (props) => {
    const [products] = useState([
        {id: 1 , name: "Première icône Big food", price: 40, image: one, status: 'hot'},
        {id: 2 , name: "Bague", price: 500, image: two, status: 'new'},
        {id: 3 , name: "Montre", price: 200, image: three, status: 'new'},
        {id: 4 , name: "Première icône Big Shop", price: 90, image: four, status: 'hot'},
        {id: 5 , name: "Tennis", price: 100, image: five, status: 'hot'},
        {id: 6 , name: "Vêtement pour homme", price: 300, image: six, status: 'new'},
        {id: 7 , name: "Jeu Daniel Djakam", price: 500, image: seven, status: 'new'},
        {id: 8 , name: "Iphone 4s Screenshot", price: 30, image: height, status: 'hot'},
        {id: 9 , name: "Autre icône de big shop", price: 400, image: nine, status: 'new'},
        {id: 10 , name: "Daniel dans le modele de kakashi", price: 100, image: ten, status: 'hot'},
        {id: 11 , name: "Produits de femme", price: 60, image: eleven, status: 'hot'},
        {id: 12 , name: "Sac à main", price: 45, image: twelve, status: 'new'},
    ])
    return (
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductscontextProvider;