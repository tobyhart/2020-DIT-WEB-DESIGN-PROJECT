var productid = localStorage.getItem("productid");

if (productid == 1) {
    document.getElementById("checkout-image").src = "Images/AVA-Product-Page.png";
    document.getElementById('checkout-product').innerHTML = 'AVA Robot';
    document.getElementById("checkout-description").innerHTML = "The world's most complex humanoid AI machine can be yours today. Platinum edition contains extended features.";
    
    document.getElementById("checkout-first-option").innerHTML = "Standard AVA";
    document.getElementById("checkout-first-price").innerHTML = "$199,999";
    
    document.getElementById("checkout-second-option").innerHTML = "Platinum AVA";
    document.getElementById("checkout-second-price").innerHTML = "$249,999";
} 
if (productid == 2) {
    document.getElementById("checkout-image").src = "Images/HillCorp-AVA-app-logo.png";
    document.getElementById('checkout-product').innerHTML = 'AVA App';
    document.getElementById("checkout-description").innerHTML = "Download the standard or platinum version of the AVA app. Platinum unlocks more features of AVA.";
    
    document.getElementById("checkout-first-option").innerHTML = "Standard AVA";
    document.getElementById("checkout-first-price").innerHTML = "$149.99";
    document.getElementById("checkout-second-option").innerHTML = "Platinum AVA";
    document.getElementById("checkout-second-price").innerHTML = "$249.99";
}
if (productid == 3) {
    document.getElementById("checkout-image").src = "Images/HillCorp-Fayonette.png";
    document.getElementById('checkout-product').innerHTML = 'Grand Fayonette';
    document.getElementById("checkout-description").innerHTML = "Order the latest version of HillCorp's Fayonette self-driving car: The Grand Fayonette. Add built-in AVA for the full experience.";
    
    document.getElementById("checkout-first-option").innerHTML = "Fayonette (No AVA)";
    document.getElementById("checkout-first-price").innerHTML = "$399,999";
    document.getElementById("checkout-second-option").innerHTML = "Fayonette (With AVA)";
    document.getElementById("checkout-second-price").innerHTML = "$449,999";
}
if (productid == 4) {
    document.getElementById("checkout-image").src = "Images/SmartHome.jpg";
    document.getElementById('checkout-product').innerHTML = 'Smart Home';
    document.getElementById("checkout-description").innerHTML = "Spice up your home and make your life easier with HillCorp's Smart Home technology. Buy the Smart Home Platinum package for an additional AVA robot personal assistant.";
    
    document.getElementById("checkout-first-option").innerHTML = "Smart Home Standard";
    document.getElementById("checkout-first-price").innerHTML = "$174,999";
    document.getElementById("checkout-second-option").innerHTML = "Smart Home Platinum";
    document.getElementById("checkout-second-price").innerHTML = "$424,999";
}



if ((productid == 5) || (productid == 6) || (productid == 7) || (productid == 8)) {

    document.getElementById("checkout-first-option").innerHTML = "12 Inch 250GB";
    document.getElementById("checkout-second-option").innerHTML = "15 Inch 500GB";
}



if (productid == 5)  {
    document.getElementById("checkout-image").src = "Images/products-surfacetop-1.png";
    document.getElementById('checkout-product').innerHTML = 'Surface Laptop';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 Surface Range Smart Laptop. 12 Inch 250GB Storage or 15 Inch 500GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,199.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,499.99";
} 
if (productid == 6) {
    document.getElementById("checkout-image").src = "Images/products-surfacepro-1.png";
    document.getElementById('checkout-product').innerHTML = 'Surface Pro';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 Surface Pro Range Smart Laptop. 12 Inch 250GB Storage or 15 Inch 500GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,449.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,899.99";
}
if (productid == 7) {
    document.getElementById("checkout-image").src = "Images/products-hillbook-1.png";
    document.getElementById('checkout-product').innerHTML = 'Hillbook';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 Hillbook Laptop. 12 Inch 250GB Storage or 15 Inch 500GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$999.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,199.99";
}
if (productid == 8) {
    document.getElementById("checkout-image").src = "Images/products-avabook.png";
    document.getElementById('checkout-product').innerHTML = 'AVAbook';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 AVAbook Laptop with built-in AVA technology. 12 Inch 250GB Storage or 15 Inch 500GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$2,499.99";
    document.getElementById("checkout-second-price").innerHTML = "$2,999.99";
}



