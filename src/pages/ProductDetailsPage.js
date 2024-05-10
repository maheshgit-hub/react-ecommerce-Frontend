import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetails from '../features/product-list/components/ProductDetails'
function ProductDetailPage() {
    return (
        <div >
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar></div>
    )
}

export default ProductDetailPage