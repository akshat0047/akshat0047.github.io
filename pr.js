function menusides(){

document.getElementById("bod").style.opacity="0.5";
document.getElementById("bod1").style.opacity="0.5";
document.getElementById("ft").style.opacity="0.5";
document.getElementById("menusid").style.width="70%";
document.getElementById("profile").style.width="0";
}
function closa(){

  document.getElementById("menusid").style.width="0";
  document.getElementById("bod").style.opacity="1";
  document.getElementById("ft").style.opacity="1";
  document.getElementById("bod1").style.opacity="1";
}

function prosides(){
  document.getElementById("bod").style.opacity="0.5";
  document.getElementById("bod1").style.opacity="0.5";
  document.getElementById("ft").style.opacity="0.5";
  document.getElementById("menusid").style.width="0";
  document.getElementById("profile").style.width="70%";
}
function closb(){
  document.getElementById("profile").style.width="0";
  document.getElementById("bod").style.opacity="1";
  document.getElementById("ft").style.opacity="1";
  document.getElementById("bod1").style.opacity="1";
}

function project(){
  document.getElementById("alertb").style.display="block";
  document.getElementById("menusid").style.opacity="0.5";
  }
function projectclose(){
  document.getElementById("alertb").style.display="none";
  document.getElementById("menusid").style.opacity="1";
}

var i=1;
function slides(){
  switch(i)
  {
    case 1:
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    break;
    case 2:
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="block";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";

    break;
    case 3:
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="block";
    document.getElementById("p4").style.display="none";

    break;
    case 4:
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";

    break;

  }
  i++;
  if(i>4){i=1;}
  }
  setInterval(slides,1500);
