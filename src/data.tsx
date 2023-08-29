import img1 from './images/image-product-1.jpg';
import img2 from './images/image-product-2.jpg';
import img3 from './images/image-product-3.jpg';
import img4 from './images/image-product-4.jpg';

import imgT1 from './images/image-product-1-thumbnail.jpg';
import imgT2 from './images/image-product-2-thumbnail.jpg';
import imgT3 from './images/image-product-3-thumbnail.jpg';
import imgT4 from './images/image-product-4-thumbnail.jpg';

const imagesThumbnail: string[] = [imgT1, imgT2, imgT3, imgT4];
const images: string[] = [img1, img2, img3, img4];
const links: string[] = ['Collections', 'Mens', 'Women', 'About', 'Contact'];

interface DataInterface {
  id: string;
  name: string;
  images: Array<string>;
  imagesThumbnail: Array<string>;
  description: string;
  price: number;
  discount: number;
}

const data: Array<DataInterface> = [
  {
    id: 'recZn',
    name: 'Fall Limited Edition Sneakers',
    images: images,
    imagesThumbnail: imagesThumbnail,
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
  },
];

export { links, imagesThumbnail, images, data };
