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
