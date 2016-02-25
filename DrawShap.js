var map, poly;
var array = [];
var array2 = [];
var mark = [];

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 43.00, lng: -83},
  zoom: 8
});

google.maps.event.addListener(map, 'click' ,function(event){
	addMarker(event.latLng, map);
});

poly = new google.maps.Polygon({
	strokeColor:'#000000',
	strokeOpactiy:1.0,
	strokeWeight:3
});

poly.setMap(map);

map.addListener('click',addLatLng);
map.addListener('dbclick',finShape);

var icon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 3
	};

function addMarker(location,map){
	var marker = new google.maps.Marker({
		position:location,
		map:map,
		icon:icon
	});
	array.push(location);
	mark.push(marker);
}
}

function newShape(){
	array2.push(array);
	array = [];
	for(var i = 0; i<mark.length; i++){ 
		mark[i].setMap(null); 
	  }
	
}

function addLatLng(event){
	var path = poly.getPath();
	path.push(event.latLng);
}

function finShape(





