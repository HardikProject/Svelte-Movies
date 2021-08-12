<script>
  import {IMAGE_BASE_URL,POSTER_SIZE} from '../config.js'

  export let actor;
  const noImage = '/images/no_image.jpg'
</script>

<div class="wrapper">
  <img src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : noImage} alt="">
  <span class="name">{actor.name}</span>
  <span class="character">{actor.character}</span>
</div>

<style>
  .wrapper {
    color: #fff;
    background: #1c1c1c;
    border-radius: 20px;
    padding: 3px;
    text-align: center;
  }

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
</style>