if ((productid == 9) || (productid == 10) || (productid == 11) || (productid == 12)) {

    document.getElementById("checkout-first-option").innerHTML = "Retina 500GB";
    document.getElementById("checkout-second-option").innerHTML = "Retina 1TB";
}



if (productid == 9)  {
    document.getElementById("checkout-image").src = "Images/products-mercury.png";
    document.getElementById('checkout-product').innerHTML = 'Mercury Desktop Computer';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 Mercury Range Smart Desktop Computer with dynamic retina display. 500GB or 1TB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,799.99";
    document.getElementById("checkout-second-price").innerHTML = "$2,099.99";
} 
if (productid == 10) {
    document.getElementById("checkout-image").src = "Images/products-mercury-pro.png";
    document.getElementById('checkout-product').innerHTML = 'Mercury Pro';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 Mercury Pro Smart Desktop Computer with dynamic retina display. 500GB or 1TB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,999.99";
    document.getElementById("checkout-second-price").innerHTML = "$2,399.99";
}
if (productid == 11) {
    document.getElementById("checkout-image").src = "Images/products-mercurytop-1.png";
    document.getElementById('checkout-product').innerHTML = 'MercuryTop Desktop Computer';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 MercuryTop Range Desktop Computer with dynamic retina display. 500GB or 1TB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,249.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,199.99";
}
if (productid == 12) {
    document.getElementById("checkout-image").src = "Images/products-mercurytop-pro.png";
    document.getElementById('checkout-product').innerHTML = 'MercuryTop Pro';
    document.getElementById("checkout-description").innerHTML = "Brand new 2020 MercuryTop Pro Smart Desktop Computer with dynamic retina display. 500GB or 1TB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,499.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,649.99";
}



if ((productid == 13) || (productid == 14) || (productid == 15) || (productid == 16) || (productid == 17) || (productid == 18) || (productid == 19) || (productid == 20)) {

    document.getElementById("checkout-first-option").innerHTML = "Retina 64GB";
    document.getElementById("checkout-second-option").innerHTML = "Retina 128GB";
}



if (productid == 13)  {
    document.getElementById("checkout-image").src = "Images/products-avalanche-7.png";
    document.getElementById('checkout-product').innerHTML = 'Avalanche 7';
    document.getElementById("checkout-description").innerHTML = "Get the brand new standard version 2020 range of Avalanche Smartphones with built-in AVA software and retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,499.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,649.99";
} 
if (productid == 14) {
    document.getElementById("checkout-image").src = "Images/products-avalanche-7C.png";
    document.getElementById('checkout-product').innerHTML = 'Avalanche 7C';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Cheap version 2020 range of Avalanche Smartphones with built-in AVA software and retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$899.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,049.99";
}
if (productid == 15) {
    document.getElementById("checkout-image").src = "Images/products-avalanche-7S.png";
    document.getElementById('checkout-product').innerHTML = 'Avalanche 7S';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Special version 2020 range of Avalanche Smartphones with built-in AVA software and retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,649.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,799.99";
}
if (productid == 16) {
    document.getElementById("checkout-image").src = "Images/products-avalanche-pro.png";
    document.getElementById('checkout-product').innerHTML = 'Avalanche Pro';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Pro version 2020 range of Avalanche Smartphones with built-in AVA software and retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,849.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,999.99";
}




if (productid == 17)  {
    document.getElementById("checkout-image").src = "Images/products-tokyo-3.png";
    document.getElementById('checkout-product').innerHTML = 'Tokyo 3';
    document.getElementById("checkout-description").innerHTML = "Get the brand new standard version 2020 range of Tokyo Smartphones with built-in retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$899.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,049.99";
} 
if (productid == 18) {
    document.getElementById("checkout-image").src = "Images/products-tokyo-3g.png";
    document.getElementById('checkout-product').innerHTML = 'Tokyo 3G';
    document.getElementById("checkout-description").innerHTML = "Get the brand new 3G version 2020 range of Tokyo Smartphones with built-in retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,199.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,349.99";
}
if (productid == 19) {
    document.getElementById("checkout-image").src = "Images/products-tokyo-3S.png";
    document.getElementById('checkout-product').innerHTML = 'Tokyo 3S';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Special version 2020 range of Tokyo Smartphones with built-in retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,449.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,599.99";
}
if (productid == 20) {
    document.getElementById("checkout-image").src = "Images/products-tokyo-pro.png";
    document.getElementById('checkout-product').innerHTML = 'Tokyo Pro';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Pro version 2020 range of Tokyo Smartphones with built-in retina display. 64GB storage or 128GB storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,649.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,799.99";
}



