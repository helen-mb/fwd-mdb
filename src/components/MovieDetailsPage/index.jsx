//react import
import { useEffect, useState } from 'react';
//chakra imports
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  Flex,
  Image,
  HStack,
  Grid,
} from '@chakra-ui/react';
//components
import { useParams } from 'react-router-dom';
import { StaticBanner } from '../StaticBanner';
import { FavouritesButton } from '../FavouritesButton';
import { StarIcon } from '@chakra-ui/icons';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const runtime = movieDetails ? movieDetails.runtime : null;

  // Define formatRuntime function
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h${minutes}m`;
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, certificationsResponse] = await Promise.all([
          //promise.all allows us to make multiple requests at the same time and wait for all of them to resolve and then continue
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US&api_key=${
              import.meta.env.VITE_REACT_APP_TMDB_API_KEY
            }`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${
              import.meta.env.VITE_REACT_APP_TMDB_API_KEY
            }`
          ),
        ]);
        const [movieData, certificationsData] = await Promise.all([
          movieResponse.json(),
          certificationsResponse.json(),
        ]);

        // Filter certification data for the US
        const usCertificationData = certificationsData.results.find(
          (cert) => cert.iso_3166_1 === 'US'
        );
        const usCertification = usCertificationData
          ? usCertificationData.release_dates[0].certification
          : 'N/A';

        // Combine movie details with certifications data
        const movieDetailsWithCertifications = {
          ...movieData,
          certification: usCertification,
        };

        setMovieDetails(movieDetailsWithCertifications);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <Text>Loading...</Text>;
  }

  const { genres } = movieDetails; // Destructure genres here

  const castCredits = ({ id, character, name }) => (
    <Flex w={'100%'} key={character + id}>
      <Text w={'50%'}>{character} </Text>
      <Text fontWeight={'bold'} w={'50%'}>
        {name}
      </Text>
    </Flex>
  );

  const crewCredits = ({ id, job, name }) => (
    <Flex w={'100%'} key={job + id}>
      <Text w={'50%'}>{job}</Text>
      <Text fontWeight={'bold'} w={'50%'}>
        {name}
      </Text>
    </Flex>
  );

  return (
    <Box bg="brand.900" fontFamily="assistant.normal" color="brand.50">
      <StaticBanner movieId={id}>
        {/* StaticBanner content */}
        <Box>
          <Box position="absolute" left="10%" top="30%">
            <Heading fontFamily="assistant.normal">
              {movieDetails.title}
            </Heading>

            <Box>
              {/* certification */}
              <HStack>
                <Box border={'solid 1px'} p={'0 0.5rem'}>
                  <Text>{movieDetails.certification || 'N/A'}</Text>
                </Box>
                {/* Year */}
                <Box ml={2}>
                  <Text>
                    {movieDetails.release_date &&
                      movieDetails.release_date.substring(0, 4)}
                  </Text>
                </Box>
                {/* Runtime */}
                <Box ml={2}>
                  <Text>{runtime ? formatRuntime(runtime) : 'N/A'}</Text>
                </Box>
              </HStack>

              <Box>
                {' '}
                {genres && Array.isArray(genres)
                  ? genres
                      .slice(0, 4)
                      .map((genre) => genre.name)
                      .join(', ')
                  : 'N/A'}
              </Box>

              <HStack>
                <FavouritesButton movieId={movieDetails.id} />
                <HStack ml={2}>
                  <StarIcon />
                  <Text>{movieDetails.vote_average.toFixed(1)}</Text>
                </HStack>
              </HStack>
            </Box>
          </Box>
        </Box>
      </StaticBanner>

      <Box p={8} fontFamily="assistant.normal">
        {/* Add a parent element */}
        <Box border={'solid 1px'} pb="5rem">
          <Flex position={'relative'}>
            <Box w={'40%'}>
              <Image display={["none", "none", "block", "block", "block", "block"]}
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                position={'absolute'}
                top={-100}
                left={["3", "3", "3", "3", "5", "6"]}
                w={'20%'}
              />
            </Box>
            <Box>
              <Box position="relative" 
              maxW={["70%", "100%", "80%", "80%", "80%", "70%"]} 
              left={["0", "0", "5rem", "5rem", "5rem", "1rem"]} 
              py="5" px="3">
                <Text fontFamily={'assistant.bold'} fontSize={["md", "md", "lg", "lg", "xl", "xl"]}>{movieDetails.tagline}</Text>
                <Text>Synopsis: {movieDetails.overview}</Text>
              </Box>
              
              <Box mt={["10", "10", "10","10rem","12rem"]}>
                <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)", "1fr", "1fr", "1fr"]} gap={["2", "2", "10","10","10"]}>
                  {/* Cast Credits */}
                  <Box>
                    <Heading mb="2">Cast Credits</Heading>
                    <UnorderedList>
                      {movieDetails.credits.cast.map(castCredits)}
                    </UnorderedList>
                  </Box>
                  {/* Crew Credits */}
                  <Box>
                    <Heading mb="2">Crew Credits</Heading>
                    <UnorderedList>
                      {movieDetails.credits.crew.map(crewCredits)}
                    </UnorderedList>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* Close the parent element */}
    </Box>
  );
};

export default MovieDetailsPage;
