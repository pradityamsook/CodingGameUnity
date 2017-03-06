#pragma strict


function OnTriggerEnter2D(other:Collider2D){
	if(other.gameObject.tag == "ball_large"){
		Destroy(other.gameObject);
	}
}
