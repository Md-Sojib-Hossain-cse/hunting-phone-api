const loadData = async (searchPhone) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await response.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}

const displayPhones = phones => {
    // step 1 : where to add
    const phoneContainer =document.getElementById('phoneContainer');
    phoneContainer.textContent = '';
    //show all button if 12+ search results in there
    const showAll = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }


    phones = phones.slice(0,12);
    phones.forEach(phone => {
        //step 2 : what to add
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
        //step 3 : set inner Text
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        //step 4 : append element
        phoneContainer.appendChild(phoneCard);
        // console.log(phone)
    });
}


const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadData(searchText);
    // console.log(searchText)
}

const handleSearch2 =() =>{
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadData(searchText);
}

// loadData();