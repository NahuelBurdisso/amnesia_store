import { useState } from "react";
import {
  CustomSelect,
  CustomDropdown,
  SelectOption,
  DropdownOption,
} from "~/components";
import { Filter } from "lucide-react";

interface ProductFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
}

interface FilterState {
  category?: string;
  size?: string;
  color?: string;
  priceRange?: string;
  brand?: string[];
}

export function ProductFilters({ onFiltersChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({});

  // Sample data for clothing filters
  const categoryOptions: SelectOption[] = [
    { value: "all", label: "Todas las Categorías" },
    { value: "shirts", label: "Camisas" },
    { value: "pants", label: "Pantalones" },
    { value: "dresses", label: "Vestidos" },
    { value: "jackets", label: "Chaquetas" },
    { value: "accessories", label: "Accesorios" },
  ];

  const sizeOptions: SelectOption[] = [
    { value: "all", label: "Todas las Tallas" },
    { value: "xs", label: "XS" },
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
    { value: "xxl", label: "XXL" },
  ];

  const colorOptions: SelectOption[] = [
    { value: "all", label: "Todos los Colores" },
    { value: "black", label: "Negro" },
    { value: "white", label: "Blanco" },
    { value: "gray", label: "Gris" },
    { value: "navy", label: "Azul Marino" },
    { value: "beige", label: "Beige" },
    { value: "brown", label: "Marrón" },
  ];

  const priceRangeOptions: SelectOption[] = [
    { value: "all", label: "Todos los Precios" },
    { value: "0-50", label: "Hasta $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100-200", label: "$100 - $200" },
    { value: "200-500", label: "$200 - $500" },
    { value: "500+", label: "Más de $500" },
  ];

  const brandOptions: DropdownOption[] = [
    {
      value: "amnesia",
      label: "Amnesia",
      selected: filters.brand?.includes("amnesia"),
    },
    {
      value: "premium",
      label: "Premium Line",
      selected: filters.brand?.includes("premium"),
    },
    {
      value: "classic",
      label: "Classic Collection",
      selected: filters.brand?.includes("classic"),
    },
    {
      value: "modern",
      label: "Modern Fit",
      selected: filters.brand?.includes("modern"),
    },
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleBrandChange = (brandValue: string) => {
    const currentBrands = filters.brand || [];
    const newBrands = currentBrands.includes(brandValue)
      ? currentBrands.filter((b) => b !== brandValue)
      : [...currentBrands, brandValue];

    const newFilters = { ...filters, brand: newBrands };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFiltersChange?.({});
  };

  const hasActiveFilters = Object.values(filters).some((value) =>
    Array.isArray(value) ? value.length > 0 : value && value !== "all"
  );

  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4">
          {/* Filter Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <h3 className="font-bodoni text-lg">Filtrar Productos</h3>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700 font-montserrat underline"
              >
                Limpiar Filtros
              </button>
            )}
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <CustomSelect
              options={categoryOptions}
              placeholder="Categoría"
              value={filters.category}
              onValueChange={(value) => handleFilterChange("category", value)}
            />

            <CustomSelect
              options={sizeOptions}
              placeholder="Talla"
              value={filters.size}
              onValueChange={(value) => handleFilterChange("size", value)}
            />

            <CustomSelect
              options={colorOptions}
              placeholder="Color"
              value={filters.color}
              onValueChange={(value) => handleFilterChange("color", value)}
            />

            <CustomSelect
              options={priceRangeOptions}
              placeholder="Precio"
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
            />

            <CustomDropdown
              options={brandOptions}
              trigger={
                <span>
                  Marca{" "}
                  {filters.brand?.length ? `(${filters.brand.length})` : ""}
                </span>
              }
              onValueChange={handleBrandChange}
              multiSelect={true}
              align="end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
