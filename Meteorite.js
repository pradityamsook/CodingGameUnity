#pragma strict
var time  = 0.0;
var Meteorite : GameObject;

var randomStart : float = 0;
var randomEnd : float = 0;
private var randomO : float;

function Start () {

}

function Update (){
	Meteorites();
}

function Meteorites () {
	time += Time.deltaTime;
	if(time >= 1){
		time = 0;
		var position : Vector3 = new Vector3();
		position.x = Random.Range(randomStart,randomEnd);
		position.y = 18.95;
		Instantiate(Meteorite, position,Quaternion.identity);

	}

}
function OnTriggerEnter2D(mothur : Collider2D){
	if (mothur.gameObject.CompareTag("Rocket")){
		Destroy(mothur.gameObject);
	}
}
