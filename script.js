//console.log(1)
function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    let zina= document.querySelector('zina');
    let zinas= document.querySelector('cataZina');
    zinas.innerHTML = zinas.innerHTML+ '<br>'+zina.value;
}