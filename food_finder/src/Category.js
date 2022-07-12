import React from 'react';

export default function Category({category}) {
    return (
        <div className="category-item">
            <h3>{category.category}</h3>
        </div>
    );
}