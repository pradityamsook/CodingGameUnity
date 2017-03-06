#pragma strict
var MoveLeft : float = 1.0f;
var MoveRight : float = 1.0f;
private var movePlayer : Rigidbody2D;

var ammo : GameObject;

function Start () {
movePlayer = GetComponent.<Rigidbody2D>();



}

function Update () {
	if(Input.GetKey(KeyCode.LeftArrow)){
		var positionX : Vector2 = movePlayer.transform.position;

		if (positionX.x > -11){
			positionX.x -= MoveLeft;
			movePlayer.transform.position = positionX;
		}

	}

	if(Input.GetKey(KeyCode.RightArrow)){
		var positionX2 : Vector2 = movePlayer.transform.position;

		if(positionX2.x < 11){
			positionX2.x += MoveRight;
			movePlayer.transform.position = positionX2;
		}
	}

	if(Input.GetKey(KeyCode.Space)){
		var position : Vector2 = movePlayer.transform.position;
		Instantiate(ammo, position,transform.rotation);

		//var positionAmmo : Vector2 = ammo.transform.position;



	}



}

function OnTriggerEnter2D(other : Collider2D){
	if (other.gameObject.CompareTag("meteorite")){
		Application.LoadLevel("level2");
	}
}
