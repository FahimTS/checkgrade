let result = document.getElementById('result');
let check = document.getElementById('btn');
let input = document.getElementById('input');

function checkResult(){
    let text = parseInt(input.value);
    if((text <= 0)){
        result.innerHTML = `${text} is not a valid number`;
    }else if(text <= 32){
        result.innerHTML = `You have got 0 i.e. Failed`;
    }else if(text <= 39){
        result.innerHTML = `You have got 1 i.e. GPA D`;
    }else if(text <= 49){
        result.innerHTML = `You have got 2 i.e. GPA C`;
    }else if(text <= 59){
        result.innerHTML = `You have got 3 i.e. GPA B`;
    }else if(text <= 69){
        result.innerHTML = `You have got 3.5 i.e. GPA A-`;
    }else if(text <= 79){
        result.innerHTML = `You have got 4 i.e. GPA A`;
    }else if(text <= 100){
        result.innerHTML = `You have got 5 i.e. GPA A+`;
    }else{
        result.innerHTML = `Please enter the number`;
    }
}

check.addEventListener('click', () => {
    checkResult()
})

let demo = document.getElementById('demo');

// ব্রাউজারে IP ঠিকানা প্রাপ্ত করতে
function getIPAddress() {
    // এই API ব্যবহার করে ব্যবহারকারীর IP প্রদান করে
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        demo.innerHTML = `Your IP address: ${data.ip}`
        console.log('আপনার IP ঠিকানা:', data.ip);
      })
      .catch(error => {
        demo.innerHTML = `IP address problem:', ${error}`;
      });
  }
  
  // ফাংশন কল করুন
  getIPAddress();

function getDay(){
    let date = new Date();
    let geetings = date.getHours();
    let show = result;
    if(geetings > 5 && geetings < 12){
        show.innerHTML = `Hi! Good Morning`;
    }else if(geetings >= 12 && geetings < 18){
        show.innerHTML = `Hi! Good Afternoon`;
    }else{
        show.innerHTML = `Hi! Good Night`;
    }
};

getDay()