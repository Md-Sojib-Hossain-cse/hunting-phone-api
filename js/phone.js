const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}


const displayPhones = phones => {
    // 1. where to append
    const phoneContainer = document.getElementById('phonesContainer');
    phones.forEach(phone => {
        //2. create a div
        const div = document.createElement('div');
        div.classList = `card w-96 bg-base-100 shadow-xl`;
        // 3. add inner text
        div.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        // 4. append child
        phoneContainer.appendChild(div);
        console.log(phone)
    });
}


loadPhone();