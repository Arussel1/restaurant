export default function Home(contentDiv) {
    // Clear content
    contentDiv.innerHTML = "";

    // Create a line break element
    const br = document.createElement('br');

    // Create a header element and add class
    const homeHeader = document.createElement('p');
    homeHeader.classList.add("homeHeader");
    homeHeader.textContent = "Welcome to Airport Pho!";

    // Create a text element
    const text = document.createElement('p');
    text.textContent =  "Discover the rich flavors and vibrant culture of Vietnam at Airport Pho, your go-to destination for authentic Vietnamese cuisine. Conveniently located near the airport, our restaurant offers a perfect blend of traditional dishes and modern comfort, making it an ideal stop for travelers and locals alike. At Airport Pho, we pride ourselves on using the freshest ingredients and time-honored recipes to bring you the very best of Vietnamese cooking. From our savory pho, with its aromatic broth and tender slices of beef, to our delectable banh mi sandwiches and refreshing spring rolls, every dish is crafted with care and passion. Whether you’re looking for a quick bite before your flight, a cozy spot for a family meal, or a place to enjoy a warm bowl of pho on a chilly day, Airport Pho has something for everyone. Our friendly staff and inviting atmosphere ensure that every visit is a delightful experience. Join us at Airport Pho and embark on a culinary journey that captures the heart and soul of Vietnam. We look forward to serving you!"

    // Create a box element and a button
    const box = document.createElement('div');
    box.classList.add("box");

    const textBox = document.createElement('p');
    textBox.textContent = "Check out our menu!";

    const menu = document.createElement('button');
    menu.classList.add("menuButton");
    menu.classList.add("body");
    menu.textContent = "Click me";

    // Append elements to the box
    box.appendChild(textBox);
    box.appendChild(menu);

    // Append elements to the contentDiv
    contentDiv.appendChild(homeHeader);
    contentDiv.appendChild(br);
    contentDiv.appendChild(text);
    contentDiv.appendChild(br);
    contentDiv.appendChild(box);
}