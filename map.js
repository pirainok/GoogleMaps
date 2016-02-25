var map, heatmap, marker;
var loc =[];
var mark = [];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 42.7348, lng: -84.4808},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
	radius: 25,
	dissapating: true
  });
  
    google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
	});
	var icon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 3
	}

	function addMarker(location, map) {
  marker = new google.maps.Marker({
    position: location,
    map: map,
	icon:icon
  });
  loc.push(location);
  mark.push(marker);


}
}

  function removeMarkers(){
	  a = window.confirm('Would you like to delete the heat map?')
	  if(a == true){  
	  for(var i = 0; i<mark.length; i++){ 
		mark[i].setMap(null); 
	  }
	  clearHeatmap();}
		else{
			for(var i = 0; i<mark.length; i++){ 
			mark[i].setMap(null); 
			}
  }}

function clearHeatmap(){
	heatmap.setMap(null);
	loc = [];
	heatmap.setData(loc);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
	var a = window.prompt('Enter Value')
		if(a<100)
			heatmap.set('radius', heatmap.get('radius') ? null : a);
		else
			changeRadius()
			
	
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return loc;
}