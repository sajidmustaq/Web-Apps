

let buttons = document.querySelectorAll(".container button");
let body = document.querySelector("#body");
btnBox=document.getElementsByClassName("container")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let colorClass = button.className;
        applyTheme(colorClass);
    });
});

function applyTheme(colorClass) {
    switch (colorClass) {
        case "color1":
            document.body.style.backgroundColor = '#004E98';
            document.body.style.color = '#FF6700';
           
            document.querySelector(".container").style.backgroundColor='#584B53'
            break;
        case "color2":
            document.body.style.backgroundColor = '#353535';
            document.body.style.color = '#FFFFFF';
            document.querySelector(".container").style.backgroundColor='#004E98'
            break;
        case "color3":
            document.body.style.backgroundColor = '#F6AA1C';
            document.body.style.color = '#220901';
            document.querySelector(".container").style.backgroundColor='#353535'
            break;
        case "color4":
            document.body.style.backgroundColor = '#00A6FB';
            document.body.style.color = '#051923';
            document.querySelector(".container").style.backgroundColor='#353535'
            break;
        case "color5":
            document.body.style.backgroundColor = '#386641';
            document.body.style.color = '#F2E8CF';
            document.querySelector(".container").style.backgroundColor='#00A6FB'
            break;
        case "color6":
            document.body.style.backgroundColor = '#EFF6E0';
            document.body.style.color = '#01161E';
            document.querySelector(".container").style.backgroundColor='#353535'
            break;
        
        case "color7":
            document.body.style.backgroundColor = '#584B53';
            document.body.style.color = '#FEF5EF';
            document.querySelector(".container").style.backgroundColor='#EFF6E0'
            break;
        
    }
}
