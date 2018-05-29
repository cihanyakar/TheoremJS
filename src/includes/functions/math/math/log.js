log(x, base, n = 15) {
	return new BigNumber(this.ln(x, n).div(this.ln(base, n)).toFixed(n - 1))
}
