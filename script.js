const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

var elems = document.querySelectorAll(".page-dhai .elem");
var main = document.querySelector(".page-dhai");

elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimg = ele.getAttribute("data-img");
        main.style.backgroundImage = `url(${bgimg})`;
        main.style.backgroundSize = "cover"
        // console.log(bgimg)
    });
});


Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "13vh",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true ,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});


// function menuBar() {
//     var menu = document.querySelector("#menu")
//     var home = document.querySelector(".home-container")
//     var close = document.querySelector("#close")
//     var flag = 0

//     menu.addEventListener("click", function () {
//         // console.log('HIEE');
//         home.style.display = "block"
//         gsap.from(".home-container", {
//             y: -1000,
//             duration: 0.5,
//         })
//         flag == 1

//     })
//     close.addEventListener("click", function () {
//         gsap.to(".home-container", {
//             y: -1000,
//             duration: 0.5,
//         })
//         home.style.display = "none"
//     })
// }
// menuBar()

function menuBar() {
    var menu = document.querySelector("#menu");
    var home = document.querySelector(".home-container");
    var close = document.querySelector("#close");

    menu.addEventListener("click", function () {
        home.style.display = "block";
        gsap.fromTo(".home-container",
            { y: -1000 },
            { y: 0, duration: 0.5 }
        );
    });

    close.addEventListener("click", function () {
        gsap.to(".home-container", {
            y: -1000,
            duration: 0.5,
            onComplete: function () {
                home.style.display = "none";
            }
        });
    });
}

menuBar();

function loader() {
    var loading = document.querySelector(".loader .left h2");
    var vid = document.querySelector(".loader .mid video");
    var tl = gsap.timeline()
    var clutter = 0
    const interval = setInterval(function () {
        if (clutter <= 100) {
            clutter++;
        }

        if (clutter == 100) {
            clearInterval(interval)
        }

        loading.innerHTML = `<h2>${clutter}</h2>`
    }, 30);

    tl.from(vid, {
        width: 0,
        duration: 1.2
    })

    tl.to(".loader .left , .loader .right", {
        display: "none"
    }, "+=2")

    tl.to(vid, {
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        duration: 0.5
    })

    tl.to(".main", {
        display: "initial",
    })

    tl.from("nav", {
        opacity: 0,
        duration: 0.2,
        scrub: true
    })


    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        scrub: true
    })

}

loader()

function kuch() {
    var hover = document.querySelectorAll(".home .part")
    var images = document.querySelectorAll(".home img")
    var h2s = document.querySelectorAll(".home h2")
    
    hover.forEach(function (part, index) {
        var image = images[index];
        part.addEventListener("mousemove", function (dets) {
            image.style.display = "block"
            image.style.left = dets.clientX + "px"
            image.style.top = dets.clientY + "px"
        })
        part.addEventListener("mouseleave", function () {
            image.style.display = "none"
        })
    })
    
}

kuch()

var swiper = new Swiper("#first", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiperDiv .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiperDiv .swiper-button-next",
        prevEl: ".swiperDiv .swiper-button-prev",
    },
});

var swiper = new Swiper(".wrapper .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".wrapper .mySwiper2", {
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".wrapper .swiper-button-next",
        prevEl: ".wrapper .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

var swiper = new Swiper(".page2 .mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".page2 .swiper-pagination",
    },
    navigation: {
        nextEl: ".page2 .swiper-button-next",
        prevEl: ".page2 .swiper-button-prev",
    },
});


var swiper = new Swiper(".page3 .up .mySwiper", {
    navigation: {
        nextEl: ".page3 .swiper-button-next",
        prevEl: ".page3 .swiper-button-prev",
    },
});


// var btn = document.querySelector("review button div")
// document.querySelector("review button").addEventListener("click",function(){
//     btn.style.transform = "translateY(-50px);"
// })



function sheryeffect() {
    Shery.imageEffect(" .upper img", {
        style: 3,
        // debug: true,
        config: { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": "9996999", "range": [-9999999, 9999999] }, "aspect": { "value": null }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
    });
}
function sheryeffect2() {
    Shery.imageEffect(" .lower img", {
        style: 3,
        // debug: true,
        config: { "uFrequencyX": { "value": 12, "range": [0, 100] }, "uFrequencyY": { "value": 12, "range": [0, 100] }, "uFrequencyZ": { "value": 10, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": "9996999", "range": [-9999999, 9999999] }, "aspect": { "value": null }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
    });
}

sheryeffect();
sheryeffect2();

// gsap.from(".swiperDiv",{
//     opacity: 0,
//     scrollTrigger : {
//         scroller: "body",
//         trigger : ".page1",
//         start: "top -20%",
//         end : "top -40%",
//         // markers : true,
//         scrub: true
//     }
// })

// gsap.from(".page2 h1",{
//     opacity:0,
//     scrollTrigger : {
//         scroller: "body",
//         trigger : ".page2",
//         start: "top 20%",
//         end : "top 100px",
//         markers : true,
//         scrub: true
//     }
// })