const images=[
"loading1.PNG",
"loading2.PNG",
"loading3.PNG",
"loading4.PNG",
"loading5.PNG"
];

let i=0;

const img=document.getElementById("loaderImage");

const interval=setInterval(()=>{

i++;

if(i<images.length){

img.src=images[i];

}else{

clearInterval(interval);

document.getElementById("loading").style.display="none";
document.getElementById("home").style.display="block";

}

},1000);
