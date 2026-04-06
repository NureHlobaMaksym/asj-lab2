import type { FilterOption } from './filter-option.interface';

export interface BaseFiltersProperties {
  options: FilterOption[];
  modelValue: string;
}
