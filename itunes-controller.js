function ItunesController() {

  // PRIVATE
  const itunesService = new ItunesService()

  function drawSongs(results) {
    console.log(results)
    //YOUR CODING STARTS HERE
    let template = ``
    document.getElementById('count').innerText = "Showing " + results.length + " results for: " + document.getElementById('artist').value
    for(let i=0; i < results.length; i++){
      const song = results[i];
        template += `
        <div style="margin: 30px 0px;">
        <tr style="background: url(${song.albumArt}); background-repeat: no-repeat; background-size: cover; background-position: center; 
        background-color: rgba(255, 255, 255, .85); background-blend-mode: lighten; border-radius: 20px; margin: 30px 0px;">
          <th scope="row"></th>
          <td><img style="border-radius: 20px;" src="${song.albumArt}" alt="" style="width: 250px;"></td>
          <td class="text-gray song-details" ;>
            <h3 class="song-item text-truncate">Song: ${song.title}</h3>
            <h3 class="song-item">By: ${song.artist}</h3>
            <h3 class="song-item">From: ${song.collection}</h3>
            <audio controls class="song-item">
              <source src="${song.preview}">
            </audio>
            <br />
            <h4 class="song-item">Own this album for: $${song.price}</h4>
          </td>
          </tr>
          </div>
      `
    }
    document.getElementById('songs').innerHTML = template
  }

  //PUBLIC
  //DO NOT MODIFY THIS METHOD
  this.getMusic = function (e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}

