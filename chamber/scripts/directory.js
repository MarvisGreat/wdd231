const url = 'data/members.json';
const cards = document.querySelector('#cards')
const grid = document.querySelector('#grid-btn')
const list = document.querySelector('#list-btn')

list.addEventListener('click', () => {
    cards.classList.add('list')
    list.classList.add('active')
    grid.classList.remove('active')
});

grid.addEventListener('click', () => {
    cards.classList.remove('list')
    grid.classList.add('active')
    list.classList.remove('active')
});

async function getCompanyData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayCompanies(data)
    } else {
        console.error('Error fetching JSON data:', response.statusText);
    }  
}

const displayCompanies = (companies) => {
    cards.innerHTML = '';

    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let tagline = document.createElement('p');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let ratings = document.createElement('p');
        let memberLevel = document.createElement('p');
        

        name.textContent = company.companyName;
        tagline.textContent = company.tagline;

        logo.setAttribute('src', `images/${company.imageFileName}`);
        logo.setAttribute('alt', `Logo of ${company.companyName}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '150');

        address.textContent = company.companyAddress;
        phone.textContent = company.companyPhoneNumber;
        ratings.textContent = `Rating: ${company.rating}⭐`;
        memberLevel.textContent = `Membership Level: ${company.membershipLevel}`;


        website.textContent = 'Visit Website';
        website.setAttribute('href', company.companyWebsiteURL);
        website.setAttribute('target', '_blank');

        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(memberLevel);
        card.appendChild(ratings);

        cards.appendChild(card);
    });
};

getCompanyData();
