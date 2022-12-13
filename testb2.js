function numberOneTriangle(N){
    if (N > 10) {
        document.writeln("vui lòng nhập N <= 10")
    }
    else
	for(i=0;i<N;i++) {
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}
		document.writeln("<br/>")
	}
    return N;
}
numberOneTriangle(10)