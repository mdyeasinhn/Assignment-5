const allBtn =document.getElementsByClassName('btn-green');
const selectSeat=document.getElementById('select-seat');
let count = 0;
let countSelectSeat = 40;
for (const btn of allBtn) {
    btn.addEventListener('click',function(e) {
        e.target.style.backgroundColor="green";
        count++;
        countSelectSeat=countSelectSeat-1

         const seatName = e.target.parentNode.childNodes[3].innerText;
         const price = 550 ;
 
        const li =document.createElement('li');
        const p =document.createElement('p');
        p.innerText=seatName;
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
        // const select = e.target.innerText;
    }
    
    )
    
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

