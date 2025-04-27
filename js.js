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

//burger button onclick bolganda localStroge ga joylash

const data=JSON.parse(localStorage.getItem("productData"))||[]

const buttonOnclick=(id)=>{
    let allproduct=korzinka_arr.find(item=>item.id==id)
    let dataProduct=data.find(item=>item.id==id)
    
    if(dataProduct){
        dataProduct.count++
    }
    else{
        data.push({...allproduct,count:1})
    }

    // localStorage.removeItem("data")

    localStorage.setItem("productData",JSON.stringify(data))
// console.log(data);
}

//lokalStroge dan karzinkaga olish

const productBuy=document.querySelector(".product_buy")

let jami=0
let jami_summa=0

setInterval(()=>{
    let localProduct=JSON.parse(localStorage.getItem("productData"))
    productBuy.innerHTML=""
    jami=0
    jami_summa=0
    if(localProduct){
        localProduct.forEach((item)=>{
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
                <div class="box_button"><button>-</button><span>${item.count}</span><button>+</button></div>
            </div>
            `;
            jami+=item.count
            jami_summa+=item.count*item.summa
        }
        )
        
    }

    //karzinkadagi mahsulotlar soni
    let praduct_soni=document.querySelector(".praduct_soni")
    praduct_soni.textContent=jami

    //karzingadagi mahsulotlar  narxi jami
    let jami_narxi=document.querySelector(".jami_narxi")
    jami_narxi.textContent=`${jami_summa}₽`
    // console.log(jami_summa);
},100)




// let localProduct=JSON.parse(localStorage.getItem("productData"))

// console.log(localProduct);

// localProduct.forEach((item)=>{

//     productBuy.innerHTML+=`
//             <div class="box">
//                 <div class="left">
//                     <img src="${item.image}" alt="">
//                         <div class="box_center">
//                             <p class="nomi">${item.name}</p>
//                             <p class="massa">${item.massa}г</p>
//                             <p class="sum">${item.summa}₽</p>
//                         </div>
//                 </div>
//                 <div class="box_button"><button>-</button><span>${item.count}</span><button>+</button></div>
//     </div>
//             `
// })

            // productBuy.innerHTML+=`
            // <div class="box">
            //     <div class="left">
            //         <img src="${item.image}" alt="">
            //             <div class="box_center">
            //                 <p class="nomi">${item.name}</p>
            //                 <p class="massa">${item.massa}г</p>
            //                 <p class="sum">${item.summa}₽</p>
            //             </div>
            //     </div>
            //     <div class="box_button"><button>-</button><span>00</span><button>+</button></div>
            // </div>
            // `




