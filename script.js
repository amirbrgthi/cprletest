// console.log("123");

// // 1. On utilise les backticks (``) pour créer le bloc HTML
// const monPremierArticle = `
//     <article>
//         <div>
//             <h1>Titre dynamique</h1>
//             <ul>
//                 <li>A</li>
//                 <li>B</li>
//                 <li>C</li>
//                 <li>D</li>
//                 <li>E</li>
//             </ul>
//         </div>
//     </article>
// `;

// // 2. On cible la PREMIÈRE section (nth-child(1) ou juste "section")
// const maSection = document.querySelector("section");

// // 3. On vérifie si la section existe avant d'écrire dedans (pour éviter les erreurs)
// if (maSection) {
//     // On insère le HTML au début de la section
//     maSection.insertAdjacentHTML('afterbegin', monPremierArticle);
// }

// // --- Le reste de ton code ---

// // LocalStorage (ça, ça fonctionnait déjà)
// localStorage.setItem("prenom", "Amir");
// const prenom = localStorage.getItem("prenom");
// console.log("Prénom stocké :", prenom);

// // Bonus : Ton compteur sur le H1 (pense à le décommenter pour tester)
// const h1 = document.querySelector('h1');
// if (h1) {
//     let count = 0;
//     const title = h1.textContent;
//     h1.addEventListener('click', () => {
//         count++;
//         h1.textContent = `${title}, Vous avez cliqué ${count} fois`;
//     });
// }

const person = {
    prenom: "Jules",
    nom: "Bargo",
    age:20
}

const strPerson = JSON.stringify(person)
localStorage.setItem('person', strPerson)
const parsePerson = JSON.parse(localStorage.getItem('person'))

console.log(parsePerson)
console.log(localStorage.getItem('person'))

const fruits = ["tomate", "pomme", "banane", "orange"]

const ul = document.querySelector('ul')

fruits.forEach((el) => {
    ul.insertAdjacentHTML('beforeend', `<li>${el}</li>`)
})

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (el) => {
        console.log("Tu as cliqué sur le bouton")
    })
})