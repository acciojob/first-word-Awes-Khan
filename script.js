function firstWord(s) {
  // your code here

	
	const trimmedStr = str.trim();
    const spaceIndex = trimmedStr.indexOf(' ');
    if (spaceIndex === -1) {
        return trimmedStr;
    }
    return trimmedStr.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
