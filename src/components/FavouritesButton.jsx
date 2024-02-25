import { IconButton, useToast } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'; // Import the AddIcon
import { useFavouritesList } from '../hooks/useFavouritesList';
import { useContext } from 'react';
import { DataContext } from '../Contexts';
import { getUniqueMovieList } from '../utils';

// Create a new component called FavouritesButton
export const FavouritesButton = ({ movieId }) => {
  const toast = useToast();
  const movieData = useContext(DataContext);
  const favouritesList = useFavouritesList();
  const isFavourited = favouritesList.favourites.some((id) => id === movieId);
  return (
    <IconButton
      size="xs"
      variant="outline"
      isRound
      aria-label="Add to Favorites"
      icon={isFavourited ? <DeleteIcon /> : <AddIcon />} // Use the AddIcon as the icon
      onClick={(e) => {
        e.preventDefault();
        const currMovie = getUniqueMovieList(movieData).find(
          (x) => x.id === movieId
        );
        favouritesList.addToFavourites(movieId);
        if (
          !favouritesList.favourites.some((favourite) => favourite === movieId)
        ) {
          toast({
            title: `Added '${currMovie.title}' to your list!`,
            status: 'success',
            duration: 1000,
            isClosable: true,
            position: 'bottom-right',
          });
        } else {
          toast({
            title: `Removed '${currMovie.title}' fom your list`,
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right',
          });
        }
      }}
      color="white"
      fontWeight="bold"
      _focus={{ outline: 'none' }}
      _hover={{ backgroundColor: 'brand.700' }}
    ></IconButton>
  );
};
