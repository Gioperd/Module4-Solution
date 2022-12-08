var names=new Array();
names[0]="Giovanni";
names[1]="Savannah";
names[2]="Arlette";
names[3]="sofia";
names[4]="Jacobo";
names[5]="samia";
names[6]="marcela";
names[7]="Jennifer";
names[8]="Samantha";
names[9]="Sara";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='S'|| names[i].charAt(0)==='s'){
        console.log("Goodbye "+ names[i])
    }
	else{
		console.log("Hello "+ names[i])
	}
}