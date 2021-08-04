<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

  <button on:click={() => dispatch("loadMore")}><slot /></button>

<style>
  
  button {
    margin: 20px auto;
    background: #000;
    width: 25%;
    min-width: 200px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 35px;
    font-size: 28px;
    max-width: 1280px;
    display: block;
    padding: 8px 0;
    outline: none;
  }

  button:hover {
    opacity: 0.8;
  }
</style>
