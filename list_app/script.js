const listItems = document.querySelectorAll('li');
const colors = [
    'whitesmoke',
    'aliceblue',
    'snow',
    'aquamarine',
    'springgreen',
    'violet',
    'tomato',
    'red',
    'coral',
    'yellow',
];


listItems.forEach((el, i) => {
    console.log(colors[ Math.random() * colors.length ]);
    el.style.background = colors[i];
});
