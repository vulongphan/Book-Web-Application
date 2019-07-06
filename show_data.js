var genre = ["list_manga","list_nfc"]

function click(class_0){
    const list_image = document.getElementsByClassName(class_0);
    // console.log(list_image[0])
    // handle image onclick
    for (let i = 0; i < list_image.length; i++) {
        list_image[i].addEventListener("click", () => {
            console.log(list_image[i])
            window.location.href = `book_info.html?key=${list_image[i].getAttribute("value")}`
        })
    }
}

for(let i =0; i<genre.length; i++ ){
    if (genre[i]=="list_manga"){
        click("list_manga")
    }
    if (genre[i] == "list_nfc"){
        click("list_nfc")
    }
}

// if (class_0=="list_manga"){
//     // click("list_manga")
//   }

    // when an image is clicked on, the browser will direct the user to a new page with the link "...html?key= x" in which 
    // x is the index of the chosen element to be shown in a list 

    // get value from url
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var value = url.searchParams.get("key");
    console.log(value)

    // from database get data
    function manga() {
    var list_manga = bdtb_cat.Manga;
    console.log(list_manga.length)
    for(let i = 0;i<list_manga.length;i++){
        if(list_manga[i].key == value){
            img_link += list_manga[i].Image_link
            title += list_manga[i].Title
            summary += list_manga[i].Summary
            author += list_manga[i].Author
            author_info += list_manga[i].Author_info
            }
        }
}


// function nfp() {
// var list_nfp = bdtb_cat.Phi_hư_cấu.Thời_sự_chính_trị;
//     for(let i = 0;i<list_nfp.length;i++){
//         if(list_nfp[i].key == value){
//             img_link += list_nfp[i].Image_link
//             title += list_nfp[i].Title
//             summary += list_nfp[i].Summary
//             author += list_nfp[i].Author
//             author_info += list_nfp[i].Author_info
//         }
// }
// }



//     var i
//     var img_link = ""
//     var title = ""
//     var summary = ""
//     var author = ""
//     var author_info = ""
// // function show() {
//     document.getElementById("Image").src = img_link
//     document.getElementById("title").innerHTML = title
//     document.getElementById("summary").innerHTML = summary
//     document.getElementById("author").innerHTML = author
//     document.getElementById("author_info").innerHTML = author_info
// // }



