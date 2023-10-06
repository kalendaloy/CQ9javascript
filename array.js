 // create an Array:
 var cars = ["Toyota", "Harrier", "Prado TX"];
 
 // Here cars [0] Toyota

 { var cars = ["Harrier", "Toyota", "Prado Tx"];
 // Here cars[0] is "Harrier"
}

 // change an element:
 cars[0] = "Elf";


 // Add an element:
 cars.push("Corona")

 // Display the Array:
 document.getElementById("demo1").innerHTML = cars;

 // using a comma in array to string method
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars.toString();
 
 // using a * in array join() method
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars.join("*");


// Javascript Array pop method
 // using popping method "removes the last element from an array"
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars;
 cars.pop();
 document.getElementById("demo2").innerHTML = cars;

 // using  popping method "returns the value that was popped out"
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars.pop();
 document.getElementById("demo2").innerHTML = cars;


 // Javascript Array push method
 // using  pushing method "adds a new element to an array"
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars;
cars.push("BMW");
document.getElementById("demo2").innerHTML = cars;

// using  pushing method "returns the new array length"
var cars = ["Toyota", "Harrier", "Prado TX"];
document.getElementById("demo1").innerHTML = cars.push("BMW");
document.getElementById("demo2").innerHTML = cars;


 // Javascript Array shift() method
 // using  shift() method "removes the first element of an array(and "shift" the other element to the left)
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars;
cars.shift();
document.getElementById("demo2").innerHTML = cars;

// using  shift() method "returns the value that was "shifted out")
var cars = ["Toyota", "Harrier", "Prado TX"];
document.getElementById("demo1").innerHTML = cars.shift();
document.getElementById("demo2").innerHTML = cars;


// Javascript Array unshift() method
 // using  unshift() method "adds a new element of an array(at the beginning), and "unshifts" older elements
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars;
cars.unshift("Mark II");
document.getElementById("demo2").innerHTML = cars;

// using  unshift method "returns the new array length")
var cars = ["Toyota", "Harrier", "Prado TX"];
document.getElementById("demo1").innerHTML = cars.unshift("Mark II");
document.getElementById("demo2").innerHTML = cars;


// Javascript Array length method
 // using  length property to provide an easy way to append a new element to an array
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars;
cars[cars.length]="BMW";
document.getElementById("demo2").innerHTML = cars;



// Javascript Array delete() method
 // using  delete() method leaves undefined holes in the array instead use pop() or shift() instead.
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = "The first car is:" + cars[0];
delete cars[0];
document.getElementById("demo2").innerHTML = "The first car is:" + cars[0];
delete cars[0];

 
// changing  elements using their index number
 // using  unshift() method "adds a new element of an array(at the beginning), and "unshifts" older elements
 var cars = ["Toyota", "Harrier", "Prado TX"];
 document.getElementById("demo1").innerHTML = cars;
cars[0] = "BMW";
document.getElementById("demo2").innerHTML = cars;

// Javascript Array concat() method (concatenating)
 // using  concat() method (merging Two arrays)
 var boda = ["Toyota", "Harrier", "Prado TX"];
 var cars = ["BMW", "Premio", "Raum"];

 var cars = cars.concat(boda);
 document.getElementById("demo1").innerHTML = cars;
document.getElementById("demo2").innerHTML = cars;


// using  concat() method (merging Three arrays)
var array1 = ["Toyota", "Harrier", "Prado TX"];
var array2 = ["BMW", "Premio", "Raum"];
var array3 = ["probox", "corona", "RV4"];

var cars = array1.concat(array2, array3);
document.getElementById("demo1").innerHTML = cars;
document.getElementById("demo2").innerHTML = cars;






