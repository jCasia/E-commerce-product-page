import { FC } from 'react';
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import SideBar from './components/SideBar';

const App: FC = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main className='flex flex-col max-w-sm mx-auto stablet:py-5 slaptop:max-w-[1020px] slaptop:flex-row slaptop:py-20 slaptop:mx-6 slaptop:gap-16 laptop:mx-auto   '>
        <ProductImages />
        <ProductInfo />
      </main>
    </>
  );
};

export default App;
