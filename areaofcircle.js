let pi = 3.14;
 
    // Function to calculate the area of circle 
    function findArea(r) {
        return (pi * r * r);
    }
 
    // Driver code 
    let r, Area;
    r = 5;
 
    // Function calling 
    Area = findArea(r);
 
    // displaying the area 
    console.log("Area of Circle is: " + Area);
    console.log("The area of a circle with radius "+r  + " is " +Area)
    //alert =(`Area of Circle is: ${Area}`)