const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">T-Shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casual</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">T-Shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casual</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
    `;
}

createFooter();