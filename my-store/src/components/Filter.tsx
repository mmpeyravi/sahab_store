import React, {useState} from 'react';
import {Product} from "../types";

interface FilterProps {
    onFilter: (criteria: any) => void;
}


const Filter: React.FC<FilterProps> = ({onFilter}) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sort, setSort] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const handleFilterChange = () => {

        onFilter({category, name, minPrice, maxPrice, sort});
    };


    return (
        <div className="filter">
            <input
                type="text"
                placeholder="جستجو بر اساس نام..."
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    handleFilterChange();
                }}
            />
            <input
                type="text"
                placeholder="دسته‌بندی..."
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    handleFilterChange();
                }}
            />
            <input
                type="number"
                placeholder="حداقل قیمت..."
                value={minPrice}
                onChange={(e) => {
                    setMinPrice(e.target.value);
                    handleFilterChange();
                }}
            />
            <input
                type="number"
                placeholder="حداکثر قیمت..."
                value={maxPrice}
                onChange={(e) => {
                    setMaxPrice(e.target.value);
                    handleFilterChange();
                }}
            />
            <select value={sort} onChange={(e) => {
                setSort(e.target.value);
                handleFilterChange();
            }}>
                <option value="">مرتب‌سازی...</option>
                <option value="asc">مرتب‌سازی بر اساس قیمت: کم به زیاد</option>
                <option value="desc">مرتب‌سازی بر اساس قیمت: زیاد به کم</option>
            </select>
        </div>
    );
};

export default Filter;
