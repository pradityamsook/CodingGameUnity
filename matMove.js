#pragma strict

private var matSlide : Rigidbody2D;
var speed = 2.0;
private var movement : Vector2;
var time = 0.0;

private var spawnPosiiton : Vector2;
private var count = 0;
var countText : UI.Text;
var winText : UI.Text;


function Start () {
	matSlide = GetComponent.<Rigidbody2D>();
	count = 0;
	winText.text = "";
	//InvokeRepeating("Spawn",spawnTime,spawnTime);
}

function Update () {
	time += Time.deltaTime;
	var moveHorizontal = Input.GetAxis("Horizontal");
	//var moveVertical = Input.GetAxis("Vertical");
	movement = new Vector2(moveHorizontal,0); //moveVertical);
	matSlide.AddForce(movement * speed);

}


function OnTriggerEnter2D(other:Collider2D){
	if(other.gameObject.tag == "ball_large"){
		Destroy(other.gameObject);

		count  = count + 1;
		SetCountText();

	}

}

function SetCountText(){
	countText.text = "Count:" + count.ToString();
	if(count >= 20){
			Application.LoadLevel("level2");
		}

}
