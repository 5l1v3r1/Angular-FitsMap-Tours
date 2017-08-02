export class Init{
  load(){
    if(localStorage.getItem('markers')=== null || localStorage.getItem('markers')=== undefined){
      console.log('No markers found...creating')

      var markers = [
        {
          name: "The Troll",
          lat: 47.65105,
          lng: -122.347355,
          draggable: false
        },
        {
          name: "Gasworks Park",
          lat: 47.64573,
          lng: -122.33448,
          draggable: false
        },
        {
          name: "The Space Needle",
          lat: 47.620513,
          lng: -122.349415,
          draggable: false
        },
        {
          name: "Stadiums",
          lat:  47.59285,
          lng: -122.333622,
          draggable: false
        },
        {
          name: "Pike Place Market",
          lat: 47.609519,
          lng: -122.341862,
          draggable: false
        }
      ];

      localStorage.setItem('markers', JSON.stringify(markers));
    }else{
      console.log("loading markers")
    }
  }
}
