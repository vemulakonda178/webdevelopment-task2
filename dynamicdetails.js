function jsonload(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=()=>{
	if (xhr.readyState ===4 && xhr.status ===200)
	 {
		callback(xhr.responseText);
	}
}
xhr.send();
}
jsonload("details.json",(text)=>{
	let  d= JSON.parse(text);
	console.log(d);
	sun(d.personaldetails);
	mon(d.education);
	tue(d.projectdetails);
	wed(d.skillsummary);
	thr(d.carrierobjective)
	
})
var main = document.querySelector(".main");
function sun(m){
	var p = document.createElement("img");
p.src=m.picture;
p.alt="profile-pic";
main.appendChild(p);
	var n1=document.createElement("h4");
	n1.textContent=m.name;
	main.appendChild(n1);
    var n2=document.createElement("h4");
	n2.textContent=m.degree;
	main.appendChild(n2);
	var n3=document.createElement("h4");
	n3.textContent=m.email;
	main.appendChild(n3);
	var n4=document.createElement("h4");
	n4.textContent=m.adress;
	main.appendChild(n4);
   var a=document.createElement("p")
	a.textContent=m.mobile;
	a.setAttribute("id","mobile");
	main.appendChild(a);
	var n5=document.createElement("h4");
	n5.textContent="hobbies list";
	main.appendChild(n5);
	n5.appendChild(document.createElement("hr"));
	var ul=document.createElement("ul");
	for (var i=0;i<m.hobbies.length;i++){
		var li=document.createElement("li");
	li.textContent=m.hobbies[i];
	ul.appendChild(li);
}
	main.appendChild(ul);
    var n6=document.createElement("h4");
	n6.textContent="languages known";
	main.appendChild(n6);
	n6.appendChild(document.createElement("hr"));
	var ul=document.createElement("ul");
	for (var i=0;i<m.languagesknown.length;i++){
		var li=document.createElement("li");
      li.textContent=m.languagesknown[i];
	ul.appendChild(li);
}
main.appendChild(ul);
}
var imp = document.querySelector(".imp");	
function mon(s){
var table=document.createElement("table");
var row=" ";
for (var i = 0; i < s.length; i++) {
		row += "<tr><td>"+s[i].standard+"</td><td>"+s[i].institute+"</td><td>"+s[i].passingyear+"</td><td>"+s[i].GPA+"</td></tr>";
	}	
	table.innerHTML=row;
	imp.appendChild(table);
	
}
var sin= document.querySelector(".sin");
function tue(f){
var n7=document.createElement("h4");
	n7.textContent="project details";
	sin.appendChild(n7);
	n7.appendChild(document.createElement("hr"));
	var ul=document.createElement("ul");
	for (var i=0;i<f.projectdetails.length;i++){
		var li=document.createElement("li");
	
	li.textContent=f.projectdetails[i];
	ul.appendChild(li);
}
sin.appendChild(ul);
}
function wed(y){
var n8=document.createElement("h4");
	n8.textContent="skills";
	sin.appendChild(n8);
	n8.appendChild(document.createElement("hr"));
	var ul=document.createElement("ul");
	for (var i=0;i<y.skillsummary.length;i++){
		var li=document.createElement("li");
	
	li.textContent=y.skillsummary[i];
	ul.appendChild(li);
}
sin.appendChild(ul);
}
function thr(z){
var n8=document.createElement("h4");
	n8.textContent=z;
	sin.appendChild(n8);
}
