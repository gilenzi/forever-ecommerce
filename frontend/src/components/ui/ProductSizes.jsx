import {useState, useEffect} from 'react';

export default function ProductSizes({
  sizes,
  onSizeChange,
  className,
  defaultSelected = [],
}) {
  const [selectedSizes, setSelectedSizes] = useState(defaultSelected);

  function productSizesHandler(item) {
    setSelectedSizes((prev) =>
      prev.includes(item) ? prev.filter((el) => el !== item) : [...prev, item]
    );
  }

  useEffect(() => {
    onSizeChange?.(selectedSizes);
  }, [selectedSizes, onSizeChange]);

  return (
    <div className={className}>
      {sizes?.map((item) => (
        <button
          key={item}
          onClick={() => productSizesHandler(item)}
          className={`${
            selectedSizes.includes(item) ? 'bg-pink-100' : 'bg-slate-200'
          } px-3 py-1 cursor-pointer`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
