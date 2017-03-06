#pragma strict

var speedDown : float = 0.1f;
private var down : Rigidbody2D;

function Start(){
	down = GetComponent.<Rigidbody2D>();
}

function Update(){
	downMet();
}

function downMet(){

	var position2 : Vector2 = down.transform.position;
	position2.y -= speedDown;
	down.transform.position = position2;

		if(position2.y < 9){
			Destroy(gameObject);
		}
}
