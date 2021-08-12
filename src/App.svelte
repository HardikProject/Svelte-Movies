<script>
  import router from "page";
  //Component
  import Home from "./pages/Home.svelte";
  import Header from "./components/Header.svelte";
  import Movie from "./pages/Movie.svelte";
  import NotFound from "./pages/NotFound.svelte";

  let page;
  let params;

  router("/", () => (page = Home));
  router(
    "/movie/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (page = Movie)
  );
  router("/*", () => (page = NotFound));
  router.start();
</script>

<svelte:head>
	<title>Svelte Movies</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
  <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description" content="Svelte Movies is movie related web page.It is build with svelte framwork.🚀"/>
</svelte:head>

<Header />

{#if page==Home}
  <Home/>
{/if}

{#if page==Movie}
  <Movie {params} />
{/if}

{#if page==NotFound}
  <NotFound/>
{/if}

<style>
  :global(body) {
    font-family: "Abel", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
