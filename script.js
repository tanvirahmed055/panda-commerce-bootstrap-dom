//১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?
console.log("connected");



//২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const secondHeaders = document.getElementsByTagName('h2');

// console.log(secondHeaders);
for (const secondHeader of secondHeaders) {
    // console.log(secondHeader);
    secondHeader.style.color = 'lightblue';
}


//৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
const backpackSection = document.getElementById('backpack');

backpackSection.style.backgroundColor = 'tomato';


//৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.style.borderRadius = '30px';
}

//৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 


document.getElementById('buy-button-clicked').addEventListener('click', function () {
    console.log("button clicked");
})


//৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 


//for slider buttons
const sliderItems = document.getElementsByClassName('panda-btn-buy-now');
for (const sliderItem of sliderItems) {
    sliderItem.addEventListener('click', function (event) {


        //eita diye parentNode konta click kore ber korsi. See delegate video if needed.
        // console.log(event.target.parentNode);



        event.target.parentNode.removeChild(event.target);

    });
}


//for shoes and backpack section buttons
const items = document.getElementsByClassName('card');
for (const item of items) {
    item.addEventListener('click', function (event) {
        // document.getElementById('item-container').removeChild(item);
        event.target.parentNode.removeChild(event.target);
    });
}