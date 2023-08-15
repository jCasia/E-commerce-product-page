import { FC } from 'react';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import SideBar from './components/SideBar';

const App: FC = () => {
  return (
    <>
      {/* may need to use portal for the lightbox carousel */}
      <Header />
      <SideBar />
      <main>
        <ProductImages />
        <ProductInfo />
      </main>
    </>
  );
};

export default App;
