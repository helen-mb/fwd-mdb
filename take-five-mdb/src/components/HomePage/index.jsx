// React Imports
import { useEffect, useState } from 'react';
// Chakra UI Imports
import { Box, Text, Container, Grid, GridItem } from '@chakra-ui/react';
// Components
import { BannerCarousel } from './BannerCarousel';
import { CategorySection } from './CategorySection';
import {MovieQuickInfo} from '../MovieQuickInfo';

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Home | Take Five';
  }, []);
  


  return (
    <>
      <BannerCarousel />
      <Text>HOME PAGE</Text>
      <Box>
        {/* Title */}
        {/* Jump Links */}

        <CategorySection />
        <CategorySection />
        <CategorySection />
        <CategorySection />
      </Box>
    </>
  );
};
