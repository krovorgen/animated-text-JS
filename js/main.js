const text = document.querySelector(".wrapper__title");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: false
})
.add({
    targets: '.wrapper__title span',
    translateY: [-600, 0], // 
    scale: [10, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})
.add({
    targets: '.wrapper__title span',
    translateX: [0, -1000], // 
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})
.add({
    targets: '.wrapper__title span',
    translateX: [1000, 0 ], // 
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})
.add({
    targets: '.wrapper__title span',
    translateX: [0, 0 ], // 
    scale: [1, 50],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})
/**
 * @param translateY - [start value, end value]
 * @param scale - [start value, end value]
 * @param opacity - [start value, end value]
 * @param duration 1500 - 1.5 seconds
 * @param loop - repeat
 */