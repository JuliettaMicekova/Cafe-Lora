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
const drinCupElm = document.querySelector('.drink__cup');

let ordered = false;
orderBtnElm.addEventListener('click', () => {
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    drinCupElm.classList.add('drink_cup--selected');
    ordered = true;
  } else if (ordered === true) {
    orderBtnElm.textContent = 'Objednat';
    drinCupElm.classList.remove('drink_cup--selected');
    ordered = false;
  }
});

// Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme přepisovat kód tak, aby ingredience (vrstva) byla komponenta.

// V hlavním souboru index.js vytvořte komponentu Layer, která očekává props v následujícím tvaru.
// {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// }
// Podívejte se do index.html na strukturu jednotlivých layers. Komponenta nechť vrací řetězec obsahující výsledné HTML pro jednu vrstvu. V index.html si jednotlivé ingredience pro capuccino (divy .layer) zakomentujte nebo smažte.
// Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři dané ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
// Skvělá práce! Teď si komponentu Layer přesuneme do samostatné složky. Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. V této složce bude index.js a style.css V souboru index.js bude JavaScriptový kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
// Z hlavního souboru style.css přesuňte do CSS styly, které se týkají komponenty Layer do našeho nového style.css ve složce Layer. Nezapomeňte váš CSS soubor správně importovat do index.js aby jej Webpack zahrnul do výsledného sestavení.
// Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.

// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

const layerElm = document.querySelector('.drink__info');

const Layer = (props) => {
  return `<div class="layer">
<div class="layer__color"
  style="background-color:${props.color}></div>
<div class="layer__label">${props.label}</div>
</div>`;
};

layerElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
layerElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
layerElm.innerHTML += Layer({ color: '#613916', label: 'espresso' });
