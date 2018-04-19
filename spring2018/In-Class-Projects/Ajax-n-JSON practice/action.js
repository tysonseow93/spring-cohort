let allCats;
let selCat;

loadCategories();

function loadCategories(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            allCats = JSON.parse(this.responseText);
            console.log(allCats);

            let catLen = allCats.categories.length;
            for(let i = 0; i < catLen; i++) {
                $('.centerbox').append(
                    '<div class="card">'+
                    '<div class="catimage"><img src="'+allCats.categories[i].courseimage +'"></div>'+
                    '<div class="cattitle"><span>'+ allCats.categories[i].name +'</span></div>'+
                    '<div class="catsem"><span>'+ allCats.categories[i].semester +'</span></div>'+
                    '<div class="catdesc"><span>'+ allCats.categories[i].description +'</span></div>'+
                    '<div class="catbtn"><button class="bluebtn" onclick="selCatId('+ allCats.categories[i].catid +', this)">SELECT</button></div>'+
                    '</div>')
            };
        }
    };
    xhttp.open("GET", "//api.jsonbin.io/b/5ad654fbf5d4cd62f4721e02", true);
    xhttp.send();
}

function selCatId(catId, thebtn) {
    let theCard = $(thebtn).parent().parent();
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            selCat = JSON.parse(this.responseText);
            console.log(selCat);

            let classArray = selCat.classes[0].levels;
            let len = classArray.length;
            for(let i = 0; i < len; i++){
                $(theCard).append(
                    '<a class="typelinks" href="javascript: showAllClasses('+ i +')">'+ classArray[i].type +'</a>'
                );
            }
        }
    };
    xhttp.open("GET", "https://uxcobra.com/classapi/class"+ catId +".txt", true);
    xhttp.send();
}

function showAllClasses(typeIndex) {
    $('.centerbox').slideUp(function(){
        $('.classdisp').slideDown();
    });
    let len = selCat.classes.length;
    for(let i = 0; i < len; i++) {
        $('.classdisp').append(
            '<div class="rowitem">' + selCat.classes[i].classname + '</div>'+
            '<div class="rowitem">' + selCat.classes[i].levels[typeIndex].type + '</div>'+
            '<div class="rowitem">' + selCat.classes[i].levels[typeIndex].teacher + '</div>'+
            '<div class="rowitem">' + selCat.classes[i].levels[typeIndex].schedule + '</div>'
        );
    }
}