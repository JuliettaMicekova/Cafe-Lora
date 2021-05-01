import './style.css';

console.log('funguju!');

// Chceme zařídit, aby se na úzkých displejích po kliknutí na hamburger ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač prvku nav odebere nebo přidá třídu nav-closed. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
// Navigaci budeme chtít schovat i po přesunutí na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
// Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const menuElm = document.querySelectorAll('.nav-link');

for (let i = 0; i < menuItemElm.length; i += 1) {
  menuItemElm[i].addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('nav-closed');
  });
}
