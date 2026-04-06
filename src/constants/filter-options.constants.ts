import { FilterMode } from '../enums/filter-mode.enum';
import type { FilterOption } from '../interfaces/filter-option.interface';

export const filterOptions: FilterOption[] = [
  { label: 'Усі', value: FilterMode.ALL },
  { label: 'Обрані', value: FilterMode.FAVORITES },
];
