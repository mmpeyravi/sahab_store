import React from 'react';

interface FilterProps {
    onFilter: (criteria: any) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // اعمال فیلترها
        onFilter({});
    };

    return (
        <div>
            <input type="text" placeholder="جستجو..." onChange={handleFilterChange} />
            {/* فیلترهای دیگر */}
        </div>
    );
};

export default Filter;
