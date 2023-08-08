import { FC } from 'react';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';

const App: FC = () => {
  return (
    <>
      {/* may need to use portal for the lightbox carousel */}
      <Header />
      <main>
        <ProductImages />
        <ProductInfo />
      </main>
    </>
  );
};

export default App;
