<script>
  import { onMount } from "svelte";
  import {fade} from 'svelte/transition'
  //Components
  import Navigation from "../components/Navigation.svelte";
  import MovieInfo from "../components/MovieInfo.svelte";
  import MovieInfoBar from "../components/MovieInfoBar.svelte";
  import Grid from "../components/Grid.svelte";
  import Actor from "../components/Actor.svelte";
  import Spinner from "../components/Spinner.svelte";

  export let params;
</script>

<div transition:fade>
    <Navigation/>
    <MovieInfo/>
    <MovieInfoBar/>
    <Grid heading='Actor' />
    <Actor/>
    <Spinner/>
</div>

<style>
</style>
