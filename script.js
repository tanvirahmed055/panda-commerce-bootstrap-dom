//১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?
console.log("connected");



//২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const secondHeaders = document.getElementsByTagName('h2');

// console.log(secondHeaders);
for (const secondHeader of secondHeaders) {
    // console.log(secondHeader);
    secondHeader.style.color = 'lightblue';
}


