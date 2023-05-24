let body = document.querySelector('body');
let transitionSection = document.createElement('section');
body.insertBefore(transitionSection, document.getElementById('description'));
transitionSection.setAttribute('id', 'text');
let text = document.createElement('p');
transitionSection.appendChild(text);
text.setAttribute('id', 'inner_text')
const titles = [
    'intrustor',
    'motivational speaker',
    'programmer',
    'content creator',
    'educator',
    'motivator'
];
/**
 * laptop icon gotten from  https://www.flaticon.com/free-icon/laptop_428001?term=laptop&page=1&position=5&origin=tag&related_id=428001
 * fire icon gotten from https://www.flaticon.com/free-icon/fire_599502?term=fire&page=1&position=2&origin=search&related_id=599502
 * open book icon gotten from https://www.flaticon.com/free-icon/open-book_2702172?term=book&page=1&position=52&origin=search&related_id=2702172
 * closed book icon gotten from https://www.flaticon.com/free-icon/book_763331?term=book&page=1&position=49&origin=search&related_id=763331
 */
const titleIcon = [
    "../Day27_Mini_Project_Portfolio/img/open-book.png", "../Day27_Mini_Project_Portfolio/img/fire.png",
    "../Day27_Mini_Project_Portfolio/img/laptop.png", "../Day27_Mini_Project_Portfolio/img/closedbook.png",
    "../Day27_Mini_Project_Portfolio/img/leaf.png", "../Day27_Mini_Project_Portfolio/img/fire.png"
];
const titleIconAlt = ["Book emoji", "Fire emoji", "Laptop emoji", "Closed Book emoji", "Leaf emoji", "Fire emoji"];
setInterval(displayAnimation, 1000);
function displayAnimation() {
    let index = Math.floor(Math.random() * titleIcon.length);
    const element = titles[index];
    text.textContent = '';
    let text_img = document.createElement('img');
    let text_title = document.createElement('p');
    text_title.setAttribute('id', 'text-title')
    text.appendChild(text_img);
    text.appendChild(text_title);
    text_title.textContent = element;
    text_img.setAttribute('src', titleIcon[index]);
    text_img.setAttribute('alt', titleIconAlt[index]);
}
const languages = ["Pandas", 'numpy', 'react', 'python', 'mongodb', 'javascript', 'redux', 'node']; 
let transitionSection2 = document.createElement('section');
body.appendChild(transitionSection2);
let p = document.createElement('p')
p.textContent = 'The technologies I teach ';
transitionSection2.appendChild(p);
setInterval(displaySpan, 2000);
function displaySpan() {
    p.textContent = 'The technologies I teach ';
    let span = document.createElement('span');
    let index = Math.floor(Math.random() * languages.length);
    span.textContent = languages[index].toUpperCase();
    span.setAttribute('id', 'language')
    p.appendChild(span);
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    span.style.color = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}