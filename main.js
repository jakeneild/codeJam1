cart = [];

let isValid = function(code){
    if(code === "5PERCENT"){
        return true
    } else if (code === "10PERCENT"){
        return true
    } else if (code === "15PERCENT"){
        return true
    } else {
        return false
    }
}

document.getElementById("addToCart").addEventListener("click", function () {
    let titleVal = document.getElementById("title").value
    let title = document.createElement("p")
    title.textContent = titleVal
    document.getElementById("title").value = ""

    let authorVal = document.getElementById("author").value
    let author = document.createElement("p")
    author.textContent = authorVal
    document.getElementById("author").value = ""

    let publishDateVal = document.getElementById("publishDate").value
    let publishDate = document.createElement("p")
    publishDate.textContent = publishDateVal
    document.getElementById("publishDate").value = ""

    let priceVal = document.getElementById("price").value
    let price = document.createElement("p")
    price.textContent = priceVal
    document.getElementById("price").value = ""

    let seriesVal = document.getElementById("series").value
    let series = document.createElement("p")
    series.textContent = seriesVal
    document.getElementById("series").value = ""


    let cartItem = document.createElement("div")
    cartItem.className = "cartItem"
    cartItem.appendChild(title)
    cartItem.appendChild(author)
    cartItem.appendChild(publishDate)
    cartItem.appendChild(price)
    cartItem.appendChild(series)

    document.getElementById("cart").appendChild(cartItem)
    cart.push({
        title: titleVal,
        author: authorVal,
        price: priceVal,
        publishDate: publishDateVal,
        series: seriesVal
    })





    document.getElementById("output").innerHTML = ""


    let discountCode = document.getElementById("discountCode").value


    if(isValid(discountCode)){
        if(discountCode === "5PERCENT"){
            discountCode = 5
        } else if (discountCode === "10PERCENT"){
            discountCode = 10
        } else if (discountCode === "15PERCENT"){
            discountCode = 15
        }
    } else {
        discountCode = 0;
    }


    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        totalPrice += parseInt(cart[i].price)
    }
    let totalBefore = totalPrice
    totalPrice = totalPrice - (totalPrice * (discountCode/100))

    let totalPriceWithAuthor = totalPrice

    let authorArr = []
    for(let i = 0; i < cart.length; i++){
        authorArr.push({author: cart[i].author, series: cart[i].series})
        let count = 0;
        for(let j = 0; j < authorArr.length; j++){
            if(cart[i].author === authorArr[j].author && cart[i].series === authorArr[j].series){
                totalPriceWithAuthor -= (cart[i].price * count/100)
                count += 5;
                if(count > 35){
                    count = 35
                }
            } else {
                cart[i].author === authorArr[j].author
                totalPriceWithAuthor -= cart[i].price/20
            }
        }
    }

    let myP = document.createElement("p")
    myP.textContent =`Total before Discount: ${totalBefore} Total after discount: ${totalPrice} Total After author discount: ${totalPriceWithAuthor}`

    document.getElementById("output").appendChild(myP)
})



document.getElementById("discountCode").addEventListener("keyup", function () {

    document.getElementById("output").innerHTML = ""


    let discountCode = document.getElementById("discountCode").value


    if(isValid(discountCode)){
        if(discountCode === "5PERCENT"){
            discountCode = 5
        } else if (discountCode === "10PERCENT"){
            discountCode = 10
        } else if (discountCode === "15PERCENT"){
            discountCode = 15
        }
    } else {
        discountCode = 0;
    }


    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        totalPrice += parseInt(cart[i].price)
    }
    let totalBefore = totalPrice
    totalPrice = totalPrice - (totalPrice * (discountCode/100))

    let totalPriceWithAuthor = totalPrice

    let authorArr = []
    for(let i = 0; i < cart.length; i++){
        authorArr.push({author: cart[i].author, series: cart[i].series})
        let count = 0;
        for(let j = 0; j < authorArr.length; j++){
            if(cart[i].author === authorArr[j].author && cart[i].series === authorArr[j].series){
                totalPriceWithAuthor -= (cart[i].price * count/100)
                count += 5;
                if(count > 35){
                    count = 35
                }
            } else {
                cart[i].author === authorArr[j].author
                totalPriceWithAuthor -= cart[i].price/20
            }
        }
    }

    let myP = document.createElement("p")
    myP.textContent =`Total before Discount: ${totalBefore} Total after discount: ${totalPrice} Total After author discount: ${totalPriceWithAuthor}`

    document.getElementById("output").appendChild(myP)
})