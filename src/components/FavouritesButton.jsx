import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'; // Import the AddIcon
import { useFavouritesList } from '../hooks/useFavouritesList';

// Create a new component called FavouritesButton
export const FavouritesButton = ({ movieId }) => {
  const favouritesList = useFavouritesList();
  const isFavourited = favouritesList.favourites.some((id) => id === movieId);
  return (
    <IconButton
      aria-label="Add to Favorites"
      icon={<AddIcon />} // Use the AddIcon as the icon
      onClick={(e) => {
        e.preventDefault();
        favouritesList.addToFavourites(movieId);
      }}
      backgroundColor={isFavourited ? 'red.500' : 'blue.500'}
      color="white"
      rounded="md"
      fontWeight="bold"
      _focus={{ outline: 'none' }}
      // _hover={{ backgroundColor: isFavourited ? 'red.600' : 'blue.600' }}
    ></IconButton>
  );
};
