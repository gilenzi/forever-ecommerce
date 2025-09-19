import { useState } from "react";


export default function AddItems() {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const productCategoryItems = ["Men","Women","Kids"];
  const subCategoryItems = ["Topwear","Bottomwear","Winterwear"];
  const productSizes = ["S","M","L", "XL", "XXL"];

  const labelClasses = "text-sm font-medium text-gray-700 mb-2 block"
  const inputClasses = "rounded-md w-full px-3 py-2 border border-gray-300 outline-none";

  function onAddItem(e){
    e.preventDefault();
  }

  function productSizesHandler(item){
    setSelectedSizes((prev) => {
      if(prev.includes(item))
        return prev.filter(el => el !== item);

      return [...prev,item];
    })
  }

  return <div>
    <form onSubmit={onAddItem}>
    <p className="mb-2">Upload images</p>
    <div className="mb-4">
      <label className={labelClasses} htmlFor="name">Product Name</label>
      <input className={inputClasses} type="text" id="name" placeholder="Type here" />
    </div>
    <div className="mb-4">
      <label className={labelClasses} htmlFor="description">Product Description</label>
      <textarea className={inputClasses} name="description" id="description" rows={5} placeholder="Write content here"></textarea>
    </div>

    <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:gap-8 mb-4">
          <div className="flex flex-col">
            <label htmlFor="category" className={labelClasses}>Product Category</label>
            <select name="product-category" id="product-category" className={inputClasses}>
              {productCategoryItems.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="sub-category" className={labelClasses}>Sub Category</label>
            <select name="sub-category" id="sub-category" className={inputClasses}>
              {subCategoryItems.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col max-w-[120px]">
            <label htmlFor="price" className={labelClasses}>Product Price</label>
            <input className={inputClasses} type="number" id="price" min={0}/>
          </div>
    </div>

    <div className="mt-3">
      <label className="text-sm font-medium text-gray-700 mb-2 block">Product Sizes</label>
      <div className="flex gap-3">
        {productSizes.map(item => (
          <button key={item} onClick={() => productSizesHandler(item)} className={`${selectedSizes.includes(item)? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>
            {item}
          </button>
        ))}
      </div>
    </div>
    <input type="hidden" name="sizes" value={selectedSizes.join(',')} />

    <div class="flex gap-2 mt-4">
      <input type="checkbox" id="bestseller" />
      <label class="cursor-pointer" for="bestseller">Add to bestseller</label>
    </div>

    <button type="submit" class="w-28 py-3 mt-4 bg-black text-white">ADD</button>

    </form>
  </div>;
}
