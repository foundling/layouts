const listItems = document.querySelectorAll('li');
const colors = [
    'snow',
    'aliceblue',
    'aquamarine',
    'springgreen',
    'violet',
    'tomato',
    'red',
    'orange',
    'yellow',
];


listItems.forEach((el, i) => {
    console.log(colors[ Math.random() * colors.length ]);
    el.style.background = colors[i];
});
