//data loading from api
const loadData = async (searchPhone , isShowAll) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await response.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones , isShowAll);
}


//displaying phones
const displayPhones = (phones , isShowAll) => {
    // step 1 : where to add
    const phoneContainer =document.getElementById('phoneContainer');
    phoneContainer.textContent = '';
    //show all button if 12+ search results in there if not show all button clicked
    const showAll = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
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
            <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `
        //step 4 : append element
        phoneContainer.appendChild(phoneCard);
        // console.log(phone)
    });
    //hide loadingBall
    toggleLoadingBall(false);
}

//handle show details 
const handleShowDetails = async (id) =>{
    // console.log(id)
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await response.json();
    console.log(data.data)
}

//primary search
const handleSearch = (isShowAll) =>{
    //adding loadingBall
    toggleLoadingBall(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadData(searchText , isShowAll);
    // console.log(searchText)
}

// //duplicate search
// const handleSearch2 =() =>{
//     //adding loadingBall
//     toggleLoadingBall(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadData(searchText);
// }


const toggleLoadingBall = (isLoading) => {
    const loadingBall = document.getElementById('loadingBall');
    if(isLoading){
        loadingBall.classList.remove('hidden');
    }
    else{
        loadingBall.classList.add('hidden');
    }
}


//handle show all
const handleShowAll = () => {
    handleSearch(true);
}

// loadData();