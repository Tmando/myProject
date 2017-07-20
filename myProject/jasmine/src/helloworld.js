/*

* This is the JavaScript file that need to be tested through jasmine

* Below is the helloworld function that will return 'Hello World'

*

*/

var helloworld = function(){

  return 'Hello World';

};

//exercise1
	function crystalGazer(childnr, job, partnerName, geographic){

		return "You will be a ",job," in ", geographic," and married to ",partnerName, " with ",childnr,".";
	}

  //exercise 2
  function ageCalculator(year, currentYear){
    if(Number.isInteger(currentYear) && Number.isInteger(year)){
      var result=currentYear-year;
      secRes = result-1;
      return result + ' or ' + secRes;
    }else{
      return 'Wrong input.'
    }
  }

  function ageCalculator2(year){
		curDate = new Date();
		var result=curDate.getFullYear()-year;
		secRes = result-1;
		return result + ' or ' + secRes;

	}

  function degreesToRadian(degree){
		var radian=degree*(Math.PI/180);
		return radian;
	}

  function areaVolume(width,height,depth){
	var area=width*height;
	var volume=width*height*depth;
	var areaString="The area of the box is: "+area+"<br>"+" The Volume of the box is: "+volume;
	return areaString;
	}

  function avrege(math,phisic,english){
 	var finalStr = '';
 	try{
 	var finalGrade=(Number(math)+Number(phisic)+Number(english))/3;
 	var sumGrade=(Number(math)+Number(phisic)+Number(english));
 	finalStr = 'Sum: '+ sumGrade + '<br>' + "Avarage: " + finalGrade;

	}catch(err){
		console.log("Something is wrong");

 	}
 	return finalStr;
	}

  function resizeWindow(){
	var width=window.innerWidth;
	var height=window.innerHeight;
	return 'Width' + width + 'Height' + height
	}

  var currentstring='i am a developer';

	var anonym=function(currentstring){
    		var newString=currentstring.charAt(0).toUpperCase()+currentstring.slice(1);

    	return newString;
	}

  function convertTime(minutes){
	var hour=parseInt(minutes/60);
	var minutesoutput=minutes%60;
	return minutes+ " = "+hour+" hour(s) "+" and "+minutesoutput+" minute(s).";
	}

  var yesterdayDate=function(date){
	curDate = new Date(date);
	curDate.setDate(curDate.getDate()-1);
	//return curDate.getDay()+curDate.getMonth()+curDate.getDate()+curDate.getFullYear();
	return curDate.toISOString();
	}

  function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var result= "rgb("+r+","+g+","+b+")";
	return result;
	}
