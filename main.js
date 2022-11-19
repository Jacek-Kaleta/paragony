let table = [{ netto: '', brutto: '', vat: 'A', stawka: 23, kwota: '' }];
let offset = 0;
let line = 0;

let dv;

function dvv(n, j, v, c) {
    dv[n * 6 + j].innerHTML = v;
    dv[n * 6 + j].className = c;
}

function drawTable() {
    let i = offset;
    if (dv == undefined) dv = document.querySelectorAll('dv');
    for (let i = 0; i < 4; i++) {
        let j = offset + i;
        let c = (line == j) ? "grid-sel" : 'grid-item'
        if (j < table.length) {
            dvv(i, 0, j + 1, c)
            dvv(i, 1, table[j].netto / 100, c);
            dvv(i, 2, table[j].brutto, c + ' bg');
            dvv(i, 3, table[j].vat, c);
            dvv(i, 4, table[j].stawka, c);
            dvv(i, 5, table[j].kwota / 100, c);
        } else {
            dvv(i, 0, '', c);
            dvv(i, 1, '', c);
            dvv(i, 2, '', c);
            dvv(i, 3, '', c);
            dvv(i, 4, '', c);
            dvv(i, 5, '', c);
        }
    }
    let n = 0;
    let k = 0;
    let b = 0;

    let n23 = 0;
    let k23 = 0;
    let b23 = 0;
    let i23 = 0;

    let n8 = 0;
    let k8 = 0;
    let b8 = 0;
    let i8 = 0;

    let n5 = 0;
    let k5 = 0;
    let b5 = 0;
    let i5 = 0;

    let n0 = 0;
    let k0 = 0;
    let b0 = 0;
    let i0 = 0;

    let nz = 0;
    let kz = 0;
    let bz = 0;
    let iz = 0;

    for (let i = 0; i < table.length; i++) {
        n += table[i].netto;
        b += table[i].brutto * 100 / 1;
        k += table[i].kwota;

        if (table[i].vat == 'A') {
            n23 += table[i].netto;
            b23 += table[i].brutto * 100 / 1;
            k23 += table[i].kwota;
            i23 += 1;
        }

        if (table[i].vat == 'B') {
            n8 += table[i].netto;
            b8 += table[i].brutto * 100 / 1;
            k8 += table[i].kwota;
            i8 += 1;
        }

        if (table[i].vat == 'C') {
            n5 += table[i].netto;
            b5 += table[i].brutto * 100 / 1;
            k5 += table[i].kwota;
            i5 += 1;
        }

        if (table[i].vat == 'D') {
            n0 += table[i].netto;
            b0 += table[i].brutto * 100 / 1;
            k0 += table[i].kwota;
            i0 += 1;
        }

        if (table[i].vat == 'E') {
            nz += table[i].netto;
            bz += table[i].brutto * 100 / 1;
            kz += table[i].kwota;
            iz += 1;
        }
    }
    dvv(4, 0, table.length, 'grid-sum');
    dvv(4, 1, n / 100, 'grid-sum');
    dvv(4, 2, b / 100, 'grid-sum bg');
    dvv(4, 5, k / 100, 'grid-sum');

    dvv(5, 0, i23, 'grid-item');
    dvv(5, 1, n23 / 100, 'grid-item');
    dvv(5, 2, b23 / 100, 'grid-item bg');
    dvv(5, 3, 'A', 'grid-item');
    dvv(5, 4, '23', 'grid-item');
    dvv(5, 5, k23 / 100, 'grid-item');

    dvv(6, 0, i8, 'grid-item');
    dvv(6, 1, n8 / 100, 'grid-item');
    dvv(6, 2, b8 / 100, 'grid-item bg');
    dvv(6, 3, 'B', 'grid-item');
    dvv(6, 4, '8', 'grid-item');
    dvv(6, 5, k8 / 100, 'grid-item');

    dvv(7, 0, i5, 'grid-item');
    dvv(7, 1, n5 / 100, 'grid-item');
    dvv(7, 2, b5 / 100, 'grid-item bg');
    dvv(7, 3, 'C', 'grid-item');
    dvv(7, 4, '5', 'grid-item');
    dvv(7, 5, k5 / 100, 'grid-item');

    dvv(8, 0, i0, 'grid-item');
    dvv(8, 1, n0 / 100, 'grid-item');
    dvv(8, 2, b0 / 100, 'grid-item bg');
    dvv(8, 3, 'D', 'grid-item');
    dvv(8, 4, '0', 'grid-item');
    dvv(8, 5, k0 / 100, 'grid-item');


    dvv(9, 0, iz, 'grid-item');
    dvv(9, 1, nz / 100, 'grid-item');
    dvv(9, 2, bz * 1.0, 'grid-item bg');
    dvv(9, 3, 'E', 'grid-item');
    dvv(9, 4, 'ZW', 'grid-item');
    dvv(9, 5, kz / 100, 'grid-item');
}

