const allBtn =document.getElementsByClassName('btn');
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener('click',function(e) {
        e.target.style.backgroundColor="green";
        count++;

        console.log();
         const seatName = e.target.parentNode.childNodes[3].innerText;
         const price = 550 ;
         const selectSeat=document.getElementById('select-seat');
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
        const totalCost=document.getElementById("total-cost");
        console.log( typeof parseInt(totalCost));
        const convertedTotalCost=parseInt(totalCost);
        document.getElementById("total-cost").innerText=convertedTotalCost+ parseInt(price);
        setInnerText('seat-count', count);
        // const select = e.target.innerText;
    }
    
    )
    
}
function setInnerText(id,value) {
    document.getElementById(id).innerText = value;

}
// const seatName = document.getElementById('seat-name');

