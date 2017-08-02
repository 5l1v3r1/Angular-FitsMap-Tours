export class Init{
  load(){
    if(localStorage.getItem('markers')=== null || localStorage.getItem('markers')=== undefined){
      console.log('No markers found...creating')

      var markers = [
        {
          name: "The Troll",
          lat: 47.65105,
          lng: -122.347355,
          draggable: true
        },
        {
          name: "Gasworks Park",
          lat: 47.64573,
          lng: -122.33448,
          draggable: true
        },
        {
          name: "The Space Needle",
          lat: 47.620513,
          lng: -122.349415,
          draggable: true
        }
      ];

      localStorage.setItem('markers', JSON.stringify(markers));
    }else{
      console.log("loading markers")
    }
  }
}
