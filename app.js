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
    document.getElementById("checkout-image").src = "Images/Hillcorp AVA app logo.png";
    document.getElementById('checkout-product').innerHTML = 'AVA App';
    document.getElementById("checkout-description").innerHTML = "Download the standard or platinum version of the AVA app. Platinum unlocks more features of AVA.";
    
    document.getElementById("checkout-first-option").innerHTML = "Standard AVA";
    document.getElementById("checkout-first-price").innerHTML = "$149.99";
    document.getElementById("checkout-second-option").innerHTML = "Platinum AVA";
    document.getElementById("checkout-second-price").innerHTML = "$249.99";
}
if (productid == 3) {
    document.getElementById("checkout-image").src = "Images/Hillcorp Fayonette.png";
    document.getElementById('checkout-product').innerHTML = 'Grand Fayonette';
    document.getElementById("checkout-description").innerHTML = "Order the latest version of HillCorp's Fayonette self-driving car: The Grand Fayonette. Add built-in AVA for the full experience.";
    
    document.getElementById("checkout-first-option").innerHTML = "Fayonette";
    document.getElementById("checkout-first-price").innerHTML = "$399,999";
    document.getElementById("checkout-second-option").innerHTML = "Fayonette (With AVA)";
    document.getElementById("checkout-second-price").innerHTML = "$449,999";
}
if (productid == 4) {
    document.getElementById("checkout-image").src = "Images/SmartHome.jpg";
    document.getElementById('checkout-product').innerHTML = 'Smart Home';
    document.getElementById("checkout-description").innerHTML = "Spice up your home and make your life easier with HillCorp's Smart Home technology. Buy the Smart Home Platinum package for an additional AVA robot personal assistant.";
    
    document.getElementById("checkout-first-option").innerHTML = "Smart Home";
    document.getElementById("checkout-first-price").innerHTML = "$174,999";
    document.getElementById("checkout-second-option").innerHTML = "Smart Home Platinum";
    document.getElementById("checkout-second-price").innerHTML = "$424,999";
}
