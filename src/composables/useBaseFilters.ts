export const useBaseFilters = (
  emit: (event: 'update:modelValue', value: string) => void,
) => {
  const onSelect = (value: string) => {
    emit('update:modelValue', value);
  };

  return {
    onSelect,
  };
};
