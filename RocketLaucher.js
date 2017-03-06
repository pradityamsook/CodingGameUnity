#pragma strict

var speedRocket : float = 0.1f;

function Start () {

}

function Update () {
	RocketLaucher();
}

function RocketLaucher () {

	 var position : Vector2 = transform.position;
	 position.y += speedRocket;
	 transform.position = position;

	 if (position.y > 18 ){
	 	Destroy(gameObject);
	 }
}