function addline() {
    table.push({ netto: '', brutto: '', vat: 'A', stawka: 23, kwota: '' })
}

function digit(d) {
    function dellast(v) {
        return v.substring(0, v.length - 1);
    }

    if (d == 'Backspace') {
        table[line].brutto = dellast(table[line].brutto);
    } else
    if (d == '+') {
        if (table[line].vat == 'A') table[line].vat = 'B';
        else
        if (table[line].vat == 'B') table[line].vat = 'C';
        else
        if (table[line].vat == 'C') table[line].vat = 'D';
        else
        if (table[line].vat == 'D') table[line].vat = 'E';
        else
        if (table[line].vat == 'E') table[line].vat = 'A';
    } else
    if (d == '-') {
        if (table[line].vat == 'A') table[line].vat = 'E';
        else
        if (table[line].vat == 'B') table[line].vat = 'A';
        else
        if (table[line].vat == 'C') table[line].vat = 'B';
        else
        if (table[line].vat == 'D') table[line].vat = 'C';
        else
        if (table[line].vat == 'E') table[line].vat = 'D';
    } else
    if (d == '.') {
        if (table[line].brutto.indexOf('.') < 0)
            table[line].brutto += '.';
    } else
    if (d == ',') {
        if (table[line].brutto.indexOf('.') < 0)
            table[line].brutto += '.';
    } else
    if (table[line].brutto.indexOf('.') >= 0) {
        if (table[line].brutto.indexOf('.') + 2 >= table[line].brutto.length)
            table[line].brutto += d;;
    } else
    if (table[line].brutto.indexOf('.') < 0) {
        if (table[line].brutto == '0') {
            if (d != '0')
                table[line].brutto = d
        } else
        if (table[line].brutto.length < 8)
            table[line].brutto += d;
    } else
    if (table[line].brutto.indexOf('.') >= 0) {
        if (table[line].brutto.length < 10)
            table[line].brutto += d;
    }

    if (table[line].vat == 'A') table[line].stawka = '23';
    else
    if (table[line].vat == 'B') table[line].stawka = '8';
    else
    if (table[line].vat == 'C') table[line].stawka = '5';
    else
    if (table[line].vat == 'D') table[line].stawka = '0';
    else
    if (table[line].vat == 'E') table[line].stawka = '0';

    if (table[line].stawka !='0')
    table[line].kwota = Math.round(table[line].brutto /(1+table[line].stawka/100) * table[line].stawka);
    else 
    table[line].kwota=0;
    table[line].netto = table[line].brutto * 100 - table[line].kwota;
    drawTable();
}


function checkperiod() {
    if (table[line].brutto.length == 0)
        table[line].brutto = '0';

    if (table[line].brutto.indexOf('.') >= 0)
        if (table[line].brutto.indexOf('.') == table[line].brutto.length - 1)
            table[line].brutto = table[line].brutto.substring(0, table[line].brutto.length - 1);
}

function nextvalue() {
    checkperiod();
    if (table[line].brutto != '0') {
        line++;
        if (table.length < line + 1) addline();
        if (line - offset > 3) offset++;
        drawTable();
    }
}

function nextline() {
    checkperiod();
    if (line < table.length - 1) line++;
    if (line - offset > 3) offset++;
    drawTable();;
}

function prevline() {
    checkperiod();
    if (line > 0) line--;
    if (line - offset < 0) offset--;
    drawTable();;
}


window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return true;
    }


    if (event.key === 'F5') {
        return true;
    } else
    if (event.key === '+') {
        digit(event.key)
    } else
    if (event.key === '-') {
        digit(event.key)
    } else
    if (event.key >= '0' && event.key <= '9') {
        digit(event.key)
    } else
    if (event.key === '.' || event.key === ',') {
        digit(event.key)
    } else
    if (event.key === 'Backspace') {
        digit(event.key)
    }

    if (event.key === "Enter" || event.key === " ") {
        nextvalue()
    } else
    if (event.key === "ArrowUp") {
        prevline()
    } else
    if (event.key === "ArrowDown") {
        nextline()
    }
    if (event.key === "Tab") {
        if (IsFullScreenCurrently())
            GoOutFullscreen();
        else
            GoInFullscreen(document.querySelector('body'));
    }
    event.preventDefault();
}, true);

function GoInFullscreen(element) {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if (document.msExitFullscreen)
        document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
    var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

    // If no element is in full-screen
    if (full_screen_element === null)
        return false;
    else
        return true;
}