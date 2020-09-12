'use strict';

const redBadge = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const message = document.getElementById('chat-widget__messages');

function getDateAndTime() {
    return new Date().toLocaleTimeString('sk-SK', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    });
}

let phrases = ['Kto je to?', 'Čo, nemáte svedomie?', 'Neodchadzajte, o chvíľu som späť', 'Nevyrušujte, rozmýšľam.', 
'Podobné niečo som teda ešte nezažil, a tu zas.', 'Ta to co je?', 'Život je krásny! Jasné, že nie môj, ale predsa len...', 'Občas sa stáva, že nerozumiem, čo sa okolo mňa deje. Zvyšný čas prespím.', 'Hľa, teraz vám vôbec nerozumiem.', 'Naozaj nie ste bot?', 'To nemyslíte vážne!', 'Ste si istí?', 'To nestojí za reč.', 'No teda!', 'No určite!', 'Neberte to tak vážne.', 'Neberte to osobne.', 'Dojímate ma.', 'To je na zamyslenie.', 'Hádam ste sa neurazili.'];

redBadge.addEventListener('click', function() {
    redBadge.classList.add('chat-widget_active');
});

chatInput.addEventListener('change', sendMessage);

function sendMessage(event) {
    message.innerHTML += `
    <div class='message message_client'>
    <div class='message__time'>${getDateAndTime()}</div>
    <div class='message__text'>${event.target.value}</div>
    </div>`;
    event.target.value = '';
    getReplyBot(phrases);
}

function getReplyBot(phrases) {
    const random = Math.floor(Math.random() * phrases.length);

    message.innerHTML += `
    <div class='message'>
    <div class='message__time'>${getDateAndTime()}</div>
    <div class='message__text'>${phrases[random]}</div>
    </div>`;
}