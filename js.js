const katogoriya_API="./katogoriya.json";
const burger_API="./burger.json"


// katogoriya_API

const getData = async () => {
    const res = await fetch(katogoriya_API);
    const data = await res.json();
    const katogoriya=document.querySelector(".katogoriya");
    data.forEach(element => {
        
        // console.log(element);
        
        katogoriya.innerHTML += `
         <button>
                <img  src="${element.image}" alt="">
                <p>${element.name}</p>
            </button>
        `;

    });    
}
getData()

// burger_API

const korzinka_arr=[]

const burger=async()=>{
    const res=await fetch(burger_API);
    const data=await res.json();
    const product_tavari=document.querySelector(".product_tavari")
    data.forEach(element=>{
        // console.log(element);
        product_tavari.innerHTML+=`
        <div class="box">
            <img src="${element.image}" alt="">
            <p class="sum">${element.summa}₽<p>
            <p class="nomi">${element.name}</p>
            <p class="massa">${element.massa}г<p>
            <button onClick="buttonOnclick(${element.id})">Добавить</button>
        </div>
        `
    })
    korzinka_arr.push(...data)
}

burger()

//burger button onclick bolganda
const productBuy=document.querySelector(".product_buy")
const data=[]

const buttonOnclick=((id)=>{
    korzinka_arr.forEach((item)=>{
        if(item.id===id){
            data.push(item)
            productBuy.innerHTML+=`
            <div class="box">
                <div class="left">
                    <img src="${item.image}" alt="">
                        <div class="box_center">
                            <p class="nomi">${item.name}</p>
                            <p class="massa">${item.massa}г</p>
                            <p class="sum">${item.summa}₽</p>
                        </div>
                </div>
                <div class="box_button"><button>-</button><span>00</span><button>+</button></div>
            </div>
            `
        }
    })
    console.log(data);
})



