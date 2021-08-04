<script>
  const svelteLogo = "/images/svelte.svg";
</script>

<div class="content">
  <a href="https://svelte.dev/" target="_blank"
    ><img src={svelteLogo} alt="Svelte Logo" class="svelte-logo" /></a
  >

  <a href="/"> <h1>Svelte Movies</h1></a>
</div>

<style>
  .content {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    box-sizing: border-box;
    background: #1c1c1c;
    color: azure;
  }

  .svelte-logo {
    width: 50px;
    height: 50px;
    padding-right: 10px;
    display: inline;
  }
  a {
    text-decoration: none;
    color: azure;
  }
  h1 {
    display: inline;
  }
  @media screen and (max-width: 500px) {
    .content {
      max-width: 1280px;
      min-height: 0px;
    }
    h1 {
      font-size: 25px;
    }
    .svelte-logo {
      width: 40px;
      height: 40px;
    }
  }
</style>
