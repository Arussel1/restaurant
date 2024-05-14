export default function Menu(divContent){
    divContent.innerHTML = "";
    const br = document.createElement('br');

    const appetizers = document.createElement('div');
    const appetizersHeader = document.createElement('p');
    const springRoll = document.createElement('p');
    const chickenSalad = document.createElement('p');
    const papayaSalad = document.createElement('p');
    appetizers.classList.add("appetizers");
    appetizersHeader.classList.add("menuHeader");
    appetizersHeader.textContent = "Appetizers";
    springRoll.classList.add("menuDescription");
    springRoll.textContent = "Spring Roll - Filled with crisp lettuce, fragrant herbs, and tender shrimp or savory pork, all wrapped in delicate rice paper. ";
    chickenSalad.classList.add("menuDescription");
    chickenSalad.textContent = "Chicken Salad -  A refreshing mix of tender, marinated chicken, crisp vegetables, and aromatic herbs, tossed in a light, tangy dressing.";
    papayaSalad.classList.add("menuDescription");
    papayaSalad.textContent = "Papaya Salad - Featuring crisp green papaya, crunchy peanuts, fresh herbs, and a zesty lime dressing.";
    appetizers.appendChild(appetizersHeader);
    appetizers.appendChild(springRoll);
    appetizers.appendChild(chickenSalad);
    appetizers.appendChild(papayaSalad);

    const mainCourse = document.createElement('div');
    const mainCourseHeader = document.createElement('p');
    const pho = document.createElement('p');
    const spicyVercimelli = document.createElement('p');
    const brokenRice = document.createElement('p');
    mainCourse.classList.add("main");
    mainCourseHeader.classList.add("menuHeader");
    mainCourseHeader.textContent = "Main Course";
    pho.classList.add("menuDescription");
    pho.textContent = "Pho - Our pho features a rich, aromatic broth simmered for hours, tender slices of beef or chicken, and fresh rice noodles. Garnished with crisp bean sprouts, fresh herbs, and a wedge of lime.";
    spicyVercimelli.classList.add("menuDescription");
    spicyVercimelli.textContent = "Spicy vercimelli -  Rice noodles topped with a medley of fresh vegetables, grilled meats, and aromatic herbs. Tossed in a zesty, spicy sauce.";
    brokenRice.classList.add("menuDescription");
    brokenRice.textContent = "Broken rice with grilled pork - Fragrant broken rice grains served with tender grilled meats, a crispy fried egg, and a side of pickled vegetables.";
    mainCourse.appendChild(mainCourseHeader);
    mainCourse.appendChild(pho);
    mainCourse.appendChild(spicyVercimelli);
    mainCourse.appendChild(brokenRice);

    divContent.appendChild(appetizers);
    divContent.appendChild(mainCourse);
}  