if ((productid == 21) || (productid == 22) || (productid == 23) || (productid == 24)) {

    document.getElementById("checkout-first-option").innerHTML = "128GB Storage";
    document.getElementById("checkout-second-option").innerHTML = "256GB Storage";
}




if (productid == 21)  {
    document.getElementById("checkout-image").src = "Images/products-manhattan.png";
    document.getElementById('checkout-product').innerHTML = 'Manhattan Tablet';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Manhattan tablet for all your business or personal needs. 128GB Storage or 256GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$899.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,049.99";
} 
if (productid == 22) {
    document.getElementById("checkout-image").src = "Images/products-manhattan-pro.png";
    document.getElementById('checkout-product').innerHTML = 'Manhattan Pro Tablet';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Manhattan Pro tablet for all your business or personal needs. 128GB Storage or 256GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,199.99";
    document.getElementById("checkout-second-price").innerHTML = "$1,349.99";
}
if (productid == 23) {
    document.getElementById("checkout-image").src = "Images/products-crete.png";
    document.getElementById('checkout-product').innerHTML = 'Crete Security Phone';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Crete security phone. The Crete phone has one of the most secure connections available on the market today and is perfect for confidential calls and storage. 128GB Storage or 256GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$449.99";
    document.getElementById("checkout-second-price").innerHTML = "$599.99";
}
if (productid == 24) {
    document.getElementById("checkout-image").src = "Images/products-crete-pro.png";
    document.getElementById('checkout-product').innerHTML = 'Crete Pro Phone';
    document.getElementById("checkout-description").innerHTML = "Get the brand new Crete Pro security phone. The Crete Pro phone has one of the most secure connections available on the market today and is perfect for confidential calls and storage. 128GB Storage or 256GB Storage.";
    
    document.getElementById("checkout-first-price").innerHTML = "$699.99";
    document.getElementById("checkout-second-price").innerHTML = "$799.99";
}



if ((productid == 25) || (productid == 26)) {

    document.getElementById("checkout-first-option").innerHTML = "Standard Car";
    document.getElementById("checkout-second-option").innerHTML = "Car (With AVA)";
}




if (productid == 25) {
    document.getElementById("checkout-image").src = "Images/products-botticelli.png";
    document.getElementById('checkout-product').innerHTML = 'Grand Bottocelli';
    document.getElementById("checkout-description").innerHTML = "Drive in style with the new HillCorp Grand Bottocelli 2020 edition. Get the AVA add-on for the full HillCorp experience.";
    
    document.getElementById("checkout-first-price").innerHTML = "$89,999.99";
    document.getElementById("checkout-second-price").innerHTML = "$149,999.99";
}
if (productid == 26) {
    document.getElementById("checkout-image").src = "Images/products-astro.png";
    document.getElementById('checkout-product').innerHTML = 'HillCorp Astro';
    document.getElementById("checkout-description").innerHTML = "Drive in style with the brand new HillCorp Astro 2020 edition. One of the finest cars on the market. Get the AVA add-on for the full HillCorp experience.";
    
    document.getElementById("checkout-first-price").innerHTML = "$1,999,999.99";
    document.getElementById("checkout-second-price").innerHTML = "$2,049,999.99";
}



if (productid == 27) {
    document.getElementById("checkout-image").src = "Images/apps-gaming.jpg";
    document.getElementById('checkout-product').innerHTML = 'Gaming Bundle';
    document.getElementById("checkout-description").innerHTML = "Game in style with HillCorp's top 10 games bundle including 10 of HillCorp's best games.";
    
    document.getElementById("checkout-first-price").innerHTML = "$349.99";
    document.getElementById("checkout-second-price").innerHTML = "$499.99";

    document.getElementById("checkout-first-option").innerHTML = "PC";
    document.getElementById("checkout-second-option").innerHTML = "Console";
}
if (productid == 28) {
    document.getElementById("checkout-image").src = "Images/Headquarters-fancy.jpeg";
    document.getElementById('checkout-product').innerHTML = 'Business Applications';
    document.getElementById("checkout-description").innerHTML = "Boost your business with this bundle of business-related applications. Including the original version of Corpalytics.";
    
    document.getElementById("checkout-first-price").innerHTML = "$299.99";
    document.getElementById("checkout-second-price").innerHTML = "$349.99";

    document.getElementById("checkout-first-option").innerHTML = "Digital";
    document.getElementById("checkout-second-option").innerHTML = "DVD";
}