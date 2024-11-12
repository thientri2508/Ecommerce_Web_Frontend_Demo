import { ItemCategory } from "./ItemCategory";
import ListCategory from "./ListCategory";
import brand1 from '../../assets/logo/brand1.png';
import brand2 from '../../assets/logo/brand2.png';
import brand3 from '../../assets/logo/brand3.png';
import brand4 from '../../assets/logo/brand4.png';
import brand5 from '../../assets/logo/brand5.png';
import brand6 from '../../assets/logo/brand6.png';
import brand7 from '../../assets/logo/brand7.png';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

export const SubHeader = () => (
  <div className="max-w-[1400px] m-auto flex pt-[14px] px-3 gap-24">
    <ul className="mt-[4px]">
      {[...Array(6)].map((_, index) => <li key={index}><ItemCategory /></li>)}
    </ul>
    <div className="w-[760px] flex flex-wrap gap-20 mt-8">
      {[...Array(3)].map((_, index) => <ListCategory key={index} />)}
    </div>
    <div className="mt-8">
      <ul className="flex flex-col gap-5 items-center">
        {brands.map((brand, index) => (
          <li key={index}><img src={brand} alt={`brand-${index + 1}`} /></li>
        ))}
      </ul>
    </div>
  </div>
);