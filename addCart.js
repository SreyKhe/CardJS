let btnShop = document.querySelector('#shop');
let order = document.querySelector('.box_order');
// console.log(order);
let btnclose = document.querySelector('#btnclose');
let btnCancel = document.querySelector('#btnCancel');
btnShop.addEventListener('click',function(){
    order.style.display = 'block';
})
btnclose.addEventListener('click',function(){
    // alert(123)
    order.style.display = 'none';
})
btnCancel.addEventListener('click',function(){
    // alert(123);
    order.style.display = 'none';
})
//  =============== Item Product
let product = [
    {
        image: './Smart_watch/item1.jpg',
        title: 'Smart Watch1',
        price: 900.00
    },
    {
        image: './Smart_watch/item2.jpg',
        title: 'Smart Watch2',
        price: 300.00
    },
    {
        image: './Smart_watch/item3.jpg',
        title: 'Smart Watch3',
        price: 700.00
    },
    {
        image: './Smart_watch/item4.jpg',
        title: 'Smart Watch4',
        price: 600.00
    },
    {
        image: './Smart_watch/item5.jpg',
        title: 'Smart Watch5',
        price: 300.00
    },
    {
        image: './Smart_watch/item6.jpg',
        title: 'Smart Watch6',
        price: 500.00
    },
    {
        image: './Smart_watch/item7.jpg',
        title: 'Smart Watch7',
        price: 400.00
    },
    {
        image: './Smart_watch/item8.jpg',
        title: 'Smart Watch8',
        price: 350.00
    },
];
// console.log(product);
let bottons = `<button type="button" class="btn btn-success" id="add_card">Add to Cart</button>`;
function showProduct(){
    let getItem = '';
   product.forEach(el => {
        // console.log(el.image);
        getItem +=`
            <div class="col-xl-3">
                <div class="card">
                    <div class="card-img-top">
                        <img src="${el.image}" alt="" class="img-thumbnail w-100">
                    </div>
                    <div class="card-body">
                        <h5 class="text-center">${el.title}</h5>
                        <p class="text-center">
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star "></i>
                        </p>
                        <h5 class="text-center text-danger">
                            Price : ${el.price}.00$
                        </h5>
                        <div class="text-center">
                            ${bottons}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
    });
    document.querySelector('#itempro').innerHTML = getItem; 
}
showProduct();
let count = document.querySelector('.count');
// console.log(count);
let a =0;

function AddCard(){
    
    
    let btnadd = document.querySelectorAll('#add_card');
    // Counts(i);
    let getCard = '';
    btnadd.forEach((el,i)=>{
        
        el.addEventListener('click',function(){
            a = a+1;
                // console.log(a)
                
                count.innerHTML=a;
            getCard +=`
                <div class="col-10">
                    <div class="row d-flex align-items-center">
                        <div class="col-4">
                            <img src="${product[i].image}" alt="" class="w-100 img-thumbnail">
                        </div>
                        <div class="col-5">
                            <h6 class="text-start">${product[i].title}</h6>
                        </div>
                        <div class="col-3">
                            <h6>${product[i].price}.00$</h6>
                        </div>
                    </div>
                </div>
                <div class="col-2 d-flex align-items-center">
                    <button type="button" class="btn"><i class="fa-solid fa-trash-can fs-5"></i></button>
                </div>
            
            `;
            document.querySelector('#row_card').innerHTML = getCard;
        })
        
        
    })
}
AddCard();

