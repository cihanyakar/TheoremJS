tan(n) {
    if (typeof n != 'object') {
        n = [n]
    }
	let result = []
    for (var i = 0; i < n.length; i++) {
    	result.push(Math.tan(n[i]))
    }
	return result.length == 1 ? result[0] : result
}