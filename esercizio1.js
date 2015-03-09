var vet= new Array(10);
for (var i = 0; i < vet.length; i++) {
	vet[i]=new Array(10);
}

for (var i = 0; i < vet.length; i++) {
	for (var j = 0; j < vet.length; j++){
	if (i!=0) {
		vet[i][j]=vet[i-1][j]+vet[0][j];
	} else{
		vet[i][j]=j+1;
	} 
		
	}
	
}
for (var i = 0; i < vet.length; i++) {
	console.log(vet[i]);	
	document.write(vet[i]);
	document.write('\n');
};
for (var i = 0; i < vet.length; i++) {
	for (var j = 0; j < vet.length; j++){
	if (i!=0) {
		vet[i][j]=vet[i-1][j]+vet[0][j];
	} else{
		vet[i][j]=j+1;
	} 
		
	}
}
for (var i = 0; i < vet.length; i++) {
	for (var j = 0; j < vet.length-1; j++){
		
		vet[i][j]+=',';
	}
	
}
for (var i = 0; i < vet.length; i++) {
	console.log(vet[i]);	
	document.write(vet[i]);
	document.write('\n');
};

for (var i = 0; i < vet.length; i++) {
	for (var j = 0; j < vet.length; j++){
		if (i==j) {
			vet[i][j]=1;
		}else{ 	
			vet[i][j]=0;
			}
		}
	
}
for (var i = 0; i < vet.length; i++) {
	console.log(vet[i]);	
	document.write(vet[i]);
	document.write('\n');
	//prova
};
