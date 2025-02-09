"use client"
import { useState, useEffect } from 'react';
export default function Products() {
 
        const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://localhost/MDdecore');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const sampleProducts = [
        {
            id: 1,
            name: "Premium Headphones",
            description: "High-quality wireless headphones with noise cancellation",
            price: 199.99,
            image: "/api/placeholder/300/300",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Feature-rich smartwatch with health tracking",
            price: 299.99,
            image: "/api/placeholder/300/300",
            category: "Electronics"
        },
       
    ];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-600">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
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
                                    <button 
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        onClick={() => alert(`Added ${product.name} to cart!`)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}