import type { PhotoImage } from './photo-image.interface';

export interface PhotoCardView extends PhotoImage {
  isFavorite: boolean;
}
