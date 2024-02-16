import { Box } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';

export const HomePage = () => {
  // Define the categories array
  const categories = ["popular", "top_rated", "upcoming", "now_playing"];

  return (
    <Box>
      {/* Pass the categories prop to each CategorySection component */}
      <CategorySection categories={categories} />
    </Box>
  );
};
