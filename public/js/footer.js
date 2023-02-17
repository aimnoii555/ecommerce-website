const createFooter = () => {
    let footer = document.querySelector('footer')

    footer.innerHTML = `
    <div class="footer-content">
      <img src="../img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li class=""><a href="#" class="footer-link">t-shirts</a></li>
                <li class=""><a href="#" class="footer-link">sweatshirts</a></li>
                <li class=""><a href="#" class="footer-link">shirts</a></li>
                <li class=""><a href="#" class="footer-link">jeans</a></li>
                <li class=""><a href="#" class="footer-link">trousers</a></li>
                <li class=""><a href="#" class="footer-link">shoes</a></li>
                <li class=""><a href="#" class="footer-link">casuals</a></li>
                <li class=""><a href="#" class="footer-link">formals</a></li>
                <li class=""><a href="#" class="footer-link">sports</a></li>
                <li class=""><a href="#" class="footer-link">sports</a></li>
                <li class=""><a href="#" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li class=""><a href="#" class="footer-link">t-shirts</a></li>
                <li class=""><a href="#" class="footer-link">sweatshirts</a></li>
                <li class=""><a href="#" class="footer-link">shirts</a></li>
                <li class=""><a href="#" class="footer-link">jeans</a></li>
                <li class=""><a href="#" class="footer-link">trousers</a></li>
                <li class=""><a href="#" class="footer-link">shoes</a></li>
                <li class=""><a href="#" class="footer-link">casuals</a></li>
                <li class=""><a href="#" class="footer-link">formals</a></li>
                <li class=""><a href="#" class="footer-link">sports</a></li>
                <li class=""><a href="#" class="footer-link">sports</a></li>
                <li class=""><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ad, nulla, sapiente, sunt
        laboriosam sequi consequatur beatae veniam quibusdam id explicabo minus alias qui obcaecati neque
        laborum labore? Sequi fugiat quo eveniet. Non architecto magni quam rem in voluptate quaerat aliquam aut
        blanditiis recusandae voluptates, iure, modi dolorem similique soluta eum doloribus eligendi! Qui
        aliquam architecto eos soluta earum expedita velit asperiores doloribus, illo consectetur perspiciatis
        molestiae totam. Exercitationem enim expedita voluptatem laudantium vero ullam soluta a eveniet? Eveniet
        ut cupiditate eum, sed magni porro, laboriosam magnam nisi quas fugit placeat voluptatem assumenda
        repudiandae quae saepe rerum aliquam molestias rem.
    </p>
    <p class="info">support emails = help@gmail.com,</p>
    <p class="info">telephone 0955555555555</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>

        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
        `
}

createFooter()