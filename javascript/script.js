var away = ["0", "15", "30", "40"];
var home = ["0", "15", "30", "40"];
var away_index = 0; 
var home_index = 0; 
var isd = false;


function show_data() {
    document.getElementById("point_left").innerHTML = home[home_index];
    document.getElementById("point_right").innerHTML = away[away_index];
    return;
}


function clear_all() {
    away_index = 0;
    home_index = 0;
    isd = false;
    show_data();
}
function clear_left() {
    home_index = 0;
    isd = false;
    show_data();
}
function clear_right() {
    away_index = 0;
    isd = false;
    show_data();
}


function arrow_clicked(btn) {
    if(isd === false) {
        switch (btn) {
            case "up_left":
                if(home[home_index] === "40") {
                    alert("HOME won!");
                    clear_all();
                }
                else if(home[home_index+1]!=undefined){
                    home_index += 1;
                    show_data();
                }
                break;
            case "up_right":
                if(away[away_index] === "40") {
                    alert("AWAY won!");
                    clear_all();
                }
                else if(away[away_index+1]!=undefined) {
                    away_index += 1;
                    show_data();
                }
                break;
            case "down_left":
                if(home[home_index] === "40") {
                    alert("HOME won!");
                    clear_all();
                }
                else if(home[home_index-1]!=undefined) {
                    home_index -= 1;
                    show_data();
                }
                break;
            case "down_right":
                if(away[away_index] === "40") {
                    alert("AWAY won!");
                    clear_all();
                }
                else if(away[away_index-1]!=undefined) {
                    away_index -= 1;
                    show_data();
                }
                break;
            default:
                break;
        }
        if(home[home_index] === away[away_index]) {
            if(home[home_index] === "40") {
                isd = true;
            }
        }
    }
    else {
        if(btn === "up_left" && "ADV." === document.getElementById("point_left").innerHTML) {
            alert("HOME won!");
            clear_all();
        }
        else if(btn === "up_right" && "ADV." === document.getElementById("point_right").innerHTML) {
            alert("AWAY won!");
            clear_all();
        }
        else {
            switch (btn) {
                case "up_left":
                    if(document.getElementById("point_right").innerHTML === "ADV."){
                        document.getElementById("point_right").innerHTML = away[away_index];
                    }
                    else {
                        document.getElementById("point_left").innerHTML = "ADV.";
                    }
                    break;
                case "up_right":
                    if(document.getElementById("point_left").innerHTML === "ADV.") {
                        document.getElementById("point_left").innerHTML = home[home_index];
                    }
                    else {
                        document.getElementById("point_right").innerHTML = "ADV.";
                    }
                    break;
                case "down_left":
                    if(document.getElementById("point_left").innerHTML === "ADV.") {
                        document.getElementById("point_left").innerHTML = away[away_index];
                    }
                    else {
                        home_index -= 1
                        isd = false;
                        show_data();
                    }
                    break;
                case "down_right":
                    if(document.getElementById("point_right").innerHTML === "ADV.") {
                        document.getElementById("point_right").innerHTML = away[away_index];
                    }
                    else {
                        away_index -= 1
                        isd = false;
                        show_data();
                    }
                    break;
                default:
                    break;
            }
        }
    }
}