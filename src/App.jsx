import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="px-15 py-10">
        <h1 className="text-xl py-8  mb-6 text-[#000000]">Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default App;