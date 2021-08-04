<script>
  export let image = "";
  export let movieId = "";
  export let clickable = false;

  const noImage = "/images/no_image.jpg";
</script>

<div class="wrapper">
  {#if clickable}
    <a href="/movie/{movieId}"
      ><img
        src={image ? image : noImage}
        alt="Movie Thumb"
        class="clickable"
      /></a
    >
  {:else}
    <img src={noImage} alt="Movie Thumb" />
  {/if}
</div>

<style>
  .wrapper {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid black;
  }

  img:hover {
    /* opacity: 0.8; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px, rgb(51, 51, 51) 0px 0px 0px 1px;
    transform: scale(1.02);
  }

  .clickable {
    cursor: pointer;
  }
</style>
