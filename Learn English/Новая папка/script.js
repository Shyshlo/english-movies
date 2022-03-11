const menuitem = document.querySelector('.menu__item');
const menuLink = document.querySelector('.menu__link');
menuLink.addEventListener('click', function(){
    menuLink.classList.add('menuLinkActive');
})


const motivationButton = document.querySelector('.motivation__btn');
const par = document.querySelector('.par');

const motivationQuotes = ['If you fall asleep now, you will dream. If you study now, you will live your dream', 'When you think it’s too late, the truth is, it’s still early', 'It’s those who are earlier than the others, those who put in more effort, who can enjoy the feeling of success', 'Not everyone can truly succeed in everything. But success only comes with self-management and determination', 'In order to succeed, we must first believe that we can', 'Only I can change my life. No one can do it for me', 'Genius is one percent inspiration, and ninety-nine percent perspiration', 'The way to get started is to quit talking and begin doing', 'A pessimist sees the difficulty in every opportunity. An optimist sees the opportunity in every difficulty', 'The people who are crazy enough to think they can change the world are the ones who do ', 'Action is the foundational key to all success', `You don't have to be great to start, but you have to start to be great`];
motivationButton.addEventListener('click', function(){
    let randomQuote = motivationQuotes[Math.floor(Math.random()* motivationQuotes.length)];
   
    par.textContent = randomQuote;
    par.style.display = 'block';
});

const englishQuotesButton = document.querySelector('.motivation__btn-english');
const pare = document.querySelector('.pare');

    const englishqoutes = ['Get a better paying job.', 'Find partners and suppliers at international exhibitions.', 'Participate in international conferences and trainings.', 'Use foreign sites.', 'Travel on business trips to other countries.', 'Travel on your own', `Don't overpay for hotels.`, 'Read labels and buy what you need.', 'Learn about culture and traditions from locals, not guides.', 'Make friends in different countries.', 'Get an international education', 'Go live abroad', 'There is no need to wait for the episode of your favorite TV series / film to be translated.', 'Watch movies in the original and understand humor.', 'Play games and use applications in English.', 'Watch news from English-speaking countries.', 'Buy goods in foreign online stores', 'Sing your favorite songs and understand what you are singing.'];
    englishQuotesButton.addEventListener('click', function(){
    let randomQuoteenglish = englishqoutes[Math.floor(Math.random()* englishqoutes.length)];
   

    pare.textContent = randomQuoteenglish;
    pare.style.display = 'block';

});



//название теста с пом эффекта печ букв
let textletters = "Let's check the level of English?";
let x = 0;
let speed = 150;

function letters() {
    if (x < textletters.length) {
        document.querySelector('.test__letters').textContent += textletters.charAt(x);
        x++;
        setTimeout(letters, speed);
    }
}
letters();




//Далее тест
const btnAnswer = document.querySelector('.test__btn-answer');
btnAnswer.addEventListener('click', results);


