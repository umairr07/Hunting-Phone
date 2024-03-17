let one = document.getElementById('one');
let two = document.getElementById('two');
let searchval = document.getElementById('searchval')
let searchbutton = document.getElementById('search');
let showdetails = document.querySelectorAll('#show-Details');
// let body = document.querySelector('body');
let maindisplay = document.getElementById('main1');
let close = document.getElementById('close').addEventListener('click', () => {
    maindisplay.style.visibility = 'hidden';

})

for (let i = 0; i < showdetails.length; i++) {
    showdetails[i].addEventListener('click', () => {
        console.log("add");
        // maindisplay.style.zIndex='-10';
        maindisplay.style.visibility = 'visible';
    })

}


async function displysearch() {
    one.innerHTML = "";
    // console.log(searchval.value)
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchval.value}`);
    let data1 = await res.json();

    let appenda = "";
    data1.data.forEach(element => {



        appenda += `<div class="fluid" style="text-align:center;width:30vw ; height:60vh; box-shadow: 5px  5px 10px;margin-top:30px;align-self:center;padding:2%;">
       
             
                  <img class="" src="${element.image}" alt="Card image cap" height="230px" width="180px" style="margin-top:3%; padding: 2%;">
        
                   <h4>${element.phone_name}</h4>
                 <p style="font-size: larger;width:80%;margin:auto;">There are many variations of passages of available, but the majority have
                     suffered
                       </p>
                   <button id="show-Details1" style="width:150px;
                   height: 50px;
                   background-color:rgb(42, 42, 239);
                   border: 2px solid rgb(42, 42, 239);
                   border-radius: 5px;
                   color: white;
                   font-weight: bold;margin-top:15px;">SHOW DETAILS</button>
           
        </div>
        </div>
    </div> 
    `
    });
    two.innerHTML = appenda;

}

searchbutton.addEventListener('click', displysearch);