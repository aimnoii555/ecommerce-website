let loader = document.querySelector('.loader')
const becomeSellerElement = document.querySelector('.become-seller')
const productListingElement = document.querySelector('.product-listing')
const applyForm = document.querySelector('.apply-form')
const showApplyFormBtn = document.querySelector('#apply-btn')

let user = JSON.parse(sessionStorage.user || null)


window.onload = () => {
    if (sessionStorage.user) {
        
        if (compareToken(user.authToken,user.email)) {
            if (!user.seller) {
                // dont' have session user
                becomeSellerElement.classList.remove('hide')
            } else {
                // have session user
                // productListingElement.classList.remove('hide')
                loader.style.display = 'block'
                setupProducts()
            }
        } else {
            location.replace('/login')
        }
    }else {
        location.replace('/login')
    }
}


showApplyFormBtn.addEventListener('click',()=>{
    becomeSellerElement.classList.add('hide')
    applyForm.classList.remove('hide')
})

// form submission
const applyFormButton = document.querySelector('#apply-form-btn')
const businessName = document.querySelector('#business-name')
const address = document.querySelector('#business-address')
const about = document.querySelector('#about')
const number = document.querySelector('#number')
const tac = document.querySelector('#terms-and-cond')
const legitInfo = document.querySelector('#legitInfo')

applyFormButton.addEventListener('click',()=> {
    if (!businessName.value.length || !address.value.length || !about.value.length || !number.value.length) {
        showAlert('fill all the inputs')
    } else if (!tac.checked || !legitInfo.checked) {
        showAlert('you must agree to our terms and conditions')
    } else {
        // making server request
        loader.style.display = 'block'
        sendData('/seller',{
            name: businessName.value,
            address: address.value,
            about: about.value,
            number: number.value,
            tac: tac.checked,
            legit: legitInfo.checked,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})

// get product send response to server
const setupProducts = () => {
    fetch('/get-products',{
        method: 'post',
        headers: new Headers(
            {
                'Content-Type': 'application/json'
            }
        ),
        body: JSON.stringify({email: user.email})
    }).then(res=>res.json()).then(data=>{
        loader.style.display = null
        productListingElement.classList.remove('hide')
        try {
            if (data == 'no product') {
                let emptySvg = document.querySelector('.no-product-image')
                emptySvg.classList.remove('hide') // show no product image
            } else {
                data.forEach(product=>{
                    createProduct(product)
                })
            }
        } catch (error) {
            console.log(error)   
        }
    })
}