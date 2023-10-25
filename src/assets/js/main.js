//
// Main js
//


'use strict';

(function() {

    // Multi level menu dropdown

    if ($(".dropdown-menu a.dropdown-toggle").length) {
        $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
            if (!$(this)
                .next()
                .hasClass("show")
            ) {
                $(this)
                    .parents(".dropdown-menu")
                    .first()
                    .find(".show")
                    .removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass("show");

            $(this)
                .parents("li.nav-item.dropdown.show")
                .on("hidden.bs.dropdown", function(e) {
                    $(".dropdown-submenu .show").removeClass("show");
                });

            return false;
        });
    }


    // Default Tooltip

    if ($('[data-bs-toggle="tooltip"]').length) {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }


    // Default Popover

    if ($('[data-bs-toggle="popover"]').length) {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }





    // rater

    if ($('#rater').length) {
        var starRating1 = raterJs({
            starSize: 20,
            element: document.querySelector("#rater"),
            rateCallback: function rateCallback(rating, done) {
                this.setRating(rating);
                done();
            }
        });


    }


    // rater
    if ($('#rate-2').length) {
        var starRating1 = raterJs({
            starSize: 20,
            element: document.querySelector("#rate-2"),
            rateCallback: function rateCallback(rating, done) {
                this.setRating(rating);
                done();
            }
        });

    }


    // rater
    if ($('#rate-3').length) {

        var starRating1 = raterJs({
            starSize: 20,
            element: document.querySelector("#rate-3"),
            rateCallback: function rateCallback(rating, done) {
                this.setRating(rating);
                done();
            }
        });

    }



    //rater

    if ($('#rate-4').length) {

        var starRating1 = raterJs({
            starSize: 20,
            element: document.querySelector("#rate-4"),
            rateCallback: function rateCallback(rating, done) {
                this.setRating(rating);
                done();
            }
        });

    }




    // Sidenav fixed for docs

    if ($(".sidebar-nav-fixed a").length) {
        $(".sidebar-nav-fixed a")
            // Remove links that don't actually link to anything
            .on("click", function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 90
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                };
                $('.sidebar-nav-fixed a').each(function() {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
            });
    }



    // Flatpickr

    if ($(".flatpickr").length) {
        flatpickr(".flatpickr", {
            disableMobile: true

        });

    }


    //  Stopevent for dropdown

    if ($(".stopevent").length) {
        $(document).on("off.bs.collapse.data-api", ".stopevent", function(e) {
            e.stopPropagation();
        });
    }





    // Check all for  checkbox

    if ($("#checkAll").length) {
        $("#checkAll").on("click", function() {
            $('input:checkbox').not(this).prop('checked', this.checked);
        });
    }

    if ($("#liveAlertPlaceholder").length) {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        const alertTrigger = document.getElementById('liveAlertBtn')
        if (alertTrigger) {
            alertTrigger.addEventListener('click', () => {
                alert('Nice, you triggered this alert message!', 'success')
            })
        }
    }
    // price range

    if ($('#priceRange').length) {
        var nonLinearStepSlider = document.getElementById('priceRange');
        noUiSlider.create(nonLinearStepSlider, {
            connect: true,
            behaviour: 'tap',
            start: [49, 199],
            range: {
                // Starting at 500, step the value by 500,
                // until 4000 is reached. From there, step by 1000.
                'min': [6],

                'max': [300]
            },
            format: wNumb({
                decimals: 1,
                thousand: '.',
                prefix: '$'
            })


        });
        var nonLinearStepSliderValueElement = document.getElementById('priceRange-value');

        nonLinearStepSlider.noUiSlider.on('update', function(values) {
            nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
        });

    }


    // File Input
    if ($(".file-input").length) {
        $('.file-input').change(function() {
            var curElement = $(this).parent().parent().find('.image');
            console.log(curElement);
            var reader = new FileReader();

            reader.onload = function(e) {
                // get loaded data and render thumbnail.
                curElement.attr('src', e.target.result);
            };

            // read the image file as a data URL.
            reader.readAsDataURL(this.files[0]);
        });

    }
})();

