import Title from '@components/ui/Title';
import {useState} from 'react';
import ShowCaseCard from '../components/ui/ShowCaseCard';

export default function Collection() {
  const [selectedFilter, setSelectedFilter] = useState({
    category: [],
    type: [],
  });

  const filterHandler = (filterName, newFilters) => {
    setSelectedFilter((prev) => ({
      ...prev,
      [filterName]: newFilters,
    }));
  };

  const sortOptions = [
    {
      label: 'Relevant',
      value: 'Relevant',
    },
    {
      label: 'Low to High',
      value: 'low-to-high',
    },
    {
      label: 'High to Low',
      value: 'high-to-low',
    },
  ];

  const categoryFilter = [
    {
      label: 'Men',
      value: 'men',
    },
    {
      label: 'Kids',
      value: 'kids',
    },
    {
      label: 'Women',
      value: 'women',
    },
  ];

  const typeFilter = [
    {
      label: 'Topwear',
      value: 'topwear',
    },
    {
      label: 'Bottomwear',
      value: 'bottomwear',
    },
    {
      label: 'Winterwear',
      value: 'winterwear',
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="min-w-60">
          <h3 className="uppercase mb-4 md:mb-6">Filters</h3>
          <Filter
            name="category"
            title="Category"
            items={categoryFilter}
            onFilterChange={filterHandler}
          />
          <Filter
            title="Type"
            name="type"
            items={typeFilter}
            onFilterChange={filterHandler}
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap justify-between gap-1 mb-5">
            <Title
              className="text-xl  py-0"
              title="All collections"
              position="left"
              type="h1"
            />
            <select
              name="sort"
              id="sort"
              className="border-2 border-gray-300 text-sm px-2 outline-none"
            >
              {sortOptions.map(({label, value}) => (
                <option key={value} value={value}>
                  Sort by: {label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            <ShowCaseCard
              title="Kid Tapered Slim Fit Trouser"
              price={38}
              img={
                'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
              }
            />
            <ShowCaseCard
              title="Kid Tapered Slim Fit Trouser"
              price={38}
              img={
                'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
              }
            />
            <ShowCaseCard
              title="Kid Tapered Slim Fit Trouser"
              price={38}
              img={
                'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
              }
            />
            <ShowCaseCard
              title="Kid Tapered Slim Fit Trouser"
              price={38}
              img={
                'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
              }
            />
            <ShowCaseCard
              title="Kid Tapered Slim Fit Trouser"
              price={38}
              img={
                'https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Filter({items, title, name, onFilterChange, defaultSelected = []}) {
  const [selected, setSelected] = useState(defaultSelected);

  const handleChange = (e) => {
    const {value, checked} = e.target;
    let updated;

    updated = checked
      ? [...selected, value]
      : selected.filter((v) => v !== value);

    setSelected(updated);
    onFilterChange?.(name, updated);
  };

  return (
    <div className="p-4 border border-gray-300 mb-4">
      <h4 className="mb-3 text-sm font-medium  uppercase">{title}</h4>
      <div className="flex flex-col">
        {items?.map(({label, value}, ind) => (
          <label key={label + ind} className="flex gap-3 mb-1">
            <input
              type="checkbox"
              value={value}
              checked={selected.includes(value)}
              onChange={handleChange}
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
}
