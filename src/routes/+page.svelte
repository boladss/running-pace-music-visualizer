<script>
  const { data } = $props();
  const token = data.access_token;

  let query = $state("");
  let albums = $state([]);

  // Testing query responses
  async function searchAlbums() {
    if (!query.trim()) {
      albums = [];
      return; // empty string
    } 

    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album&limit=5`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const results = await response.json();
    albums = results.albums.items.map(album => album.name);
  }
</script>

<h1>Search Albums</h1>

<input type="text" placeholder="Search for an album on Spotify..." bind:value={query} oninput={searchAlbums}/>

<ul>
  {#each albums as album}
    <li>{album}</li>
  {/each}
</ul>
