export const useBaseTextArea = (
  emit: (event: 'update:modelValue', value: string) => void,
) => {
  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };

  return {
    onInput,
  };
};
