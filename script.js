function firstWord(s) {
  // your code here

	
	const trimmedStr = s.trim();
    const spaceIndex = trimmedStr.indexOf(' ');
    if (spaceIndex === -1) {
        return trimmedStr;
    }
    return trimmedStr.slice(0, spaceIndex);
	
}

// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
