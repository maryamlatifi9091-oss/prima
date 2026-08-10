

// متغیرها
const menuButton = document.querySelector(".drop-down-menu");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".drop-down-menu i");
const header = document.querySelector("header");
const menuItems = document.querySelectorAll(".menu li");
const backToTop = document.querySelector(".back-to-top");

// const cards = document.querySelectorAll(".popular-container article");
const typing = document.querySelector(".typing");
const text = "همراه رشد و توسعه استارتاپ‌های نوآور";
let index = 0;
const videoButton = document.querySelector(".video-button a");
const videoModal = document.querySelector(".video-modal");
const closeModal = document.querySelector(".close-modal");
const modalContent = document.querySelector(".modal-content");
const videoFrame = document.querySelector(".modal-content iframe");
const slider = document.querySelector(".slider");
const sliderTitle = document.querySelector(".slider-title");
const sliderDescription = document.querySelector(".slider-description");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
const dotsContainer = document.querySelector(".slider-dots");
const searchButton = document.querySelector(".search a");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");
const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
const fullName = document.querySelector(".full-name");
const searchBtn = document.querySelector(".search-btn");
const nameError = document.querySelector(".name-error");
const mobileNumber = document.querySelector(".mobile-number");
const mobileError = document.querySelector(".mobile-error");
const usersContainer = document.querySelector(".users-container");
const loading = document.querySelector(".loading")

let currentSlide = 0;
let startX = 0;
let endX = 0;
let searchItems = [];


// آرایه ها
const slides = [
    {
        image: "images/slider1.png",
        title: "پرایما همراه مسیر رشد شما",
        description: "آموزش و منتورینگ تا جذب سرمایه"
    },
    {
        image: "images/slider2.png",
        title: "از ایده تا استارتاپ موفق",
        description: "همراه شما در مسیر رشد و توسعه"
    },
    {
        image: "images/slider3.png",
        title: "شبکه‌ای از منتورها و متخصصان",
        description: "تجربه، سرمایه و آموزش در کنار هم"
    }
];


// const searchItems = [

//     "شتابدهنده پرایما",

//     "جذب سرمایه",

//     "سرمایه گذاری",

//     "منتورینگ",

//     "آموزش استارتاپ",

//     "مدل کسب و کار",

//     "توسعه محصول",

//     "بازاریابی دیجیتال",

//     "کارآفرینی",

//     "استارتاپ"

// ];
// const searchItems = [

//     {
//         title: "شتابدهنده پرایما",
//         link: "#hero"
//     },

//     {
//         title: "جذب سرمایه",
//         link: "#investment"
//     },

//     {
//         title: "سرمایه گذاری",
//         link: "#investment"
//     },

//     {
//         title: "منتورینگ",
//         link: "#mentor"
//     },

//     {
//         title: "آموزش استارتاپ",
//         link: "#education"
//     },

//     {
//         title: "مدل کسب و کار",
//         link: "#business"
//     },

//     {
//         title: "توسعه محصول",
//         link: "#product"
//     },

//     {
//         title: "بازاریابی دیجیتال",
//         link: "#marketing"
//     },

//     {
//         title: "کارآفرینی",
//         link: "#entrepreneurship"
//     },

//     {
//         title: "استارتاپ",
//         link: "#startup"
//     }

// ];


slides.forEach(function () {

    const dot = document.createElement("button");

    dotsContainer.appendChild(dot);

});



const dots = document.querySelectorAll(".slider-dots button");





// تابع عا
// function showSlide(index){

//     slider.style.backgroundImage = `url(${slides[index].image})`;

//     sliderTitle.textContent = slides[index].title;

//     sliderDescription.textContent = slides[index].description;

// }

// showSlide(currentSlide);
function showSlide(index) {

    slider.style.backgroundImage =
        `url(${slides[index].image})`;

    sliderTitle.textContent =
        slides[index].title;

    sliderDescription.textContent =
        slides[index].description;

    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });

    dots[index].classList.add("active");

}
showSlide(currentSlide);



function closeVideoModal() {
    videoModal.classList.remove("show");
    videoFrame.src = videoFrame.src;

}



// رویدادها

// 1:باز و بسته شدن منوی همبرگری
// 2:تبدیل  همبرگر به ضربدر وقتی منو باز میشود
menuButton.addEventListener("click", function () {

    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
});


