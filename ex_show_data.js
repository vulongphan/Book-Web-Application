var titles_1 = localStorage.getItem ("titles")
        titles_2 = JSON.parse(titles_1)
        console.log(titles_2)
// titles_2 is a key in the dictionary a list of titles retrieved from the local storage
var conditions_1 = localStorage.getItem ("conditions")
        conditions_2 = JSON.parse(conditions_1)

var gmails_1 = localStorage.getItem ("gmails")
        gmails_2 = JSON.parse(gmails_1)

var phones_1 = localStorage.getItem ("phones")
        phones_2 = JSON.parse(phones_1)

const list_image = document.getElementsByClassName("list_ex");
    // console.log(list_image[0])
    // handle image onclick
    for (let i = 0; i < list_image.length; i++) {
        list_image[i].addEventListener("click", () => {
            console.log(list_image[i])
            window.location.href = `exchange_info.html?key=${list_image[i].getAttribute("value")}`
        })
    }

var url_string = window.location.href; 
var url = new URL(url_string);
var value = url.searchParams.get("key");

var title = ""
var condition = ""
var gmail = ""
var phone = ""

        title += titles_2[value]
        condition += conditions_2[value]
        gmail += gmails_2[value]
        phone += phones_2 [value]


//     }
// }