function results(e) {
    e.preventDefault();
    let points = 0;
    if(document.querySelector('#answer1').checked) {
        points++;
    }
    if(document.querySelector('#answer2').checked) {
        points++;
}
if(document.querySelector('#answer3').checked) {
    points++;
}
if(document.querySelector('#answer4').checked) {
    points++;
}
if(document.querySelector('#answer5').checked) {
    points++;
}
if(document.querySelector('#answer6').checked) {
    points++;
}
if(document.querySelector('#answer7').checked) {
    points++;
}
if(document.querySelector('#answer8').checked) {
    points++;
}
if(document.querySelector('#answer9').checked) {
    points++;
}
if(document.querySelector('#answer10').checked) {
    points++;
}
const btnLevel = document.querySelector('.test__btn-level');
const par = document.querySelector('#show');
par.textContent = 'Ваши баллы: ' + points;
btnLevel.addEventListener('click',function(e) {
 e.preventDefault();
 //! if чтобы определить уровень
if (points === 10) {
    Swal.fire({
        title: 'Your level - Advanced (C1)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
else if (points >= 7 && points <= 9) {
        Swal.fire({
            title: 'Your level - Upper Intermediate (B2)',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (points >= 4 && points <= 6) {
        Swal.fire({
            title: 'Your level - Intermediate (B1)',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    else if (points >= 3 && points <= 5) {
        Swal.fire({
            title: 'Your level - Elementary (A2)',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
else {
    Swal.fire({
        title: 'You should devote more time to English!!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}


})
const correctButton = document.querySelectorAll('span');
/*const rightAnswer = document.querySelector('.test__btn-rightAnswer');
rightAnswer.addEventListener('click', function(){
    */
correctButton.forEach(item => {
    item.classList.add('trueAnswer')
})

}
/*const screen = document.querySelector('.screen');
const par = document.querySelector('#show');
par.textContent = 'Ваши баллы: ' + points;
if (points < 15) {
    correctButton.addEventListener('click', function(e){
        e.preventDefault();
        screen.style.display = 'block';
    })
}
}
*/





//Меняем цвет вопросов через 1
const list = document.querySelectorAll('label');
function changeColor() {
  
    for (let k = 0; k < list.length; k++) {
        if (k%2 === 0)
        list[k].classList.add('blue');

    }
}
changeColor();



//Далее поиск фильмов
const searchInput = document. querySelector('.search');
const films = document.querySelectorAll('.movie');

searchInput.addEventListener('keyup', function(event){
    const text = event.target.value.toLowerCase();
    
    films.forEach(item =>{
        item.querySelector('p').textContent.toLowerCase().includes(text) ?
        (item.style.display = 'block') :
        (item.style.display = 'none');
    })
});



const containerMore = document.querySelector('.container-more');
const buttonMore = document.querySelector('.link-more'); 

buttonMore.addEventListener('click', function(){
    containerMore.style.display = 'flex';
})

//фразовые глаголы
const translateVerbs1 = document.querySelector('.translateVerbs1');
const buttonCard1 = document.querySelector('.buttonCard1');
buttonCard1.addEventListener('click', function() {
    translateVerbs1.style.display = 'block';
});
const translateVerbs2 = document.querySelector('.translateVerbs2');
const buttonCard2 = document.querySelector('.buttonCard2');
buttonCard2.addEventListener('click', function() {
    translateVerbs2.style.display = 'block';
});       
  
const translateVerbs3 = document.querySelector('.translateVerbs3');
const buttonCard3 = document.querySelector('.buttonCard3');
buttonCard3.addEventListener('click', function() {
    translateVerbs3.style.display = 'block';
});  
const translateVerbs4 = document.querySelector('.translateVerbs4');
const buttonCard4 = document.querySelector('.buttonCard4');
buttonCard4.addEventListener('click', function() {
    translateVerbs4.style.display = 'block';
});  
const translateVerbs5 = document.querySelector('.translateVerbs5');
const buttonCard5 = document.querySelector('.buttonCard5');
buttonCard5.addEventListener('click', function() {
    translateVerbs5.style.display = 'block';
});  
const translateVerbs6 = document.querySelector('.translateVerbs6');
const buttonCard6 = document.querySelector('.buttonCard6');
buttonCard6.addEventListener('click', function() {
    translateVerbs6.style.display = 'block';
});  
const translateVerbs7 = document.querySelector('.translateVerbs7');
const buttonCard7 = document.querySelector('.buttonCard7');
buttonCard7.addEventListener('click', function() {
    translateVerbs7.style.display = 'block';
});  
const translateVerbs8 = document.querySelector('.translateVerbs8');
const buttonCard8 = document.querySelector('.buttonCard8');
buttonCard8.addEventListener('click', function() {
    translateVerbs8.style.display = 'block';
});  
const translateVerbs9 = document.querySelector('.translateVerbs9');
const buttonCard9 = document.querySelector('.buttonCard9');
buttonCard9.addEventListener('click', function() {
    translateVerbs9.style.display = 'block';
});  
const translateVerbs10 = document.querySelector('.translateVerbs10');
const buttonCard10 = document.querySelector('.buttonCard10');
buttonCard10.addEventListener('click', function() {
    translateVerbs10.style.display = 'block';
});  
const translateVerbs11 = document.querySelector('.translateVerbs11');
const buttonCard11 = document.querySelector('.buttonCard11');
buttonCard11.addEventListener('click', function() {
    translateVerbs11.style.display = 'block';
});  
const translateVerbs12 = document.querySelector('.translateVerbs12');
const buttonCard12 = document.querySelector('.buttonCard12');
buttonCard12.addEventListener('click', function() {
    translateVerbs12.style.display = 'block';
});  

const linkMoreVerbs = document.querySelector('.link-moreVerbs');
const containerVerbs = document.querySelector('.phraselVerbs__container-more');

linkMoreVerbs.addEventListener('click', function() {
    containerVerbs.style.display = "flex";
})



//Далее плей-лист
function playArray() {
    const audio = document.querySelector('audio');
    const button = document.querySelector('.play');
 
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const par = document.querySelector('.songname');
   

    const songs = [
        {name: `Keane — everybody changing`,
        path: 'https://cdn.glitch.me/015c5d1a-3e7d-4441-9347-9281e7fc5172%2FKeane%20%E2%80%94%20Everybodys%20Changing.mp3?v=1639224789317'},
        {name: `Lp — lost on you`,
        path: 'https://cdn.glitch.me/015c5d1a-3e7d-4441-9347-9281e7fc5172%2Flaura-pergolizzi-lost-on-you_(tetamix.org).mp3?v=1639224825442'},
        {name: `Queen - Bohemian rhapsody`,
        path: 'https://cdn.glitch.me/015c5d1a-3e7d-4441-9347-9281e7fc5172%2Fbohemian_rhapsody_07.%20Queen%20-%20Bohemian%20Rhapsody.mp3?v=1639224724943'},
        {name: `Queen - I want to break free`,
        path: 'https://cdn.glitch.me/015c5d1a-3e7d-4441-9347-9281e7fc5172%2Fmuzlome_Queen_-_I_Want_To_Break_Free_47828518.mp3?v=1639224872461'},
        {name: `Feel - Robbie Williams`,
        path: 'https://cdn.glitch.me/015c5d1a-3e7d-4441-9347-9281e7fc5172%2Frobbie_williams-feel.mp3?v=1639224935940'},
        {name: `Love Runs Out - One Republic`,
        path: 'https://cdn.glitch.me/015c5d1a-3e7d-4441-9347-9281e7fc5172%2FOne%20Republic%20-%20Love%20Runs%20Out%20%20(mp3store.cc).mp3?v=1639224905371'},
    ];

    const text = ["text1", "text2", "text3", "text4", "text5", "text6"]

let i = 0;
audio.src = songs[i].path;
par.textContent = songs[i].name;

audio.addEventListener('ended', () => {
    i++;
    if (i >= songs.length) {
        i = 0;
   
        button.classList.toggle('pause');
    }
   
    else if (audio.paused){
    audio.play();
    
    button.classList.toggle('pause');
    }
    else {
        audio.pause();
        button.classList.toggle('pause');
    }

    audio.src = songs[i].path;
    par.textContent = songs[i].name;
   
})


prev.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = songs.length - 1;
    }
    document.querySelector("#text").innerHTML = text[i];
    audio.src = songs[i].path;
    par.textContent = songs[i].name;
    button.classList.add('pause');
})

next.addEventListener ('click', () => {
    i++;
    if (i >= songs.length) {
        i = 0;
    }
    document.querySelector("#text").innerHTML = text[i];
    audio.src = songs[i].path;
    par.textContent = songs[i].name;
    button.classList.add('pause');
})

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        button.classList.toggle('pause');
    }
    else {
        audio.pause();
        button.classList.toggle('pause');
    }
})
}
playArray();