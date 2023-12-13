function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true; // Both values are NaN
    }
    
    return typeof value1 === typeof value2;
}

// Examples
console.log(isSameType(1, 3)); // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN)); // true
console.log(isSameType("3", 3)); // false
