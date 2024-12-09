import React from 'react';
import {Product} from '../types';
import {useNavigate} from 'react-router-dom'

interface ProductListProps {
    products: Product[];
    onSelect: (product: Product) => void;
}

function openPopUpReadOnly() {

}

function openPopUpEdit() {

}

const ProductList: React.FC<ProductListProps> = ({products, onSelect}) => {

    const navigate = useNavigate()

    const handleSelect = (id: number) => {
        navigate(`/product/${id}`)
    };
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id}>
                    <div className="product-card" onClick={() => handleSelect(product.id)}>
                        <div style={{flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <img style={{display: product.image ? 'block' : 'none'}} className="photo"
                                 src={product.image}
                                 alt="Product Image" height="140"/>
                            <h5 style={{fontWeight: 'bolder'}}>{product.title}</h5>
                            <div style={{
                                fontWeight: 'bold',
                                position: 'relative',
                                borderRadius: '40px',
                                padding: '5px',
                                bottom: 0,
                                background: 'yellow',
                            }}>${product.price}</div>
                        </div>
                    </div>
                    <div className="bottom-part">
                        {/*<img className="button" src="../assets/icons/icons8-eye-100.png" width="20" alt="eye"*/}
                        {/*     onClick={openPopUpReadOnly}/>*/}
                        {/*<img className="button" src="../assets/icons/icons8-settings-100.png" width="20" alt="settings"*/}
                        {/*     onClick={openPopUpEdit}/>*/}
                    </div>
                </div>
            ))
            }
        </div>
    )

}

export default ProductList;
