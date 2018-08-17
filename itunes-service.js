function ItunesService() {

  //DO NOT MODIFY
//   this.getMusicByArtist = function (artist) {
//     let url1 = '//bcw-getter.herokuapp.com/?url='
//     let url2 = 'https://itunes.apple.com/search?term=' + artist
//     let apiUrl = url1 + url2
//     //Casts each object to 
//     return $.getJSON(apiUrl).then(function (response) {
//       console.log(response)
//       var songList = response.results.map(song => {
//         return {
//           title: song.trackName,
//           albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
//           artist: song.artistName,
//           collection: song.collectionName,
//           price: song.collectionPrice,
//           preview: song.previewUrl,
//         }
//       })
//       return songList;
//     })
//   }
// }

//Use this at home:
  //DO NOT MODIFY
  this.getMusicByArtist = function (artist) {
    var url = 'https://itunes.apple.com/search?term=' + artist + "&callback=?" + "&media=music"
    console.log(url)
    //Casts each object to 
    return $.getJSON(url).then(function (response) {
      var songList = response.results.map(song => {
        return {
          title: song.trackName,
          albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
          artist: song.artistName,
          collection: song.collectionName,
          price: song.collectionPrice,
          preview: song.previewUrl,
        }
      })
      return songList;
    })
  }
}