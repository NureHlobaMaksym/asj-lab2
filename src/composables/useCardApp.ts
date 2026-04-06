import { computed, onMounted, ref } from 'vue';
import { FilterMode } from '../enums/filter-mode.enum';
import type { PhotoImage } from '../interfaces/photo-image.interface';

export const useCardApp = () => {
  const images = ref<PhotoImage[]>([]);
  const favorites = ref<string[]>([]);
  const searchQuery = ref('');
  const activeFilter = ref<FilterMode>(FilterMode.ALL);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const setFilter = (value: string) => {
    if (value === FilterMode.FAVORITES) {
      activeFilter.value = FilterMode.FAVORITES;
      return;
    }

    activeFilter.value = FilterMode.ALL;
  };

  const toggleFavorite = (id: string) => {
    favorites.value = favorites.value.includes(id)
        ? favorites.value.filter((item) => item !== id)
        : [...favorites.value, id];
  };

  const loadImages = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=20');

      if (!response.ok) {
        error.value = 'Помилка завантаження: сервер не відповідає';
        return;
      }

      images.value = await response.json();
    } catch {
      error.value = 'Не вдалося завантажити зображення. Перевірте з’єднання';
    } finally {
      isLoading.value = false;
    }
  };

  const visibleCards = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();

    return images.value
        .map((img) => ({
          ...img,
          isFavorite: favorites.value.includes(img.id),
        }))
        .filter((card) => {
          const matchesFilter = activeFilter.value === FilterMode.ALL || card.isFavorite;
          const matchesSearch = !query || card.author.toLowerCase().includes(query);

          return matchesFilter && matchesSearch;
        });
  });

  onMounted(loadImages);

  return {
    activeFilter,
    searchQuery,
    setFilter,
    visibleCards,
    isLoading,
    error,
    loadImages,
    toggleFavorite,
  };
};
