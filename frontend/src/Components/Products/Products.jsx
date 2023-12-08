import { Button } from 'antd';
import React, { useState } from 'react';
import ProductForm from './ProductForm';

const Products = () => {
    const [showProductForm, setShowProductForm] = useState(false);

  return (
    <div>
        <div className='flex justify-end'>
            <Button className=' h-10 border border-cyan-500' onClick={() => setShowProductForm(true)}>
                Add Product
            </Button>
        </div>

        { showProductForm && <ProductForm showProductForm={showProductForm} setShowProductForm={setShowProductForm}/>}
    </div>
  )
}

export default Products