export function getUniqueMovieList(movieData){
   return  Object.keys(movieData).reduce((acc, dataKey) => {
        movieData[dataKey].forEach((movie) => {
        if (
            !acc.some((row) => row.id === movie.id) // Check if movie already exists in the accummulator to ensure we get a unique list
        ) {
            acc.push(movie);
        }
        });
        return acc;
    }, []);
}