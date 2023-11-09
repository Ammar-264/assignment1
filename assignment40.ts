function make_album(artist, title, tracks = null) {
    var album = {
      artist: artist,
      title: title,
    };
    if (tracks !== null) {
      album.tracks = tracks;
    }
    return album;
  }
 
  console.log(make_album('artist 1', 'album Title 1', 12));
  console.log(make_album('artist 2', 'album Title 2'));
  console.log(make_album('artist 3', 'album Title 3', 10));
  