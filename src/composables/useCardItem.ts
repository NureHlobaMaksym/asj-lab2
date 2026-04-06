export const useCardItem = (
  emit: (event: 'toggle', id: string) => void,
  id: string,
) => {
  const onToggle = () => emit('toggle', id);

  return {
    onToggle,
  };
};