// 3:بستن منو با کلیک بیرون منو
document.addEventListener("click", function (event) {

    if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target) &&
        menu.classList.contains("active")
    ) {
        menu.classList.remove("active");
        icon.classList.replace("fa-times", "fa-bars");
    }

});


// بستن منو با فشار دادن کلید escape کیبورد
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && menu.classList.contains("active")) {

        menu.classList.remove("active");
        icon.classList.replace("fa-times", "fa-bars");

    }

});



// تغییر رنگ heder هنگام اسکرول
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        console.log("scrolled");

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});




// بستن منوی موبایل با کلیک روی آیتم
menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        menu.classList.remove("active");

        icon.classList.replace("fa-times", "fa-bars");

    });

});






// دکمه ی back to top
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});






// چاپ کردن هر شش article در console
// cards.forEach(function(card){

//     console.log(card);

// });



// چاپ کردن مختصات و موقعیت کارت فعلی
// cards.forEach(function(card){

//     const position = card.getBoundingClientRect();

//     console.log(position);

// });




// scroll Reveal
// window.addEventListener("scroll", function () {

//     cards.forEach(function (card) {

//         const position = card.getBoundingClientRect();

//         if (position.top < window.innerHeight - 150) {
//             card.classList.add("show");

//         }

//     });

// });





// برای اینکه دستور قبلی فقط یکبار اجرا شود
// window.addEventListener("scroll", function () {

//     cards.forEach(function (card) {

//         if(card.classList.contains("show")){
//             return;
//         }

//         const position = card.getBoundingClientRect();

//         if(position.top < window.innerHeight){

//             card.classList.add("show");

//         }

//     });

// });






// افکت typing


// function typeWriter() {

//     if(index < text.length){

//         typing.textContent += text[index];

//         index++;

//         setTimeout(typeWriter,100);

//     }

// }

// typeWriter();






// باز شدن modal
videoButton.addEventListener("click", function (event) {

    event.preventDefault();

    videoModal.classList.add("show");

});




// بستن modal
closeModal.addEventListener("click", function () {

    // videoModal.classList.remove("show");
    closeVideoModal();

});



// بستن Modal با کلیک روی فضای تاریک
videoModal.addEventListener("click", function (event) {

    if (event.target === videoModal) {

        // videoModal.classList.remove("show");
        closeVideoModal();

    }

});




// بستن ویدیو با Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && videoModal.classList.contains("show")) {

        // videoModal.classList.remove("show");
        closeVideoModal();

    }

});







// ویداد کلیک روی دکمه Next
// nextBtn.addEventListener("click", function () {

//     currentSlide++;

//     if (currentSlide >= slides.length) {

//         currentSlide = 0;

//     }

//     showSlide(currentSlide);

// });



// رویداد کیک روی دکمه next اسلایدر
nextBtn.addEventListener("click", function () {


    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});




// رویداد کلیک روی دکمه prev اسلایدر
prevBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});




// رویداد کلیک روی دایره‌های اسلایدر
dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        currentSlide = index;

        showSlide(currentSlide);

    });

});




// Auto play یا تغییر خودکار اسلاید
// setInterval(function () {

//     nextBtn.click();

// }, 5000);





// توقف Auto Play وقتی ماوس روی اسلایدر می‌رود
// let sliderTimer = setInterval(function () {

//     nextBtn.click();

// }, 5000);


let sliderTimer;


function startAutoPlay() {

    sliderTimer = setInterval(function () {

        nextBtn.click();

    }, 5000);

}

startAutoPlay();


// وقتی ماوس روی اسلایدر هست Auto play متوقف شود
slider.addEventListener("mouseenter", function () {

    clearInterval(sliderTimer);

});


// وقتی ماوس از روی اسلایدر کنار میرود Auto play اجرا شود
slider.addEventListener("mouseleave", function () {

    startAutoPlay();

});




// رغتن به اسلاید بعدی با کلید ArrowRight
document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {

        nextBtn.click();

    }

});




document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowLeft") {

        prevBtn.click();

    }

});




// رویداد touchstart
slider.addEventListener("touchstart", function (event) {

    startX = event.touches[0].clientX;

});



// slider.addEventListener("touchend", function (event) {

