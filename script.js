function isSameType(value1, value2)
	const value1="hello";
    const value2="world";
	{
	if(isSameType(NaN NaN)){
	 if (isNaN(value1) && isNaN(value2)) {
        return true; // Both values are NaN
    }
    
    return typeof value1 === typeof value2;
	}
  //your js code here
}

// do not change the code below.
 let value1 = prompt("Enter Start of the Range.");
 let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
