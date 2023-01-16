n_s=[];

function submit() {
 var n1=document.getElementById("n_1").value;
 var n2=document.getElementById("n_2").value;
 var n3=document.getElementById("n_3").value;
 var n4=document.getElementById("n_4").value;  
 n_s.push(n1);
 n_s.push(n2);
 n_s.push(n3);
 n_s.push(n4);
 console.log (n_s);
 document.getElementById("display_name").innerHTML=n_s;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    n_s.sort(); 
    console.log (n_s);
    document.getElementById("display_name").innerHTML=n_s;
}