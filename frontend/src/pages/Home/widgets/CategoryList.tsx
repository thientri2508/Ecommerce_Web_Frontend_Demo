import CardCategory from "./CardCategory"

const CategoryList = () => {
  const categories = new Array(8).fill(null)

  return (
    <div className="w-full py-[51px] rounded-[32px] border-solid border-[1px] mt-8 flex items-center justify-center">
      <ul className="flex flex-wrap justify-center gap-x-20">
        {categories.map((_, index) => (
          <li key={index}><CardCategory /></li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;