<script>
  import { fetchMovies } from "../api.js";
  import { onMount } from "svelte";

  import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config.js";

  //Components
  import Hero from "../components/Hero.svelte";
  import Search from "../components/Search.svelte";
  import Grid from "../components/Grid.svelte";
  import Thumb from "../components/Thumb.svelte";
  import LoadMoreButton from "../components/LoadMoreButton.svelte";
  import Spinner from "../components/Spinner.svelte";

  let movie = { movies: [] };
  let isLoading;
  let searchTerm = "";
  let error;

  const handleFetchMovies = async (loadMore, searchTerm) => {
    try {
      isLoading = true;
      error = false;
      movie = await fetchMovies(movie, loadMore, searchTerm);
      console.log("movie:", movie);
    } catch (error) {
      error = true;
    }
  };

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

<Search />
<Grid />
<Thumb />
<LoadMoreButton />
<Spinner />

<style>
</style>
