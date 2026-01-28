import { useState } from "react";
import '../pages/pages.css' ;

const DROPDOWNS = [
  {
    name: "country",
    label: "Country",
    items: [
      { value: "usa", label: "USA" },
      { value: "china", label: "China" },
      { value: "japan", label: "Japan" },
      { value: "germany", label: "Germany" },
      { value: "uk", label: "United Kingdom" },
      { value: "india", label: "India" },
      { value: "france", label: "France" },
      { value: "italy", label: "Italy" },
      { value: "canada", label: "Canada" },
      { value: "brazil", label: "Brazil" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    items: [
      { value: "moetchandon", label: "Moët & Chandon" },
      { value: "domperignon", label: "Dom Pérignon" },
      { value: "veuveclicquot", label: "Veuve Clicquot" },
      { value: "crystalroederer", label: "Louis Roederer Cristal" },
      { value: "kruger", label: "Krug" },
      { value: "bollinger", label: "Bollinger" },
      { value: "taittinger", label: "Taittinger" },
      { value: "perrierjouet", label: "Perrier-Jouët" },
      { value: "lafite", label: "Château Lafite Rothschild" },
      { value: "latour", label: "Château Latour" },
      { value: "margaux", label: "Château Margaux" },
      { value: "petrus", label: "Château Pétrus" },
      { value: "romanee", label: "Domaine de la Romanée-Conti" },
    ],
  },
  {
    name: "abv",
    label: "ABV",
    items: [
      { value: "0-20", label: "0-20%" },
      { value: "20-40", label: "20-40%" },
      { value: "40-99", label: "40%+" },
    ],
  },
];

export default function FiltersForm() {
  const [selected, setSelected] = useState({}); // { country: [], brand: [], abv: [] }
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState("");

  const toggleItem = (dropdownName, value) => {
    setSelected((prev) => {
      const prevValues = prev[dropdownName] || [];
      if (prevValues.includes(value)) {
        return {
          ...prev,
          [dropdownName]: prevValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [dropdownName]: [...prevValues, value],
        };
      }
    });
  };

  return (
    <div className="docfilter">
      <form className="max-w-6xl mx-auto docform">
        {/* Filters */}
        <div className="flex flex-wrap items-start gap-2 mb-4">
          {DROPDOWNS.map((dropdown) => {
            const selectedItems = selected[dropdown.name] || [];
            const filteredItems = dropdown.items.filter((item) =>
              item.label.toLowerCase().includes(search.toLowerCase())
            );
            const selectedLabel =
              selectedItems.length === 0
                ? dropdown.label
                : `${dropdown.label}: ${selectedItems.length}`;

            return (
              <div key={dropdown.name} className="relative w-full md:w-auto">
                {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === dropdown.name ? null : dropdown.name
                    )
                  }
                  className="inline-flex justify-between w-full bg-white rounded md:w-48 px-2 py-2 text-base text-stone-500 bg-gray-50 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500"
                >
                  <span className="truncate mx-2">{selectedLabel}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 
                      1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 
                      010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {openDropdown === dropdown.name && (
                  <div 
                  className="absolute z-10 w-full mt-2 r
                  ounded bg-white ring-2 ring-rose-200 border 
                  border-rose-500">
                    {/* Search */}
                    <div className="relative">
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="block w-full px-2 py-2 text-gray-800 rounded-t border-b focus:outline-none"
                        type="text"
                        placeholder={`Search for a ${dropdown.label.toLowerCase()}`}
                      />
                      {search && (
                        <button
                          type="button"
                          onClick={() => setSearch("")}
                          className="absolute inset-y-0 right-2 px-2 flex items-center"
                        >
                          <svg
                            className="h-4 w-4 text-gray-400 hover:text-cyan-800"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 
                              011.414 0L10 8.586l4.293-4.293a1 1 0 
                              111.414 1.414L11.414 10l4.293 
                              4.293a1 1 0 01-1.414 
                              1.414L10 11.414l-4.293 
                              4.293a1 1 0 
                              01-1.414-1.414L8.586 
                              10 4.293 5.707a1 1 0 
                              010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Items */}
                    <div className="rounded-b max-h-60 overflow-y-auto docdropdown">
                      {filteredItems.map((item) => (
                        <div
                          key={item.value}
                          onClick={() =>
                            toggleItem(dropdown.name, item.value)
                          }
                          className={` docdropdown block px-4 py-2 text-gray-700 hover:bg-rose-200 hover:text-cyan-500 cursor-pointer bg-white w-full ${
                            selectedItems.includes(item.value)
                              ? "bg-cyan-800"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(item.value)}
                              readOnly
                              className="w-4 h-4 border-gray-300 
                              rounded focus:ring-blue-500 flex-shrink-0"
                            />
                            <span className="truncate">{item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Apply */}
          <button
            type="submit"
            className="w-full md:w-auto inline-flex justify-center font-medium border border-rose-700 bg-rose-700 rounded px-8 py-2 text-base text-white hover:bg-rose-800"
          >
            Apply Filters
          </button>
        </div>

        {/* Selected summary */}
        <div className="mb-2 flex flex-wrap gap-2 absolute">
          {DROPDOWNS.map((dropdown) =>
            (selected[dropdown.name] || []).map((value) => {
              const item = dropdown.items.find((i) => i.value === value);
              return (
                <span
                  key={value}
                  className="inline-flex items-center px-3 py-1 rounded-full text-base bg-rose-100 text-rose-800"
                >
                  {item?.label}
                  <button
                    type="button"
                    onClick={() => toggleItem(dropdown.name, value)}
                    className="ml-2 inline-flex items-center p-0.5 hover:bg-blue-200 rounded-full"
                  >
                    <svg
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 
                        011.414 0L10 8.586l4.293-4.293a1 1 
                        0 111.414 1.414L11.414 10l4.293 
                        4.293a1 1 0 01-1.414 
                        1.414L10 11.414l-4.293 
                        4.293a1 1 0 01-1.414-1.414L8.586 
                        10 4.293 5.707a1 1 0 
                        010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              );
            })
          )}
        </div>
      </form>
    </div>
  );
}
