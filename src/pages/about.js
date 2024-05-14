import Image from './images/restaurant.jpg';
export default function About(divContent){
    divContent.innerHTML = "";

    const about = document.createElement('div');
    const img = document.createElement('img');
    const aboutDescription = document.createElement('p');
    img.src = Image;
    img.alt = "restaurant";
    aboutDescription.classList.add("aboutDescription");
    aboutDescription.textContent = "Welcome to Airport Pho, a culinary landmark with a legacy spanning over 50 years. Since our humble beginnings, we have been serving authentic Vietnamese cuisine, delighting generations of diners with our flavorful dishes and warm hospitality. Our journey began in 1960, when \"Fake Name\" opened the doors to our first restaurant. With a passion for traditional Vietnamese flavors and a commitment to quality, we quickly became a beloved establishment in the community. Today, Airport Pho continues to uphold the same values that have defined us for decades. We source the finest ingredients, carefully preparing each dish to honor our heritage and satisfy the modern palate. Our menu features a wide array of culinary delights, from classic pho and savory spring rolls to spicy vermicelli and fragrant broken rice dishes As we celebrate over 50 years of culinary excellence, we invite you to join us on a gastronomic journey through Vietnam. Experience the taste of tradition, served with a side of history, only at Airport Pho.";
    about.classList.add("about");
    about.appendChild(img);
    about.appendChild(aboutDescription);

    divContent.appendChild(about);
}