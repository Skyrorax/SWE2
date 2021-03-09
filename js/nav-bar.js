let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');

btn1.addEventListener("click", deactivateOtherSubmenus);
btn2.addEventListener("click", deactivateOtherSubmenus);
btn3.addEventListener("click", deactivateOtherSubmenus);

function deactivateOtherSubmenus() {
    switch (this.id) {
        case "btn-1":
            if (btn2.checked == true) btn2.checked = false;
            if (btn3.checked == true) btn3.checked = false;
            break;

        case "btn-2":
            if (btn1.checked == true) btn1.checked = false;
            if (btn3.checked == true) btn3.checked = false;
            break;
        
        case "btn-3":
            if (btn1.checked == true) btn1.checked = false;
            if (btn2.checked == true) btn2.checked = false;
            break;
                
        default:
            break;
    }
}