// $('#myForm').click(function() {
//     $.ajax({
//         type: "POST",
//         url: "https: //mandrillapp.com/api/1.0/messages/send.json",
//         data: {
//             'key': 'md--lPPeTqclNSarcbRHE_Jdw',
//             'message': {
//                 'from_email': 'wdy910908@hotmail.com',
//                 'to': [{
//                     'email': 'RECIPIENT_NO_1 @EMAIL.HERE',
//                     'name': 'RECIPIENT NAME(OPTIONAL)',
//                     'type’': 'to'
//                 }],
//                 'autotext': 'true',
//                 'subject': 'YOUR SUBJECT HERE!',
//                 'html': 'YOUR EMAIL CONTENT HERE!YOU CAN USE HTML!'
//             }
//         }
//     }).done(function(response) {
//         console.log(response); // if you're into that sorta thing
//     });
// })

function sendTheMail() {
    console.log("AAA")
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'Mmd--lPPeTqclNSarcbRHE_Jdw',
            'message': {
                'from_email': 'wdy910908@hotmail.com',
                'to': [{
                    'email': $('.email').val(), // get email from form
                    'name': $('.name').val(), // get name from form
                    'type': 'to'
                }]
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
}


const productsContainer = document.querySelector("#grid");
console.log("BBB" + productsContainer)
const cartContainer = document.querySelector("#shopping-cart");
const cartContent = document.querySelector("#cart-content");
const toggleCartBtn = document.querySelector("#toggle-cart-btn");
const clearCartBtn = document.querySelector("#clear-cart");
const checkoutBtn = document.querySelector("#checkout-btn");
const totalPriceContainer = document.querySelector("#total-price");

// FUNCTIONS

function toggleCart() {
    // toggle shopping cart visibility
    cartContainer.classList.toggle("open");
}

function getLSContent() {
    // get contents from local storage.
    // if nothing is there, create an empty array
    const lsContent = JSON.parse(localStorage.getItem("products")) || [];
    return lsContent;
}

function setLSContent(lsContent) {
    // save content inside local storage
    localStorage.setItem("products", JSON.stringify(lsContent));
}

function calculateTotal(prices) {
    // calculate the total price in the cart
    return prices.reduce(function(prev, next) {
        return prev + next;
    }, 0);
}

function getCartItemPrices() {
    // extract the price numbers from the cart items to calculate total
    const prices = [];
    // retrieve the td element in the cart where the product price is stored
    // for each product in the cart
    let nums = cartContent.querySelectorAll("tr td:nth-child(3)");

    // iterate over each td node and extract the price
    // strip the $ sign from the text, turn the string into
    // a number and push the number into the prices array
    if (nums.length > 0) {
        for (let cell = 0; cell < nums.length; cell++) {
            let num = nums[cell].innerText;
            num = num.replace(/[^\d]/g, "");
            num = parseFloat(num);
            prices.push(num);
        }
        // return the prices array
        return prices;
    } else {
        return;
    }
}

function displayCartTotal() {
    // display the total cost in the cart
    const prices = getCartItemPrices();
    let total = 0;
    if (prices) {
        total = calculateTotal(prices);
        totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
        2
      )}</span>`;
    } else {
        totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
    }
}

function displayProducts() {
    // display all products in the cart

    // get contents from local storage
    const lsContent = getLSContent();
    let productMarkup = "";
    // if local storage is not empty, build the
    // cart items markup and the appropriate details
    if (lsContent !== null) {
        for (let product of lsContent) {
            productMarkup += `
          <tr>
          <td><img class="cart-image" src="${product.image}" alt="${
          product.name
        }" width="120"></td>
          <td>
            ${product.name}
          </td>
          <td>${product.price}</td>
          <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
          </tr>
        `;
        }
    } else {
        // if no content is in local storage, alert user
        productMarkup = "Your cart is empty.";
    }
    // add markup to DOM
    cartContent.querySelector("tbody").innerHTML = productMarkup;
}

function saveProduct(clickedBtn) {
    // save selected product in local storage and display it in the cart together

    // vars
    const productId = clickedBtn.getAttribute("data-id");
    console.log("DDD" + productId)
    const card = clickedBtn.parentElement.parentElement;
    const cardInfo = clickedBtn.parentElement;
    const prodImage = card.querySelector("img").src;
    const prodName = cardInfo.querySelector("h4").textContent;
    const prodPrice = cardInfo.querySelector(".card__price").textContent;

    let isProductInCart = false;

    // get local storage array
    const lsContent = getLSContent();

    // to avoid user adds the same course twice, check
    // the product is not in LS already before adding it
    lsContent.forEach(function(product) {
        if (product.id === productId) {
            alert("This course is already in your cart.");
            isProductInCart = true;
        }
    });

    // only if the product is not already in the cart,
    // create an object representing selected product info
    // and push it into local storage array
    if (!isProductInCart) {
        lsContent.push({
            id: productId,
            image: prodImage,
            name: prodName,
            price: prodPrice
        });

        // add product into into local storage
        setLSContent(lsContent);
        // update the display of courses in the shopping cart
        displayProducts();
    }
}

function removeProduct(productId) {
    // remove product from cart (and from local storage)

    // retrieve list of products from LS
    const lsContent = getLSContent();

    // get the index of the product item to remove
    // inside the local storage content array
    let productIndex;
    lsContent.forEach(function(product, i) {
        if (product.id === productId) {
            productIndex = i;
        }
    });

    // modify the items in local storage array
    // to remove the selected product item

    lsContent.splice(productIndex, 1);
    // update local storage content
    setLSContent(lsContent);

    displayProducts();
}

function clearCart() {
    // clear all products from cart (and local storage)

    // retrieve list of products from LS
    const lsContent = getLSContent();
    // empty array in local storage
    lsContent.splice(0, lsContent.length);
    // update local storage
    setLSContent(lsContent);
    // display cart content again
    displayProducts();
}

function checkout() {
    // checkout: just clear the cart
    // after user confirms the checkout process
    const cartProducts = cartContent.querySelector("tbody").innerHTML;
    if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
        clearCart();
    } else {
        return;
    }
}

// BIND EVENTS AND CALL FUNCTIONS

// Page load:
document.addEventListener("DOMContentLoaded", function(e) {
    // display list of products in cart, if any, on page load
    displayProducts();
    // display cart total
    displayCartTotal();
});

// open and close shopping cart
// when cart button is clicked
toggleCartBtn.addEventListener("click", function(e) {
    e.preventDefault();
    toggleCart();
});

// Save product in cart and Local Storage
// when add to cart button is clicked
productsContainer.addEventListener("click", function(e) {
    console.log("CCC" + e);
    if (e.target.classList.contains("add-to-cart")) {
        e.preventDefault();
        const clickedBtn = e.target;
        saveProduct(clickedBtn);
    }
});

productsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
        displayCartTotal();
    }
});

// bind removeProduct to click event of the cartContent table
cartContent.querySelector("tbody").addEventListener("click", function(e) {
    e.preventDefault();
    // identify the button that was clicked
    const clickedBtn = e.target;
    // if it's a remove button
    if (e.target.classList.contains("remove")) {
        // get the value of the data-id property, which contains the
        // id of the selected product
        const productId = clickedBtn.getAttribute("data-id");
        // use the id to remove the selected product
        removeProduct(productId);
        // display products in the cart again,
        // now the list should be displayed with 1 less product
        // or empty if no products are left in the cart

        // adjust the total
        displayCartTotal();
    }
});

// bind the button to clear the cart both to the function that
// clears the cart and to the function that adjusts the total price
clearCartBtn.addEventListener("click", function(e) {
    e.preventDefault();
    clearCart();
});
clearCartBtn.addEventListener("click", displayCartTotal);

// bind the button that does the checkout both to the function that
// controls the checkout and and to the function that adjusts the total price
checkoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    checkout();
});
checkoutBtn.addEventListener("click", displayCartTotal);