<script>
  import { fetchMovies } from "../api.js";
  import { onMount } from "svelte";

  import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config.js";

  //Components
  import Hero from "../components/Hero.svelte";
  import Search from "../components/Search.svelte";
  import Grid from "../components/Grid.svelte";
  import Thumb from "../components/Thumb.svelte";
  import LoadMoreButton from "../components/LoadMoreButton.svelte";
  import Spinner from "../components/Spinner.svelte";
  import Header from "../components/Header.svelte";

  let movie = { movies: [] };
  let isLoading;
  let searchTerm = "";
  let error;

  const handleFetchMovies = async (loadMore, searchTerm) => {
    try {
      isLoading = true;
      error = false;
      movie = await fetchMovies(movie, loadMore, searchTerm);
    } catch (error) {
      error = true;
    }
    isLoading = false;
  };

  const handleSearch = (event) => {
    searchTerm = event.detail.searchText;
    movie.movies = [];
    handleFetchMovies(false, searchTerm);
  };

  const handleLoadMore = () => handleFetchMovies(true, searchTerm);

  onMount(async () => {
    handleFetchMovies(false, searchTerm);
  });
</script>

{#if error}
  <p>Something went wrong</p>
{:else if movie.heroImage && !searchTerm}
  <Hero
    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.heroImage.backdrop_path}`}
    title={movie.heroImage.original_title}
    text={movie.heroImage.overview}
  />
{/if}
<Search on:search={handleSearch} />
<Grid heading={searchTerm ? "Search Result" : "Popular"}>
  {#each movie.movies as movie}
    <Thumb
      clickable
      image={movie.poster_path
        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
        : ""}
      movieId={movie.id}
    />
  {/each}
</Grid>

{#if isLoading}
  <Spinner />
{/if}

{#if !isLoading && movie.currentPage < movie.totalPages}
  <LoadMoreButton on:loadMore={handleLoadMore}>Load More</LoadMoreButton>
{/if}

<style>
</style>
