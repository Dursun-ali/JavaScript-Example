var valueInfo = document.getElementsByClassName("value-write")[0];
var dikeyUzunlukDegeri = document.querySelector(".height-value");
var yatayUzunlukDegeri = document.querySelector(".width-value");
var firstInput=document.querySelector('#navbar-inp1');
var secondInput=document.querySelector('#navbar-inp2');

window.scrollTo(350,350);  
function DikeyUzunlukHesap(params1,params2,control) {
  if (control==true || control==undefined) {
    var dikeyUzunluk = window.scrollY;
    var yatayUzunluk = window.scrollX;
    dikeyUzunlukDegeri.innerHTML = dikeyUzunluk;
    yatayUzunlukDegeri.innerHTML = yatayUzunluk;
  }else{
    window.scrollTo(params1,params2);
    dikeyUzunlukDegeri.innerHTML =params1;
    yatayUzunlukDegeri.innerHTML = params2;
  }
  if (dikeyUzunluk==yatayUzunluk) {
    valueInfo.innerHTML="SİMETRİK"
  }else if(dikeyUzunluk>yatayUzunluk){
    valueInfo.innerHTML="DİKEY UZUNLUK FAZLA"
  }else if(yatayUzunluk>dikeyUzunluk){
    valueInfo.innerHTML="YATAY UZUNLUK FAZLA"
  }
  control=true
}
window.addEventListener("scroll", DikeyUzunlukHesap);
function konumaGit() {
  var control=false
  if (firstInput.value=="" || secondInput.value=="") {
    firstInput.value=0
    secondInput.value=0
  }
  else if (firstInput.value>563 || secondInput.value>563) {
      alert("En fazla 563px boyut seçilebilir.")
      firstInput.value=0
      secondInput.value=0
  }else if(firstInput.value<0 || secondInput.value<0){
    alert("Negatif boyut seçilemez.")
    firstInput.value=0
    secondInput.value=0
  }
  var dikey=firstInput.value
  var yatay=secondInput.value
  DikeyUzunlukHesap(dikey,yatay,control)
}
