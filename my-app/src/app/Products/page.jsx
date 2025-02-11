"use client"
import React, { useState, useEffect } from 'react';

export default function Products() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://localhost:3001/product');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-3">
                    {product.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                </h2>
                <p className="text-gray-600 mb-4">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium text-lg">
                        ${product.price}
                    </span>
                </div>
            </div>
        </div>
    );
};

