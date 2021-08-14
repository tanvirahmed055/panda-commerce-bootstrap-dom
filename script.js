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

