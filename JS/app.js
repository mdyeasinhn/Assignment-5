const allBtn =document.getElementsByClassName('btn-green');
const selectSeat=document.getElementById('select-seat');
let count = 0;
let countSelectSeat = 40;
for (const btn of allBtn) {
    btn.addEventListener('click',function(e) {
        e.target.style.backgroundColor="green";
        count++;
        const seatValue= e.target.innerText;
        countSelectSeat=countSelectSeat-1

        //  const seatName = e.target.parentNode.childNodes[3].innerText;
         const price = 550 ;
 
        const li =document.createElement('li');
        const p =document.createElement('p');
        p.innerText=seatValue;
        const p2 =document.createElement('p');
        p2.innerText='Economoy';
        const p3 =document.createElement('p');
        p3.innerText=price;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectSeat.appendChild(li);
        const totalCost=document.getElementById("total-cost").innerText;
        console.log( typeof parseInt(totalCost));
        const convertedTotalCost=parseInt(totalCost);
        document.getElementById("total-cost").innerText=convertedTotalCost+ parseInt(price);
        console.log(count)
        setInnerText('total-seat',countSelectSeat);
        setInnerText("seat-count", count);
        updateGrandTotal();
        // const select = e.target.innerText;
    }
    
    )
    
}
const ticketPrice=document.getElementById('ticket-price');

// const new15=document.getElementById('copupon-1').innerText;
// const couple20=document.getElementById('copupon-2').innerText;



// const grandTotal=document.getElementById('grand-total');
// const inputField = document.querySelector('#copupon');
// inputField.addEventListener('keyup',function(e) {
//     const inputFieldText= e.target.value;
//     if(inputFieldText){
        
        
//     }
// })


function updateGrandTotal(status){
    const totalCost=getConvetedValue('total-cost');
    if(status===undefined){
        
        document.getElementById('grand-total').innerText=totalCost;

    }else{

        const copuponCode=document.getElementById('copupon').value;

        if(copuponCode =="Couple 20"){   
            const discounted =totalCost*.2;
            document.getElementById('grand-total').innerText=totalCost-discounted;

        }else{
            alert('Please enter a valid copupon code');
        }


        
    }




}

function hideElementById(elementId){
    const element =document.getElementById( elementId);
    element.classList.add("hidden");
}
function setInnerText(id,value) {
    document.getElementById(id).innerText = value;

}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementId) {
    const element= document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value ;
}

function setTextElementValueById(elementId, value) {
    const element =document.getElementById(elementId);
    element.innerText = value;
}
function getConvetedValue(id){
    const totalPrice= document.getElementById(id).innerText;
    const convertPrice = parseInt(totalPrice);
    return convertPrice;
}