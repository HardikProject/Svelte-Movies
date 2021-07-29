<script>
  const svelteLogo = "/images/svelte.svg";
</script>

<div class="content">
  <img src={svelteLogo} alt="Svelte Logo" class="svelte-logo" />
  <h1>Svelte Movie</h1>
</div>

<style>
  .content {
    padding: 0 20px;
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
