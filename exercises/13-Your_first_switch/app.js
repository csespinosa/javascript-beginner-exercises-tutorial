function getColor(selection)
{
	switch(selection){
		// Add more options here
		case "blue":
			console.log("blue")
			return true;
		case "red":
			console.log("red")
			return false;
		case "green":
			console.log("green")
			return true;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;              
	}
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
