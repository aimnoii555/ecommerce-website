const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
        <img src="../img/dark-logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search">
                <button class="search-btn">Search</button>
            </div>
            <a>
                <img src="../img/user.png" id='user-img' alt="">
                <div class='login-logout-popup hide'>
                    <p class='account-info'>Log in as, name</p>
                    <button class='btn' id='user-btn' >Log out</button>
                </div>
            </a>
            <a href="/cart"><img src="../img/cart.png" alt=""></a>
        </div>
    </div>

    <ul class="links-container">
        <li class="link-item"><a class="link"  href="#">Home</a></li>
        <li class="link-item"><a class="link" href="#">Women</a></li>
        <li class="link-item"><a class="link" href="#">Men</a></li>
        <li class="link-item"><a class="link" href="#">Kids</a></li>
        <li class="link-item"><a class="link" href="#">Accessories</a></li>

    </ul>
    `;
};

createNav()

// nav popup
const userImageButton = document.querySelector('#user-img')
const userPopup = document.querySelector('.login-logout-popup')
const popupText = document.querySelector('.account-info')
const actionBtn = document.querySelector('#user-btn')

userImageButton.addEventListener('click',()=>{
    userPopup.classList.toggle('hide')
    console.log('click')
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null)
    if (user != null) {
        // mean user is logged in
        popupText.innerHTML = `log in as, ${user.name}`
        actionBtn.innerHTML = `log out`
        actionBtn.addEventListener('click',()=> {
            sessionStorage.clear()
            location.reload()
        })
    } else {
        // user is logged out
        popupText.innerHTML = 'Log in to place order'
        actionBtn.innerHTML = 'Log in'
        actionBtn.addEventListener('click',()=> {
            location.href = '/login'
        })
    }
}

// search box
const searchBtn = document.querySelector('.search-btn')
const searchBox = document.querySelector('.search-box')

searchBtn.addEventListener('click',() =>{
    if (searchBox.value.length) {
        location.href = `/search/${searchBox.value}`
    }
})
