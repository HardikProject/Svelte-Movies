<script>
  const svelteLogo = "/images/svelte-logo.svg";
  const tmdbLogo = "/images/tmdb_logo.svg";
</script>

<header class="wrapper">
  <div class="content">
    <h1>Svelte Movie</h1>
  </div>
</header>

<style>
  .wrapper {
    background: #1c1c1c;
    padding: 0 20px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 1280px;
    height: 8vh;
    margin: 0 auto;
    box-sizing: border-box;
  }

  h1 {
    color: white;
  }

  @media screen and (max-width: 500px) {
    .content {
      max-width: 1280px;
      min-height: 0px;
    }
    h1 {
      font-size: 25px;
    }
  }
</style>
