import Location from '../images/location.png';
export default function Contact(divContent){
    divContent.innerHTML= "";
    const contact = document.createElement('div');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const email = document.createElement('p');
    const contactDescription = document.createElement('div');
    const location = document.createElement('img');
    contact.classList.add("contact");
    contactDescription.classList.add("contactDescription");
    address.classList.add("address");
    address.textContent = "Address: 1234 Fake Avenue, Fake City, Fake Province, Fake Country";
    phoneNumber.classList.add("phoneNumber");
    phoneNumber.textContent = "Phone Number: +1 123 456 7890";
    email.classList.add("email");
    email.textContent = "Email: fakeemail@fake.com";
    location.classList.add("location");
    location.src = Location;
    location.alt = "location";

    contactDescription.appendChild(address);
    contactDescription.appendChild(phoneNumber);
    contactDescription.appendChild(phoneNumber);

    contact.appendChild(contactDescription);
    contact.appendChild(location);

    divContent.appendChild(contact);
}