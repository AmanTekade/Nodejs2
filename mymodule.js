console.log("In Node modules");

exports.isPrime = function(num) { 
		var i,flag=false;
		for(i=2;i<num;i++){
			if(num%i==0){
				flag=true;
				break;
			}
		}
		if(flag==false)
			return "prime no";
		else	
			return "not prime no";
		};

exports.calFact = function(num) {
		var fact=1;
		for(var i=1;i<=num;i++){
			fact = fact*i;
		}
		return fact;
};

exports.isPerfect = function(num) {
		var i,sum=0;
		for(i=1;i<num;i++){
			if(num%i==0){
				sum=sum+i;
			}
		}
		if(sum==num)
			return "Perfect no";
		else
			return "Not a Perfect no";
};