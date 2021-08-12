<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { getMovieDetail } from "../api.js";
  //Components
  import Navigation from "../components/Navigation.svelte";
  import MovieInfo from "../components/MovieInfo.svelte";
  import MovieInfoBar from "../components/MovieInfoBar.svelte";
  import Grid from "../components/Grid.svelte";
  import Actor from "../components/Actor.svelte";
  import Spinner from "../components/Spinner.svelte";

  export let params;
  let error;
  let isLoading;
  let movie;

  const handleGetMovieDetails = async () => {
    try {
      isLoading = true;
      error = false;
      movie = await getMovieDetail(params.id);
    } catch (error) {
      error = true;
    }
    isLoading = false;
  };

  onMount((async) => {
    const localMovie = window.localStorage.getItem(params.id)
    if (localMovie) {
      movie = JSON.parse(localMovie);
    } else {
      handleGetMovieDetails();
    }
  });

  $:{
    if (movie) {
      window.localStorage.setItem(params.id,JSON.stringify(movie));
    }
  }
</script>

{#if error}
  <p>Something Went Wrong...</p>
{:else if movie}
  <div transition:fade>
    <Navigation movie={movie.original_title} />
    <MovieInfo {movie} />
    <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
    />
    <Grid heading="Actor">
      {#each movie.actors as actor}
        <Actor {actor} />
      {/each}
    </Grid>
  </div>
{/if}

{#if isLoading}
  <Spinner />
{/if}

<style>
</style>
