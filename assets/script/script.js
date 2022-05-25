
// div yaratmaq
let div1 = document.createElement('div');

// yaratdigimiz dive class ve adini qoymaq
div1.classList.add('wrapper');

// onu body teginə yerləşdirmək
let body = document.querySelector('body');
body.appendChild(div1);

body.style.backgroundColor = 'antiquewhite';

// h1 de olan soz yaratmaq
let tittle =document.createElement('h1');
tittle.textContent='Salam';

// h1 i wrapper divine elave etmek
div1.insertAdjacentElement('afterbegin',tittle);

// ul listini elave etmek
// ve ul listine 1,2,3 yazmaq
let ul1 = `
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

`;

// yaratdigimiz ul listleri wrapper divine qoymaq innerhtml ile
div1.innerHTML = ul1;

//#region img setting
// img yaratmaq
let img1 = document.createElement('img');

// 1.img source-unu elave etmek
img1.src='https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg';

// 2. wekilin width-ni 240 qurawdirmaq
img1.width=240;

// 3. wekile class elave etmek
img1.classList.add('maral');

// 4. wekilin alt-ni elave etmek
img1.alt='maral';

// wekili wrapper classina elave etmek
div1.appendChild(img1);

//#endregion

//#region paragraph
//2 p olan classli div yaratmak html den istifade ederek

let prgrph = `
<div class=doubleP>
    <p>Paragraph1</p>
    <p>Paragraph2</p>
</div>
`;

//paragrafi ul-lerin evveline yerlewdirmek
let ulList = div1.querySelector('ul')
ulList.insertAdjacentHTML('beforebegin',prgrph);

//paragrafin classina girmek
let doubleP = document.querySelector('.doubleP');//<----class adindan olacaqsa noqte qoyub gotureceyik

//paragrafin classina girib 2 ci paragrafa class vermek
doubleP.children[1].classList.add('doubleP-P2')

//paragrafin classina girib 1 ci paragrafi silmek
doubleP.firstElementChild.remove();

//#endregion

//#region Auto Card
//generateAutoCard funksiyasi,
//hansi ki 3 arqument goturur: brand,color,year

let generateAutoCard = (brand,color,year) =>{
    return`
    <div class="autoCard">
        <h2>BRAND YEAR</h2>
        <p>Avtomobil - BRAND - YEAR ili. avtonun - YEARS yawi var.</p>
    </div>
    `;
}

//adi autos olaraq carsdiv yaratmaq
let carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

//3 arqumente dolduran bir array generateAutoCard funksiyasina yerlewdirmek ucun
let carsList=[
    {brand:'Tesla',year: 2015,color:'red'},
    {brand:'Lexus',year:2016,color:'silver'},
    {brand:'Nissan',year:2012,color:'white'}
]



//#endregion

