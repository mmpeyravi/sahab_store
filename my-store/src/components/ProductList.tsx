import React from 'react';
import {Product} from '../types';

interface ProductListProps {
    products: Product[];
    onSelect: (product: Product) => void;
}

function openPopUpReadOnly() {

}

function openPopUpEdit() {

}

const ProductList: React.FC<ProductListProps> = ({products, onSelect}) => (
    <div className="product-list">
        {products.map(product => (
            <>
                <div className="product-card">
                    <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <img style={{display: product.image ? 'block' : 'none'}} className="photo" src={product.image}
                             alt="Product Image" height="140" />
                        <img style={{display: !product.image ? 'block' : 'none'}} className="photo"
                             src="../assets/icons/icons8-sandwich-100.png" alt="Product Image" height="140"/>
                        <h3 style={{fontWeight: 'bolder'}}>{product.title}</h3>
                    </div>
                </div>
                {/*<div className="bottom-part">*/}
                {/*    <h3 style={{flex: 2, fontWeight: 'bold', float: 'left', textAlign: 'left'}}>${product.price}</h3>*/}
                {/*    <img className="button" src="../assets/icons/icons8-eye-100.png" width="20" alt="eye"*/}
                {/*         onClick={openPopUpReadOnly}/>*/}
                {/*    <img className="button" src="../assets/icons/icons8-settings-100.png" width="20" alt="settings"*/}
                {/*         onClick={openPopUpEdit}/>*/}
                {/*</div>*/}
            </>

// <div className="product-card" key={product.title} onClick={() => onSelect(product)}>
//
//     <h3>{product.title}</h3>
//     <p>{product.price}</p>
// </div>
))
}
</div>
)
;

export default ProductList;
