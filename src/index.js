import './style.css';

console.log('funguju!');

// Chceme zařídit, aby se na úzkých displejích po kliknutí na hamburger ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač prvku nav odebere nebo přidá třídu nav-closed. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
// Navigaci budeme chtít schovat i po přesunutí na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
// Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const menuItemElm = document.querySelectorAll('nav-link');

for (let i = 0; i < menuItemElm.length; i += 1) {
  menuItemElm[i].addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed');
  });
}

// Zařiďte, aby fungovalo objednání nápoje. Momentálně máme na stránce jeden nápoj, capuccino, později jich však bude mnohem více.

// Na tlačíko se třídou order-btn pověste posluchač, při kliknutí změní nápis na tlačítku na Zrušit. Zároveň přidá na prvek se třídou drink__cup třídu drink__cup--selected.
// Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a změny na prvku .drink__cup i na tlačítku .order-btn se vrátily (odebrala se třída drink__cup--selected a vrátil se text tlačítka na Objednat). Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.
// Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.

const orderBtnElm = document.querySelector('.order-btn');
const drinCupElm = document.querySelector('.drink-cup');

let ordered = false;
orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinCupElm.classList.add('drink_cup--selected');
    ordered = true;
  } else if (ordered === true) {
    orderBtnElm.textContent = 'Objednat';
    orderBtnElm.classList.remove('drink_cup--selected');
    ordered = false;
  }
});
