/* API KEY ------------ c61e50e2754545da8be802c61afb0a83 --------- */


/*-------------------------------------------------------------------------------   Working Connection -----------------------*/

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
         for(var i=0; i < JSON.parse(this.response).length;i++ ){

            console.log(JSON.parse(this.response)[i]);
         }
	}
});



xhr.open("GET", "https://api.spoonacular.com/recipes/findByIngredients?apiKey=c61e50e2754545da8be802c61afb0a83&ingredients=apples,+flour,+sugar&number=5");

xhr.send(data);




