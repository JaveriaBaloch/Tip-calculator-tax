container= document.querySelector('main');
function fixed(value){
    if(value==="1"){
        return 1+" person"
    }
    else{
        return value+ " people"
    }
}
container.addEventListener('input',function(e){
 let   BillInput=document.querySelector('#Bill').value;
 let  TipRange=document.querySelector('.Tiprange').value;
 let   Taxrange=document.querySelector('.Taxrange').value;
 let Personrange=document.querySelector('.Personrange').value;
 let TipPercent=(TipRange/100)*BillInput
 let TaxAmount=(Taxrange/100)*BillInput
 let Total=Number(BillInput)+Number(TipPercent)+Number(TaxAmount)
 let perPerson =Total/Number(Personrange);
 
 let TipEach=TipPercent/Number(Personrange)


 
    console.log(TipEach)
    document.querySelector('.TipEach').innerHTML="$ "+ (TipPercent/Personrange).toFixed(2)
    document.querySelector('.Tip_percentage').innerHTML=TipRange+'%'
    document.querySelector(".saleTax_percentage").innerHTML=Taxrange+"%"

    document.querySelector('.Tip_amount').innerHTML="$ "+TipPercent.toFixed(2)
    document.querySelector('.Total').innerHTML="$ "+Total.toFixed(2)
    document.querySelector('.BillEach').innerHTML="$ "+perPerson.toFixed(2)

    document.querySelector('.Split_percentage').innerHTML= fixed(Personrange)
})