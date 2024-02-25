import { Box } from '@chakra-ui/react';
import { CategorySection } from './CategorySection';
import { BannerCarousel } from './BannerCarousel';

export const HomePage = () => {
  return (
    <Box>
      {/* BannerCarousel */}
      <BannerCarousel />
      <CategorySection />
    </Box>
  );
};
