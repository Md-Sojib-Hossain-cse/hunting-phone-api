const loadData = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones);
}

const displayPhones = phones => {
    console.log(phones)
}

loadData();