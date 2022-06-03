var sr = ScrollReveal();
sr.reveal(".card-img-top", {
        origin: "left",
    distance: "100px",
    opacity: 0.3,
    transition: 0.5,
 });

var addArticle = document.querySelectorAll("a");

var panier = JSON.parse(localStorage.getItem('panier'));
console.log("data :", panier);

if (panier === null) {
    panier = [];
}



for (let i = 0; i < addArticle.length; i++) {
    addArticle[i].addEventListener('click', function () {
        console.log(this.dataset);
        panier.push({
            name: this.dataset.name,
            price: this.dataset.price,
            url : this.dataset.url
        })

        localStorage.setItem('panier', JSON.stringify(panier));
    })
    
}



var tbody = document.querySelector('tbody');
var df;
for (let i = 0; i < panier.length; i++) {
    console.log("data loop :", panier[i]);

            df += `
            <tr>
                    <td>${i+1}</td>
                        <td><img style="width: 50px;height: 100%;" src=${panier[i].url} alt=""></td>
                        <td>${panier[i].name}</td>
                        <td class="d-flex gap-2 align-items-center"><input style="width: 50px;height: 100%;"type="text"><i class="fa-solid fa-circle-check text-info"></i></td>
                        <td>${panier[i].price}$</td>
                        <td>0</td>
                        <td ><Button class="border border-info rounded"><i class="fa-solid fa-trash-can text-info"></i></Button></td>
            </tr>
        `;
    console.log(df);
}
console.log(df);

tbody.innerHTML = df;

console.log(df);