//     endX = event.changedTouches[0].clientX;

// });

slider.addEventListener("touchend", function (event) {

    endX = event.changedTouches[0].clientX;

    if (Math.abs(startX - endX) > 50) {

        if (startX > endX) {

            nextBtn.click();

        } else {

            prevBtn.click();

        }

    }

});






// باز و بسته شدن کادر جستجو با کلیک روی آیکون ذره بین و Auto Focus:
searchButton.addEventListener("click", function (event) {

    event.preventDefault();

    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {

        searchInput.focus();

    }

});


// بستن Search با کلیک بیرون از آن
document.addEventListener("click", function (event) {

    if (

        !searchBox.contains(event.target) &&

        !searchButton.contains(event.target) &&

        !nextBtn.contains(event.target) &&
        
        !prevBtn.contains(event.target)

    ) {

        searchBox.classList.remove("active");

    }

});



// رویداد تایپ
// searchInput.addEventListener("input", function () {

//     console.log(searchInput.value);

// });


searchInput.addEventListener("input", function () {

    if (searchInput.value.trim() === "") {

        searchResults.innerHTML = "";

        return;

    }


    const results = searchItems.filter(function (item) {

        return item.title.includes(searchInput.value.trim());

    });

    console.log(results);
    console.log(results.length);

    searchResults.innerHTML = "";

    if (results.length === 0) {

        const li = document.createElement("li");

        li.textContent = "موردی پیدا نشد.";

        searchResults.appendChild(li);

        return;

    }

    results.forEach(function (item) {

        const li = document.createElement("li");

        li.textContent = item.title;

        li.addEventListener("click", function () {

            searchInput.value = item.title;

            searchResults.innerHTML = "";

            window.location.href = item.link;

        });

        searchResults.appendChild(li);

    });

});




// سوالات متداول(Accordion)
// faqQuestion.addEventListener("click", function(){

//     if(faqAnswer.style.display === "block"){

//         faqAnswer.style.display = "none";

//     }else{

//         faqAnswer.style.display = "block";

//     }

// });

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer =
            this.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});


// form validation:


// searchBtn.addEventListener("click", function(){

//     if(fullName.value.trim() === ""){

//         alert("لطفاً نام خود را وارد کنید.");

//     }

// });
searchBtn.addEventListener("click", function (event) {

    event.preventDefault();

    if (fullName.value.trim() === "") {

        nameError.textContent =
            "لطفاً نام خود را وارد کنید.";

    } else {

        nameError.textContent = "";

    }

    if (mobileNumber.value.trim() === "") {

        mobileError.textContent =
            "لطفاً شماره موبایل را وارد کنید.";

    } else if (isNaN(mobileNumber.value)) {

        mobileError.textContent =
            "شماره موبایل فقط باید شامل عدد باشد.";

    } else if (mobileNumber.value.length !== 11) {

        mobileError.textContent =
            "شماره موبایل باید 11 رقم باشد.";

    } else if (!mobileNumber.value.startsWith("09")) {

        mobileError.textContent =
            "شماره موبایل باید با 09 شروع شود.";

    } else {

        mobileError.textContent = "";

    }

});


// ذخیره اطلاعات در مرورگر
fullName.addEventListener("input", function () {

    localStorage.setItem(
        "userName",
        fullName.value
    );

});

fullName.value =
    localStorage.getItem("userName");



// پاک کردن اطلاعات
searchBtn.addEventListener("click", function () {

    localStorage.removeItem("userName");

});



// fetch AI

// fetch("data.json")
// .then(function(response){

//     return response.json();

// })
// .then(function(data){

//     searchItems = data;

// });


// Async/Await:


async function getData() {

    try {

        const response =
            await fetch("data.json");

        const data =
            await response.json();

        searchItems = data;

        console.log(searchItems);

    } catch (error) {

        console.log("خطا در دریافت اطلاعات");

    }

}

getData();



// APIکاربران
async function getUsers() {

    try {

        loading.style.display = "block";

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const users =
            await response.json();

        users.forEach(function (user) {

            usersContainer.insertAdjacentHTML(
                "beforeend",

                `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
            `
            );

        });

    } catch (error) {

        console.log("خطا");

    } finally {

        loading.style.display = "none";

    }

}

getUsers();
















