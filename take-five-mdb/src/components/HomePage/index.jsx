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

          <Grid templateColumns="repeat(4, 1fr)" gap={4} mt="4">
            {/* Generate 4 Box components */}
            {[...Array(4)].map((_, index) => (
              <GridItem key={index}>
                <Box bg="gray.200" p={4}>
                  <MovieQuickInfo />
                </Box>
              </GridItem>
            ))}
          </Grid>

        <CategorySection />
        <CategorySection />
        <CategorySection />
      </Box>
    </>
  );
};
