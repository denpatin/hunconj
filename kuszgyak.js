function mehet() {
    for (x = 1; x < 14; x++) {
        document.gyak["ige" + x].value = ""
    }
    ikod = "aaaaaaaaaaaaa";
    tar = "1";
    document.lap.tr.value = tar;
    for (szm = 1; szm < 7; szm++) {
        document.lap.szem.value = szm;
        ertekel();
        if (ikod.charAt(10) == "f" && (idm != "1" || szm != 3 && szm != 6) || ikod.charAt(10) == "g" && idm != "2" || ikod.charAt(10) == "c" && szm != 3 || ikod.charAt(10) == "b" && szm != 3 && szm != 6 || idm == "4" && ikod.charAt(12) == "b") {
            document.lap.alak.value = "";
            document.lap.alak1.value = "";
            document.lap.alak2.value = ""
        }
        forma[szm] = document.lap.alak.value;
        forma1[szm] = document.lap.alak1.value;
        forma2[szm] = document.lap.alak2.value
    }
    szm = 7;
    document.lap.szem.value = szm;
    ertekel();
    if (ikod.charAt(3) == "b" || ikod.charAt(11) == "b" || ikod.charAt(11) == "c" || ikod.charAt(10) == "c" || ikod.charAt(10) == "f" || ikod.charAt(11) == "f" || ikod.charAt(10) == "g" && idm != "2") {
        document.lap.alak.value = "";
        document.lap.alak1.value = "";
        document.lap.alak2.value = ""
    }
    forma[szm] = document.lap.alak.value;
    forma1[szm] = document.lap.alak1.value;
    forma2[szm] = document.lap.alak2.value;
    tar = "2";
    document.lap.tr.value = tar;
    for (szm = 1; szm < 7; szm++) {
        document.lap.szem.value = szm;
        ertekel();
        if (ikod.charAt(3) == "b" || ikod.charAt(11) == "b" || ikod.charAt(10) == "c" || ikod.charAt(10) == "f" || ikod.charAt(11) == "f" || ikod.charAt(10) == "g" && idm != "2" || ikod.charAt(10) == "b" && szm != 3 && szm != 6) {
            document.lap.alak.value = "";
            document.lap.alak1.value = "";
            document.lap.alak2.value = ""
        }
        szm = Number(szm);
        forma[7 + szm] = document.lap.alak.value;
        forma1[7 + szm] = document.lap.alak1.value;
        forma2[7 + szm] = document.lap.alak2.value
    }
}

function ertekel() {
    tar = document.lap.tr.value;
    if (y == 0) idm = document.lap.ido.value;
    y = 1;
    szm = document.lap.szem.value;
    b = "";
    var e = "";
    var t = "";
    var n = "";
    var r = "";
    var i = "a";
    var s = "a";
    szo = document.lap.ige.value;
    szo3 = szo;
    tovek();
    document.lap.kiir.value = szo;
    ikesf();
    veg2 = szo.slice(szo.length - 2, szo.length);
    veg1 = szo.slice(szo.length - 1, szo.length);
    veg3 = szo.slice(szo.length - 3, szo.length);
    harm(szo);
    rendh();
    iktovalt();
    szotag();
    kot();
    speci();
    akoto();
    szoveg();
    egyeb();
    beallit()
}

function tovek() {
    igek = "";
    if (szo.slice(0, 9) == "keresztül") {
        szo = szo.slice(9, szo.length);
        igek = "keresztül"
    } else if (szo.slice(0, 8) == "kétségbe") {
        szo = szo.slice(8, szo.length);
        igek = "kétségbe"
    }
    if (szo.slice(0, 7) == "kölcsön" || szo.slice(0, 7) == "széjjel" || szo.slice(0, 7) == "nyilván" || szo.slice(0, 7) == "helyben" || szo.slice(0, 7) == "cserben" || szo.slice(0, 7) == "viszont") {
        if (szo == "kölcsönöz") {
            igek = "";
            szo = szo
        } else {
            igek = szo.slice(0, 7);
            szo = szo.slice(7, szo.length)
        }
    } else if (szo.slice(0, 6) == "rendre" || szo.slice(0, 6) == "ellent" || szo.slice(0, 6) == "közben" || szo.slice(0, 6) == "szembe" || szo.slice(0, 6) == "szerte" || szo.slice(0, 6) == "tovább" || szo.slice(0, 6) == "vissza" || szo.slice(0, 6) == "együtt" || szo.slice(0, 6) == "helyre" || szo.slice(0, 6) == "tönkre" || szo.slice(0, 6) == "véghez") {
        if (szo == "ellentételez" || szo == "szembesít" || szo == "szertelenkedik" || szo == "továbbít" || szo == "visszakozik") {
            igek = "";
            szo = szo
        } else pot(6, 5)
    } else if (szo.slice(0, 5) == "agyon" || szo.slice(0, 5) == "által" || szo.slice(0, 5) == "egybe" || szo.slice(0, 5) == "egyet" || szo.slice(0, 5) == "észre" || szo.slice(0, 5) == "félbe" || szo.slice(0, 5) == "félre" || szo.slice(0, 5) == "felül" || szo.slice(0, 5) == "hátra" || szo.slice(0, 5) == "helyt" || szo.slice(0, 5) == "hozzá" || szo.slice(0, 5) == "ketté" || szo.slice(0, 5) == "körbe" || szo.slice(0, 5) == "körül" || szo.slice(0, 5) == "közbe" || szo.slice(0, 5) == "közre" || szo.slice(0, 5) == "közzé" || szo.slice(0, 5) == "külön" || szo.slice(0, 5) == "létre" || szo.slice(0, 5) == "mellé" || szo.slice(0, 5) == "odább" || szo.slice(0, 5) == "odébb" || szo.slice(0, 5) == "össze" || szo.slice(0, 5) == "rajta" || szo.slice(0, 5) == "síkra" || szo.slice(0, 5) == "utána" || szo.slice(0, 5) == "végbe" || szo.slice(0, 5) == "végig" || szo.slice(0, 5) == "végre" || szo.slice(0, 5) == "ellen" || szo.slice(0, 5) == "előre") {
        ker = szo;
        kif = new RegExp(" " + ker + " ");
        van = kif.exec(lista5);
        if (van != null || szo3 == "ellenőriz") {
            igek = "";
            szo = szo
        } else pot(5, 3)
    } else if (szo.slice(0, 4) == "abba" || szo.slice(0, 4) == "alul" || szo.slice(0, 4) == "átal" || szo.slice(0, 4) == "bele" || szo.slice(0, 4) == "belé" || szo.slice(0, 4) == "benn" || szo.slice(0, 4) == "haza" || szo.slice(0, 4) == "fenn" || szo.slice(0, 4) == "jóvá" || szo.slice(0, 4) == "neki" || szo.slice(0, 4) == "szét" || szo.slice(0, 4) == "tele" || szo.slice(0, 4) == "tova" || szo.slice(0, 4) == "újjá" || szo.slice(0, 4) == "újra" || szo.slice(0, 4) == "után" || szo.slice(0, 4) == "utol" || szo.slice(0, 5) == "vele") {
        ker = szo;
        kif = new RegExp(" " + ker + " ");
        van = kif.exec(lista4);
        if (van != null) {
            igek = "";
            szo = szo
        } else pot(4, 2)
    } else if (szo.slice(0, 3) == "alá" || szo.slice(0, 3) == "elő" || szo.slice(0, 3) == "fel" || szo.slice(0, 3) == "ide" || szo.slice(0, 3) == "jól" || szo.slice(0, 3) == "jót" || szo.slice(0, 3) == "meg" || szo.slice(0, 3) == "oda" || szo.slice(0, 3) == "ott" || szo.slice(0, 3) == "túl") {
        ker = szo;
        kif = new RegExp(" " + ker + " ");
        van = kif.exec(lista3);
        if (van != null) {
            igek = "";
            szo = szo
        } else {
            igek = szo.slice(0, 3);
            szo = szo.slice(3, szo.length)
        }
    } else if (szo.slice(0, 2) == "át" || szo.slice(0, 2) == "be" || szo.slice(0, 2) == "el" || szo.slice(0, 2) == "ki" || szo.slice(0, 2) == "rá" || szo.slice(0, 2) == "le") {
        ker = szo;
        kif = new RegExp(" " + ker + " ");
        van = kif.exec(lista2);
        if (van != null) {
            igek = "";
            szo = szo
        } else {
            igek = szo.slice(0, 2);
            szo = szo.slice(2, szo.length)
        }
    }
    document.lap.kiir.value = szo;
    if (igek != "") kodol(1, "b")
}

function pot(e, t) {
    ker = szo;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(lista2b);
    if (van != null) {
        igek = szo.slice(0, t);
        szo = szo.slice(t, szo.length)
    } else {
        igek = szo.slice(0, e);
        szo = szo.slice(e, szo.length)
    }
}

function beallit() {
    kotoh(idm, tar, szm);
    akotoh(idm, tar, szm);
    tovalt();
    felsz();
    jel(idm, tar, szm);
    rag(idm, tar, szm);
    document.lap.alak1.value = "";
    document.lap.alak2.value = "";
    vegszo = szo + ak + j + k + r;
    if (idm == "4" && szm == "2") igek != "" ? document.lap.alak1.value = vegszo + " " + igek : document.lap.alak1.value = vegszo;
    if (idm == "4" && szm == "2") {
        tar == "1" ? vegszo = szo + ak + j + "(" + k + r + ")" : vegszo = szo + ak + "(" + j + k + ")" + r;
        if (tar == "1") {
            document.lap.alak2.value = szo + ak + j
        }
        if (tar == "2") {
            document.lap.alak2.value = szo + ak + r
        }
        if (tar == "2" && (veg2 == "ít" || veg2 == "űt" || veg2 == "ét" || veg2 == "nt" || veg2 == "mt" || veg2 == "rt" || veg2 == "lt" || veg2 == "jt")) {
            vegszo = szo + ak + j + "(" + k + ")" + r;
            document.lap.alak2.value = szo + ak + j + r
        }
        if (tar == "2" && (veg3 == "szt" || veg3 == "tsz" || veg3 == "ász" || veg3 == "asz" || veg3 == "esz" || veg3 == "úsz" || veg3 == "ész" || veg2 == "dz")) {
            vegszo2 = szo.slice(0, szo.length - 1) + "zd";
            vegszo = szo + ak + j + k + r + " / " + vegszo2;
            document.lap.alak2.value = vegszo2
        }
        if (tar == "1" && (szo2 == "tesz" || szo2 == "vesz" || szo2 == "lesz" || szo2 == "van")) {
            vegszo = szo + "gyél" + " / " + szo.slice(0, szo.length - 1) + "égy";
            document.lap.alak2.value = szo.slice(0, szo.length - 1) + "égy"
        }
        if (tar == "1" && (szo == "e" || szo == "i" || szo == "vi")) {
            vegszo = szo + ak + j + k + r;
            document.lap.alak2.value = vegszo
        }
        if (tar == "2" && (szo == "te" || szo == "ve" || szo == "vi" || szo == "hi" || szo == "e" || szo == "i")) {
            vegszo = szo + ak + j + k + r + " / " + szo + "dd";
            document.lap.alak2.value = szo + "dd"
        }
        if (ikod.charAt(9) == "f" && tar == "2") {
            vegszo2 = szo + "dd";
            document.lap.alak2.value = vegszo2;
            vegszo = szo + ak + j + k + r + " / " + vegszo2
        }
    } else {
        vegszo = szo + ak + j + k + r;
        vegszo2 = ""
    }
    if (idm != "4") igek != "" ? vege = igek + vegszo : vege = vegszo;
    else igek != "" ? vege = vegszo + " " + igek : vege = vegszo;
    document.lap.alak.value = vege;
    if (igek != "" && document.lap.alak2.value != "") document.lap.alak2.value = document.lap.alak2.value + " " + igek;
    if (document.lap.alak1.value == "") document.lap.alak1.value = document.lap.alak.value;
    if (document.lap.alak2.value == "") document.lap.alak2.value = document.lap.alak1.value
}

function rto() {
    switch (ikod.charAt(9)) {
        case "b":
            if (idm == "2" || idm == "4") szo = szo.slice(0, szo.length - 2);
            else if (idm == "3") szo = szo.slice(0, szo.length - 2) + "n";
            break;
        case "c":
            if (idm == "2" || idm == "4") szo = szo.slice(0, szo.length - 2);
            else if (idm == "3") szo = szo.slice(0, szo.length - 2) + "n";
            if (idm == "2" && tar == "1" && szm == 3) szo == "e" ? szo = "ev" : szo = "iv";
            break;
        case "d":
            if (idm != "1" || idm == "1" && (szm == 5 || szm == 6)) szo = szo.slice(0, szo.length - 2) + "n";
            if (idm == "1" && szm == 2) szo = szo.slice(0, szo.length - 3) + "é";
            break;
        case "e":
            if (idm == "2") szo = "jö";
            else if (idm == "3") szo = "jön";
            else if (idm == "4") szo = "jöj";
            else if (idm == "1" && (szm == 1 || szm == 4)) szo = "jöv";
            else if (idm == "1" && szm == 2) szo = "jös";
            else if (idm == "1" && szm == 5) szo = "jöt";
            break;
        case "f":
            if (idm == "1" && tar == "1" && (szm == 1 || szm == 4) || idm == "1" && tar == "2" && szm != 4) szo == "ró" ? szo = "rov" : szo = szo.slice(0, szo.length - 1) + "öv";
            if (szo == "rov" && idm == "1" && tar == "2" && (szm == 3 || szm == 5 || szm == 6)) szo = "ró";
            break;
        case "g":
            if (idm == "1" && szm != 3 && szm != 6) szo = "vagy";
            else if (idm == "2") szo = "vol";
            else if (idm == "3") {
                szo = "vol";
                har = "a"
            } else if (idm == "4") {
                szo = "le";
                har = "b"
            }
            break
    }
}

function kotoh(e, t, n) {
    k = "";
    switch (n) {
        case "1":
            if (har == "a") e == "1" ? k = k1b : k = k1;
            if (har == "b") k = k2;
            if (har == "c") e == "1" ? k = k2b : k = k2;
            break;
        case "2":
            if (t == "1" && har == "a") e == "1" ? k = k1b : k = k5;
            else if (t == "2" && har == "a") e == "1" ? k = k1b : k = k1;
            else if (har == "b") t == "1" && (e == "2" || e == "4") ? k = k6 : k = k2;
            else if (t == "1" && har == "c") e == "1" ? k = k2b : k = k6;
            else if (t == "2" && har == "c") e == "1" ? k = k2b : k = k2;
            break;
        case "3":
            if (har == "a") e == "4" && t == "1" ? k = k1b : k = k1;
            else if (har == "b") e == "1" ? k = k0 : k = k2;
            else if (har == "c") e == "4" && t == "1" ? k = k2b : k = k2;
            break;
        case "4":
            har == "a" ? k = k3 : k = k4;
            break;
        case "5":
            if (har == "a") t == "1" && e == "1" ? k = k1b : k = k1;
            if (har == "a" && t == "2") k = k5;
            if (har == "b" || har == "c") t == "2" ? k = k6 : k = k2;
            if (har == "c" && t == "1" && e == "1") k = k2b;
            break;
        case "6":
            if (t == "1") har == "a" ? k = k1 : k = k2;
            if (t == "2") har == "a" ? k = k5 : k = k6;
            break;
        case "7":
            har == "a" ? k = k1 : k = k2;
            if ((ikod.charAt(8) == "j" || ikod.charAt(8) == "k") && e == "1") k = k0;
            break
    }
    if ((e == "1" || e == "2") && t == "1" && n == 3 || (har == "b" || har == "c") && e == "1" && t == "2" && (n == 3 || n == 5 || n == 6)) k = k0;
    if (e == "3" && har == "a") t == "1" && n == 3 ? k = k1 : k = k5;
    if (e == "3" && (har == "b" || har == "c")) t == "1" && n == 3 ? k = k2 : k = k6;
    if (e == "3" && t == "1" && n == 1) k = k6;
    return k
}

function akotoh(e, t, n) {
    ak = "";
    if (e == 2) switch (ikod.charAt(6)) {
        case "a":
            if (t == 1 && n == 3 && ikod.charAt(9) != "b" && ikod.charAt(9) != "e" && ikod.charAt(9) != "f") {
                if (har == "a") ak = "o";
                else if (har == "b") ak = "e";
                else if (har == "c") ak = "ö"
            } else ak = "";
            break;
        case "b":
            ak = "";
            break;
        case "e":
            if (har == "a") ak = "o";
            else if (har == "b") ak = "e";
            else if (har == "c") ak = "ö";
            break
    }
    if (e == "3" && ikod.charAt(5) == "b") har == "a" ? ak = k1 : ak = k2;
    if ((ikod.charAt(8) == "g" || ikod.charAt(8) == "h" || ikod.charAt(8) == "l") && e == "3") ak = "";
    if (e == "3" && szo == "alapul") ak = ""
}

function tovalt() {
    rov = 0;
    ker = szo;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(rov1);
    if (van != null) rov = "1";
    van = kif.exec(rov2);
    if (van != null) rov = "2";
    van = kif.exec(rov3);
    if (van != null) rov = "3";
    van = kif.exec(rov4);
    if (van != null) rov = "4";
    if (szo == "kétell" || szo == "kevesell" || szo == "kicsinyell") rov = "5";
    if (rov != 0) cserel()
}

function cserel() {
    if (idm == 1 && (tar == 1 && (szm == 1 || szm == 4) || tar == 2 && (szm == 1 || szm == 2))) rov != "5" ? szo = szo.slice(0, szo.length - 2) + szo.slice(szo.length - 1, szo.length) : szo = szo.slice(0, szo.length - 3) + "l";
    if (idm == 1 && tar == 2 && har != "a" && (szm == 3 || szm == 5 || szm == 6)) rov != "5" ? szo = szo.slice(0, szo.length - 2) + szo.slice(szo.length - 1, szo.length) : szo = szo.slice(0, szo.length - 3) + "l";
    if ((rov == 2 || rov == 4) && idm == 2 && tar == 1 && szm == 3 || rov == 4 && idm == 1 && tar == 1 && szm == 2) szo = szo.slice(0, szo.length - 2) + szo.slice(szo.length - 1, szo.length);
    if (szo == "kétell" && (idm == "2" || idm == "3")) szo = "kétl"
}

function cserelb() {
    switch (har) {
        case "a":
            plus = "o";
            if (szo == "arányl" || szo == "viszonyl") plus = "u";
            break;
        case "b":
            plus = "e";
            break;
        case "c":
            plus = "ö";
            break
    }
    szo2 = szo.slice(0, szo.length - 1) + plus + veg1;
    szo = szo2
}

function cserelc() {
    switch (ikod.charAt(8)) {
        case "f":
            idm != "1" || idm == "1" && tar == "1" && (szm == 5 || szm == 6 || szm == 7) || idm == "1" && tar == "2" && szm == 4 ? szo = szo.slice(0, szo.length - 2) + "ez" : szo = szo;
            break;
        case "g":
            if (idm != "1" || idm == "1" && har == "a" && tar == "2" && szm != 1 && szm != 2 || idm == "1" && har == "b" && tar == "2" && szm == 4) har == "a" ? szo = szo.slice(0, szo.length - 2) + "od" : szo = szo.slice(0, szo.length - 2) + "ed";
            if (szo == "haragod") szo = "haragud";
            break;
        case "h":
            if (idm != "1" || idm == "1" && har == "a" && tar == "2" && szm != 1 && szm != 2 || idm == "1" && har == "b" && tar == "2" && szm == 4) har == "a" ? szo = szo.slice(0, szo.length - 2) + "od" : szo = szo.slice(0, szo.length - 2) + "ed";
            break;
        case "i":
            if (idm != "1") {
                if (szo == "alkusz") {
                    szo = "alkud"
                } else if (szo == "esküsz") {
                    szo = "esküd"
                }
            }
            break;
        case "l":
            if (idm != "1") {
                if (szo == "alsz") {
                    szo = "alud"
                } else if (szo == "feksz") {
                    har = "c";
                    szo = "feküd"
                }
            }
            if (idm == "1") {
                if (har == "a" && tar == "2" && szm != 1 && szm != 2 || idm == "1" && har == "b" && tar == "2" && szm == 4) {
                    if (szo == "alsz") szo = "alusz";
                    else if (szo == "feksz") szo = "feküsz"
                }
            }
            break
    }
}

function felsz() {
    uta = 0;
    fsz = "a";
    minus1 = szo.slice(0, szo.length - 1);
    veg11 = minus1.slice(minus1.length - 1, minus1.length);
    ker = veg11;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(hlista3);
    if (van != null || veg11 == "á") uta = 1;
    if (uta == 1 && veg1 == "t") fsz = "b";
    if (veg2 == "zt") fsz = "c";
    if (veg2 == "st") fsz = "d";
    kodol(8, fsz);
    if (idm == 4 && ikod.charAt(7) == "b") szo = szo.slice(0, szo.length - 1) + "s";
    if (idm == 4) ikod.charAt(7) == "c" || ikod.charAt(7) == "d" ? szo = szo.slice(0, szo.length - 2) + "s" : szo = szo
}

function jel(e, t, n) {
    j = "";
    es = "j";
    if (ikod.charAt(4) == "b" || e == 4 && veg1 == "t") es = "s";
    if (ikod.charAt(4) == "c" || ikod.charAt(4) == "d" || ikod.charAt(4) == "e" || e == 4 && veg3 == "szt") es = "z";
    if (e == 1 && t == 2 && (n == 3 || n == 5 || n == 6)) har == "a" ? j = es : j = "i";
    if (e == 1 && t == 2 && (n == 3 || n == 5 || n == 6)) har == "a" ? j = es : j = "i";
    if (e == 1 && t == 2 && n == 4) j = es;
    if (e == 2 && ikod.charAt(6) == "a") t == 1 && n == 3 ? j = "tt" : j = "t";
    if (e == 2 && (ikod.charAt(6) == "e" || ikod.charAt(9) == "b" || ikod.charAt(9) == "c" || ikod.charAt(9) == "e" || ikod.charAt(9) == "f")) j = "tt";
    if (e == 2 && ikod.charAt(6) == "b") j = "t";
    if (e == 3) j = "n";
    if (e == 4) j = es;
    if (e == 4 && (ikod.charAt(9) == "b" || ikod.charAt(9) == "c" || ikod.charAt(9) == "g")) szo == "hi" ? j = "ggy" : j = "gy";
    if (szo == "izz" && (e == "4" || e == "1")) j = "";
    if (ikod.charAt(4) == "d") j == "z" ? szo = szo.slice(0, szo.length - 2) + "ss" : szo = szo.slice(0, szo.length - 2) + "sz";
    if (ikod.charAt(4) == "e") j == "z" ? szo = szo.slice(0, szo.length - 2) + "dd" : szo = szo.slice(0, szo.length - 2) + "dz"
}

function rag(e, t, n) {
    r = "";
    switch (n) {
        case "1":
            t == 1 && e != 2 ? r = r1 : r = r2;
            if (e == 1 && ikod.charAt(2) == "c") r = r2;
            break;
        case "2":
            t == "1" ? r = r3 : r = r5;
            if (e == "1" && t == 1 && ikod.charAt(4) == "a") r = r4;
            if (r == r4) har == "a" ? k = k1 : k = k2;
            if (ikod.charAt(9) == "e" && e == "1" && t == "1") {
                r = r4;
                k = ""
            }
            if (e == "1" && t == "1" && ikod.charAt(4) == "a" && ikod.charAt(5) == "a") k = k0;
            if (szo == "vagy" && e == "1") r = "";
            break;
        case "3":
            if (t != "1" && e != "4" && ikod.charAt(2) != "b") r = r6;
            else if (t == "1" && e == "4") r = r8;
            else if (t == 1 && e == 1 && (ikod.charAt(2) == "b" || ikod.charAt(2) == "c")) r = r7;
            break;
        case "4":
            t == 1 || e == 3 ? r = r9 : r = r10;
            break;
        case "5":
            har == "a" ? r = r11 : r = r12;
            if (e == 1 && t == 1 && har == "c") r = r13;
            if (e == "1" && t == "1" && ikod.charAt(5) == "a") k = k0;
            if (e == "1" && t == "1" && szo == "füröd") k = k0;
            break;
        case "6":
            if (t == 1 && e != 2) har == "a" ? r = r14 : r = r15;
            else if (e == 2 || t == 2) r = r10;
            if (e == 1 && t == 1 && ikod.charAt(5) == "a" && szo != "bocsát") k = k0;
            break;
        case "7":
            har == "a" ? r = r16 : r = r17;
            if (e == "1" && t == "1" && ikod.charAt(5) == "a") k = k0;
            if (e == "1" && veg2 == "ll") har == "a" ? r = "ak" : r = "ek";
            if (e == "1" && (veg2 == "ll" || szo == "ajánl")) k = k0;
            break
    }
}

function valt(e) {
    document.gyak.fogomb.value = "  R A G O Z  ";
    ir = 0;
    switch (e) {
        case 1:
            idm = "1";
            break;
        case 2:
            idm = "2";
            break;
        case 3:
            idm = "3";
            break;
        case 4:
            idm = "4";
            break
    }
    mehet()
}

function speci() {
    if (szo2 == "vész") idm != "1" || szm != 3 || tar != "1" ? szo = "vesz" : szo = "vész";
    if (szo2 == "veszik") {
        szo = "vesz";
        kodol(10, "a");
        kodol(3, "b")
    }
    if (szo2 == "veszt" && idm == "4") szo = "veszít";
    if (szo2 == "alapszik") {
        if (idm != "1") {
            szo = "alapul";
            kodol(6, "b")
        } else szo = szo
    }
}

function ikesf() {
    szo2 = szo;
    ikes = szo.slice(szo.length - 2, szo.length);
    if (ikes == "ik") {
        ik = "b";
        szo = szo.slice(0, szo.length - 2)
    } else ik = "a";
    ker = szo + "ik";
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(ik1);
    if (van != null || szo2 == "vetkőzik") ik = "c";
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(ik2);
    if (van != null) ik = "c";
    if (ikes == "ik" && szo.slice(szo.length - 2, szo.length) == "sz") szo.slice(szo.length - 3, szo.length) != "ász" && szo.slice(szo.length - 3, szo.length) != "ész" && szo != "basz" && szo != "vesz" || szo == "vadász" || szo == "tornász" || szo == "mász" ? ik = "c" : ik = "b";
    if (ikes == "ik" && szo.slice(szo.length - 2, szo.length) == "dz") ik = "c";
    if (ikes == "ik" && szo.slice(szo.length - 1, szo.length) == "t" && szo != "szület") ik = "c";
    if (ikes == "ik" && (szo == "buk" || szo == "lak" || szo == "szeg" || szo == "szok" || szo == "szök" || szo == "vágy" || szo == "ugr" || szo == "fürd")) ik = "c";
    if (ikes == "ik" && szo.slice(szo.length - 1, szo.length) == "d" && szo != "hazud" && szo != "vénhed" && szo != "okád") ik = "c";
    kodol(3, ik)
}

function kodol(e, t) {
    ko1 = ikod.slice(0, e - 1);
    ko2 = ikod.slice(e, ikod.length);
    ikod = ko1 + t + ko2;
    document.lap.kod.value = ikod
}

function harm(e) {
    p = -1;
    v = -1;
    o = -1;
    for (x = e.length - 1; x > -1; x--)
        if (e.charAt(x) == "a" || e.charAt(x) == "á" || e.charAt(x) == "o" || e.charAt(x) == "ó" || e.charAt(x) == "u" || e.charAt(x) == "ú") {
            break
        }
    v = x + 1;
    for (x = e.length - 1; x > -1; x--)
        if (e.charAt(x) == "e" || e.charAt(x) == "é" || e.charAt(x) == "i" || e.charAt(x) == "í") break;
    p = x + 1;
    for (x = e.length - 1; x > -1; x--)
        if (e.charAt(x) == "ö" || e.charAt(x) == "ő" || e.charAt(x) == "ü" || e.charAt(x) == "ű") break;
    o = x + 1;
    v > 0 ? har = "a" : har = "b";
    if (o > 0 && o > v && o > p) har = "c";
    ker = e;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(lista6);
    if (van != null) har = "b";
    van = kif.exec(lista7);
    if (van != null) har = "c";
    van = kif.exec(lista8);
    if (van != null) har = "a";
    kodol(2, har)
}

function rendh() {
    if (ok == 0 && (szo == "tesz" || szo == "vesz" || szo == "visz" || szo == "lesz" || szo == "hisz")) {
        tip = "b";
        ok = 1
    }
    if (szo == "lesz") kodol(4, "b");
    else if (ok == 0 && (szo == "esz" || szo == "isz")) {
        tip = "c";
        kodol(2, "c");
        ok = 1
    } else if (ok == 0 && szo == "megy") {
        tip = "d";
        kodol(4, "b");
        ok = 1
    } else if (ok == 0 && szo == "jön") {
        tip = "e";
        kodol(4, "b");
        ok = 1
    } else if (ok == 0 && (szo == "lő" || szo == "nő" || szo == "fő" || szo == "sző" || szo == "ró")) {
        tip = "f";
        ok = 1
    } else if (ok == 0 && szo == "van") {
        tip = "g";
        kodol(4, "b");
        ok = 1
    }
    if (ok == 1) kodol(10, tip);
    ok = 0;
    rto();
    if (szo2 == "őriz" && (idm == "1" && (tar == "1" && (szm == 1 || szm == 2 || szm == 4) || tar == "2" && szm != 4) || idm == "2" && szm == 3)) {
        szo = "őrz";
        har = "c"
    }
    if (szo2 == "ellenőriz" && (idm == "1" && (tar == "1" && (szm == 1 || szm == 2 || szm == 4) || tar == "2" && szm != 4) || idm == "2" && szm == 3)) {
        szo = "ellenőrz";
        har = "c"
    }
}

function iktovalt() {
    if (szo == "viszonyl" || szo == "arányl") {
        kodol(9, "k");
        kodol(7, "e");
        kodol(6, "b");
        if (idm == "4" && tar == "1" && szm != "7" || idm == "1" && szm == 7 || idm == "1" && tar == "2" && szm == 4 || idm == "1" && tar == "2" && har == "a" && szm != 1 && szm != 2) cserelb()
    }
    ker = szo + "ik";
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(told1);
    if (van != null) {
        kodol(9, "j");
        kodol(7, "e");
        kodol(6, "b");
        if (van != null && szo != "sínyl") kodol(4, "b");
        if (idm == "4" || idm == "1" && szm == 7 || idm == "1" && tar == "2" && szm == 4 || idm == "1" && tar == "2" && har == "a" && szm != 1 && szm != 2) cserelb()
    }
    van = kif.exec(told2);
    if (van != null) {
        kodol(9, "n");
        kodol(7, "e");
        kodol(6, "b");
        kodol(3, "c")
    }
    van = kif.exec(told3);
    if (van != null) {
        kodol(9, "n");
        kodol(7, "e");
        kodol(6, "b")
    }
    van = kif.exec(told4);
    if (van != null) {
        kodol(9, "o");
        kodol(7, "e");
        kodol(6, "b");
        kodol(3, "c");
        if (idm == "4" || idm == "1" && tar == "2" && har == "a" && szm != 1 && szm != 2 || idm == "1" && tar == "2" && har != "a" && szm == 4) cserelb()
    }
    van = kif.exec(told5);
    if (van != null) {
        kodol(9, "o");
        kodol(7, "e");
        kodol(6, "b");
        if (idm == "4" || idm == "1" && tar == "2" && har == "a" && szm != 1 && szm != 2 || idm == "1" && tar == "2" && har != "a" && szm == 4) cserelb()
    }
    van = kif.exec(told6);
    if (van != null) {
        kodol(9, "q");
        kodol(3, "c");
        if (idm == "4" || idm == "2" && tar == "1" && szm != 3 || idm == "2" && tar == "2" || idm == "3" || idm == "1" && tar == "2" && szm != 1 && szm != 2 || idm == "1" && tar == "1" && (szm == 5 || szm == 6 || szm == 7)) cserelb()
    }
    if (szo == "ugr" && (idm == "4" || idm == "1" && tar == 2 && szm != 1 && szm != 2 && szm != 7)) cserelb();
    if (szo == "fürd" && (idm == "2" && szm != 3 || idm == "4" || idm == "1" && (tar == 2 && szm == 4 || tar == 1 && szm == 5))) {
        cserelb();
        kodol(6, "a")
    }
    if ((szo == "haldokl" || szo == "tündökl" || szo == "fuldokl") && (idm != "1" || idm == "1" && tar == "1" & szm != 1 && szm != 3 && szm != 4 || idm == "1" && har == "a" && tar == "2" && szm != 1 && szm != 2 || idm == "1" && har == "c" && tar == "2" && szm == 4)) cserelb();
    ker = szo;
    van = kif.exec(to52); {
        if (van != null) {
            kodol(9, "f");
            kodol(6, "a");
            cserelc()
        }
    }
    van = kif.exec(to33); {
        if (van != null) kodol(9, "g");
        cserelc()
    }
    van = kif.exec(to3a); {
        if (van != null) kodol(9, "h");
        cserelc()
    }
    van = kif.exec(to3b); {
        if (van != null) kodol(9, "i");
        cserelc()
    }
    van = kif.exec(to3c); {
        if (van != null) {
            kodol(9, "l");
            kodol(7, "b");
            cserelc()
        }
    }
    if ((veg2 == "ad" || veg2 == "ed") && ikod.charAt(2) == "a") kodol(7, "b");
    if (sz1 == "raga" || sz1 == "tev") kodol(7, "a");
    ker = szo;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(to07); {
        if (van != null) {
            kodol(7, "a")
        }
    }
}

function szotag() {
    bsz = 0;
    for (x = szo.length - 1; x > -1; x--) {
        betu = szo.charAt(x);
        if (betu == "a" || betu == "á" || betu == "o" || betu == "ó" || betu == "u" || betu == "ú" || betu == "e" || betu == "é" || betu == "i" || betu == "í" || betu == "ö" || betu == "ő" || betu == "ü" || betu == "ű") bsz = bsz + 1
    }
    if (veg1 == "t" && bsz == 1 && szo != "lát") kodol(7, "e")
}

function kot() {
    koto = ikod.charAt(5);
    if ((veg2 == "ll" && ikes == "ik" || veg2 == "ít" || veg2 == "űt" || veg2 == "ét" || veg2 == "nt" || veg2 == "mt" || veg2 == "nl" || veg2 == "jl" || veg2 == "jt" || veg2 == "rt" || veg2 == "lt" || veg2 == "nz" || veg2 == "gr" || veg2 == "sd" || veg2 == "nd" || veg2 == "rd" || veg2 == "dl" || veg2 == "ld" || veg2 == "st" || veg2 == "zt" || veg2 == "zz" || veg2 == "zd" || veg3 == "tsz" || veg3 == "ksz" || veg3 == "gsz" || veg3 == "psz" || veg3 == "lsz" || veg2 == "dz" && ikes != "ik" || szo == "bocsát") && szo != "áll" && szo != "száll") koto = "b";
    if (szo == "dall" || szo == "hall" || szo == "hull" || szo == "kall" || szo == "kell" || szo == "koráll" || szo == "pall" || szo == "vall") koto = "b";
    if (szo == "igyekez" || szo == "emlékez") koto = "a";
    if (szo == "kétell" && idm != 1) koto = "b";
    kodol(6, koto)
}

function akoto() {
    ut = 0;
    ut1 = 0;
    veg2 = szo.slice(szo.length - 2, szo.length);
    veg1 = szo.slice(szo.length - 1, szo.length);
    minus1 = szo.slice(0, szo.length - 1);
    veg11 = minus1.slice(minus1.length - 1, minus1.length);
    veg3 = szo.slice(szo.length - 3, szo.length);
    akot = ikod.charAt(6);
    ker = veg1;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(hlista2);
    if (van != null) ut = 1;
    ker = veg11;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(hlista1);
    if (van != null) {
        ut1 = 1
    }
    if (ut == 1 && ut1 == 1 || veg2 == "rr") {
        akot = "b"
    }
    if ((veg2 == "ll" && ikes == "ik" || veg2 == "ít" || veg2 == "űt" || veg2 == "ét" || veg2 == "át" && szo != "lát" || veg2 == "nt" || veg2 == "mt" || veg2 == "rt" || veg2 == "lt" || veg2 == "nz" || veg2 == "gr" || veg2 == "sd" || veg2 == "dl" || veg2 == "nl" || veg2 == "jt" || veg2 == "st" || veg2 == "zt" || veg2 == "zz" || veg3 == "üzd" || veg3 == "tsz" || veg3 == "ksz" || veg3 == "gsz" || veg3 == "psz" || veg3 == "lsz" || veg2 == "dz" && ikes != "ik") && szo != "mond" && szo != "áll" && szo != "száll") akot = "e";
    if (szo == "dall" || szo == "hall" || szo == "hull" || szo == "kall" || szo == "kell" || szo == "koráll" || szo == "pall" || szo == "vall" || szo == "kétell") akot = "e";
    kodol(7, akot)
}

function szoveg() {
    b = "a";
    if (veg1 == "s") b = "b";
    else if (veg1 == "z" && veg2 != "sz" && veg2 != "dz") b = "c";
    if (veg2 == "sz") b = "d";
    if (veg2 == "dz") b = "e";
    kodol(5, b)
}

function egyeb() {
    ker = szo2;
    kif = new RegExp(" " + ker + " ");
    van = kif.exec(tarb);
    if (van != null || szo3 == "befejeződik" || szo == "bővül" || szo2 == "dől" || szo2 == "egyszerűsödik" || szo2 == "erősödik" || szo2 == "fejlődik" || szo2 == "fertőződik" || szo2 == "fő" || szo2 == "gyűlik" || szo2 == "hűl" || szo2 == "ismétlődik" || szo2 == "készülődik" || szo2 == "kezdődik" || szo3 == "vetkőzik" || szo2 == "sértődik" || szo2 == "nősül" || szo2 == "működik" || szo2 == "őszül" || szo2 == "sértődik" || szo2 == "szűnik" || szo2 == "tegeződik" || szo2 == "törődik" || szo2 == "tűnik") kodol(12, "b");
    van = kif.exec(tarc);
    if (van != null || szo3 == "vetkőzik" || szo3 == "érdeklődik") kodol(12, "c");
    van = kif.exec(tarf);
    if (van != null) kodol(12, "f");
    ker = szo3;
    van = kif.exec(szemb);
    if (van != null || szo2 == "kezdődik" || szo3 == "befejeződik" || szo3 == "előfordul") {
        kodol(11, "b")
    }
    if (szo2 == "alkonyodik" || szo3 == "eláll" || szo3 == "esteledik" || szo2 == "hajnalodik" || szo2 == "havazik" || szo2 == "szabad" || szo2 == "villámol" || szo2 == "villámlik" || szo2 == "zuhog") kodol(11, "c");
    if (szo2 == "nincs" || szo2 == "sincs") {
        kodol(11, "f");
        kodol(6, "b")
    }
    if (szo2 == "szokott") {
        szo = "szok";
        kodol(11, "g")
    }
    if (szo3 == "ízlik") {
        kodol(13, "b")
    }
}
sz1 = "";
y = 0;
ok = 0;
k0 = "";
k1 = "a";
k1b = "o";
k2 = "e";
k2b = "ö";
k3 = "u";
k4 = "ü";
k5 = "á";
k6 = "é";
j0 = "";
j1 = "j";
j2 = "i";
j3 = "t";
j4 = "tt";
j5 = "n";
j6 = "s";
j7 = "z";
r0 = "";
r1 = "k";
r2 = "m";
r3 = "l";
r4 = "sz";
r5 = "d";
r6 = "";
r7 = "ik";
r8 = "n";
r9 = "nk";
r10 = "k";
r11 = "tok";
r12 = "tek";
r13 = "tök";
r14 = "nak";
r15 = "nek";
r16 = "lak";
r17 = "lek";
var tar = 1;
var szm = 1;
var idm = 1;
var rov = 0;
var plus = "";
var forma = new Array(13);
var forma1 = new Array(13);
var forma2 = new Array(13);
var hlista1 = " a á e é i í o ó ö ő u ú ü ű l n ";
var hlista2 = " l r n j y ";
var hlista3 = " a e i o ö u ü ";
var lista2 = " átalányoz átall átkoz átkozódik becéz becsmérel becsül begyesedik begyeskedik befolyásol belez beljebbez bellebbez berreg berzenkedik beszél beszélget beszéltet betegeskedik betlehemez betonoz betűz betyárkodik elegyedik elegyít elegyül elektrifikál elemez elégedetlenkedik elégel eliminál ellenez ellenkezik ellenőriz ellenőrködik ellenségeskedik ellensúlyoz ellenzékieskedik ellik elmélkedik elménckedik elméskedik elnököl előz kiabál kiált kiáltoz kibicel kicsinyel kicsinyell kicsinyeskedik kicsinyít kilincsel kintornál kirándul kisebbedik kisebbít kishitűsködik leánykodik lebben lebbent lebeg lebegtet lebzsel leckéz leckéztet lefetyel leffeg legalizál legel legelészik legeltet legénykedik legyeskedik legyez legyezget legyint lehel lehet lejt lejtősít lejtősödik lektorál lel leledzik lelkendez lelkesedik lelkesít lelkesül lelkészkedik lelkipásztorkodik leltároz lemezel lendít lendül leng lengedez lenget lep lepcseskedik lepkészik leplez leppeg les leselkedik leskel leskelődik lesz letyeg levedzik levegőzik leveledzik levelesedik levelez levesedik rácsoz rádiózik rág rágalmaz rágcsál rágicsál rágódik rákászik rámáz rámol ráncigál ráncol ráncosít ráncosodik rándít rándul ráng rángat rángatódzik ránt ráspolyoz ráz rázkódik rázódik ";
lista2b = " átalakul átalakít átalszik belebben belebeg belefetyel belegel belegyez belegyint belehel belejt belelkesedik belelkesít belelkesül belendít belendül beleng belep beles beleselkedik beleskel beleskelődik belevelesedik belez belélegzik előrepül felül felültet ";
var lista3 = " aláz alázatoskodik alázkodik előkelősködik előlegez előszobázik előttemez előz előzködik feled feledkezik felejt felejtkezik felel felelget feleltet felesel felez felhősödik felhőz felhőzik fellebbez felvételizik idealizál idegenkedik idegesít idegeskedik identifikál jótékonykodik megy túloz túlórázik ";
var lista4 = " átalányoz átall belez hazafiaskodik hazardíroz telefonál telefonoz telegrafál telekkönyvez telel teleltet telepedik telepít települ telepszik utánoz utánvételez ";
var lista5 = " általánosít ellenez ellenkezik ellenőriz ellenőrködik ellenségeskedik ellensúlyoz ellenzékieskedik helytelenít helytelenkedik körülményeskedik különbözik különcködik különködik különmunkázik különórázik mellékel összegez összesít végrendelkezik ";
var lista6 = " alagcsövez anyakönyvel anyakönyvez árverel árverez árvereztet bájcseveg bankettez bukfencez gazemberez górcsövez gyógykezel hangszerel hangversenyez haszonbérel huszonegyez írásbeliz írógépel jajveszékel kábelez káderez kármentesít kárörvend kárörvendez kóklerked koncertez konfidensked korhelyked kortesked kotnyelesked kótyavetyél krakéleresked kupecked látcsövez lóversenyez mágnesez manőverez okszerűsít okvetetlenked pókerez rokonszenvez számfejt számkivet szóbeliz utánvételez  valószínűsít vámmentesít zárójelez ";
var lista7 = " lúdbőröz lúdbőrz manikűröz nagyképűsköd nagylelkűsköd napfürdőz parfümöz számkiűz száműz vakmerősköd ";
var lista8 = " bír fing fitít gépír hív híz indít ing irt isz izz izzít ír ívik nyit nyí nyíl nyír piszkít rikít ring ritkít rí sikít sikít sikl simít sipít sivít sí sír szít szív tilt tisztít vidít virít visít vív ";
var rov1 = " gyötör kotor pödör sodor söpör tipor ";
var rov2 = " acsarog ácsorog ámolyog andalog bazsalyog bizsereg bódorog bolyog buzog bűzölög csámborog csavarog csepereg csicsereg csikorog csorog csörög didereg díszeleg dörög dübörög dürög édeleg émelyeg enyeleg érzeleg fanyalog fentereg feszeleg fintorog forog füstölög gomolyog görög gőzölög háborog hempereg hencsereg hentereg hízeleg hőbörög hömpölyög hörög hunyorog imbolyog incseleg inog kanyarog kavarog kecmereg kéjeleg képzeleg kesereg kevereg kicsorog kóborog kódorog koncsorog korog kóvályog könyörög közeleg kucorog kujtorog kuncorog kuncsorog kunkorog kuporog lődörög mennydörög mocorog morog mosolyog mosolyog motyorog mozog nyavalyog nyekereg nyikorog nyomorog nyöszörög nyüzsög oldalog őgyeleg párolog pereg pezseg pityereg pizseg pörög sanyarog sistereg somolyog sompolyog sóvárog sunyorog sustorog sündörög sürög szédeleg szemereg szendereg szenveleg szépeleg sziszereg szivárog szomorog támolyog tántorog társalog tébolyog tekereg ténfereg terem tetszeleg tévelyeg tiszteleg toporog ücsörög vánszorog vicsorog vigyorog viszolyog zajog zavarog zörög zuborog zsivajog zsugorog ";
var rov3 = " becsmérel bitorol bomol búvárol énekel érdemel eszközöl fecsérel gyalogol gyakorol haszonbérel helyesel hengerel igenel igényel ingerel irigyel ismétel javasol jósol káromol kétel kicsinyel kísérel kóborol könyököl közöl lovagol mellékel mérsékel ócsárol országol ostromol oszol öldököl örököl őröl ötöl özönöl panaszol perel pótol szándékol tékozol térdepel torol töröl üdvözöl ünnepel vándorol varázsol vendégel vesztegel vezekel vezényel vezérel ";
var rov4 = " bélyegez címez cserez elemez éljenez ellenez ellenőriz érez fegyverez hímez horgonyoz idegez irányoz jegyez jelez jellemez képez kínoz koboz kormányoz kölcsönöz leképez lélegez őriz ösztönöz rögtönöz sebez sugároz sürgönyöz szegélyez szemez szerez szoroz toboroz túloz utánoz végez vegyelemez vérez versenyez viszonoz ";
var told1 = " áramlik /*aránylik*/ bicsaklik bomlik botlik bűzlik csillámlik csömörlik csuklik csuszamlik díszlik döglik fehérlik fejlik feneklik fénylik feslik foszlik gyülemlik gyüremlik hajlik hámlik hanyatlik háramlik hasonlik hírlik homálylik ihlik iramlik ízlik kéklik kereklik kotlik ködlik magaslik morajlik omlik oszlik ömlik örvénylik ötlik özönlik parázslik párlik piroslik porlik rejlik rémlik robajlik romlik sárlik sejlik sereglik sikamlik siklik sillámlik sínylik sötétlik szaglik szólamlik szülemlik szüremlik torlik türemlik vedlik világlik villámlik /*viszonylik*/ vitézlik vonaglik vöröslik zajlik ";
var told2 = " bagzik fogamzik fogzik magzik csapzik (össze) nyálzik ";
var told3 = " rögzik fajzik rajzik vérengzik ivarzik párzik ";
var told4 = " hangzik patakzik pattogzik visszhangzik összhangzik bogárzik burjánzik habzik hólyagzik hullámzik sugárzik ";
var told5 = " viharzik porzik fellegzik érzik ";
var told6 = " dohányzik hiányzik lélegzik lúdbőrzik tajtékzik vérzik virágzik ";
var to3 = " dall hall hull kall kell koráll pall vall barnállik ellik feketéllik hajnallik hallik illik langallik mállik nyilallik pállik párállik pitymallik rozsdállik rózsállik sarkallik sárgállik szögellik szürkéllik tarkállik torkollik züllik hullik ";
to07 = " ad csipked enged fed lépked repked szabad szed szenved tagad vigad ";
to11 = " csügged gennyed görbed görnyed izzad kushad lankad porlad ragad senyved támad tesped téved ";
to33 = " cselekszik dicsekszik gyanakszik haragszik növekszik nyugszik törekszik ";
to3a = " betegszik dulakszik furakszik gazdagszik gyarapszik hidegszik kenekszik marakszik melegszik menekszik mosakszik öregszik tanakszik telepszik tolakszik tülekszik ülepszik vastagszik verekszik veszekszik vetekszik ";
to3b = " alkuszik esküszik ";
to3c = " alszik fekszik ";
to52 = " emlékszik igyekszik ";
var ik1 = " ábrándozik ácsingózik adakozik adózik ágazik áhítozik ajánlkozik ájuldozik akadozik akarózik alapvizsgázik áldozik alkudozik állomásozik álmodozik alsózik amerikázik ámuldozik áradozik ásítozik autózik avatkozik ázik barátkozik bimbózik birkózik bízik bocsátkozik bolondozik bontakozik borotválkozik borsózik borzadozik botladozik botránkozik búcsúzik bújócskázik bukfencezik burkolózik cigarettázik cirkuszozik cukrozik csalatkozik csatlakozik csigázik csikózik csírázik csodálkozik csókolózik csónakázik csörgedezik csuklózik deputációzik dermedezik dévánkozik devernyázik diétázik dobálózik dolgozik dörgölőzik düledezik ébredezik egyezik éhezik ejtőzik éledezik ellenkezik epedezik építkezik érettségizik érintkezik érkezik értekezik esedezik esküdözik esőzik étkezik faggatózik fagylaltozik falatozik fáradozik fázik fegyverkezik feledkezik felejtkezik felhőzik felvételizik fenyegetőzik férkőzik fickándozik fogadkozik foglalkozik fogócskázik fogózik fogyatkozik fogyókúrázik fonnyadozik foszladozik frakciózik fulladozik furikázik futkározik fürdőzik fűtőzik gennyezik gondolázik gondolkozik gyökerezik gyülekezik gyümölcsözik gyürkőzik gyűrűzik gyűrűzik hadakozik hagyakozik hagyatkozik hajladozik hajókázik hajózik hallgatózik harapózik harmatozik harmonikázik hasadozik havazik hazudozik hempergőzik hentergőzik himbálózik hintázik hivatkozik hízik hólabdázik húzódozik hüledezik hűtőzik ígérkezik ijedezik illatozik imádkozik ingadozik iratkozik irtózik ítélkezik játszadozik jelentkezik jógázik juházik kalandozik kallózik kamatozik kapálózik káprázik kávézik keletkezik kerékpározik kergetőzik keringőzik kerülközik kettőzik kézilabdázik kígyózik kínálkozik kísérletezik kívánkozik kocsizik kornyadozik kosárlabdázik költekezik költözik kölykezik következik kukoricázik különbözik különórázik lábadozik labdázik lakmározik lakomázik lakozik lázadozik létezik levegőzik levelezik lóbálózik lopózik lottózik lúdbőrözik mentegetőzik mentekezik méretkezik mérkőzik mutatkozik nőzik nyálazik nyiladozik nyilatkozik nyiratkozik nyújtózik oázik óhajtozik osztozik ölelkezik öltözik pályázik párázik példálózik permetezik pillangózik próbálkozik puhatolózik rádiózik rángatózik reggelizik rejtőzik rémüldözik rendelkezik révedezik ringatózik rogyadozik romladozik roskadozik röplabdázik rugdalózik rugódozik rugózik sajnálkozik sakkozik segédkezik siránkozik sóhajtozik sokadozik sorakozik sorjázik sugdolózik sütkérezik szabadkozik szállingózik szánakozik szándékozik szárítkozik származik szégyenkezik szellőzik szépítkezik szeretkezik szigorlatozik szikrázik szomjazik szomjúhozik szórakozik szorítkozik szövetkezik szunnyadozik takarózik találkozik talicskázik tanácskozik táplálkozik tapogatózik tárogatózik tarokkozik tartozik távozik teázik tekergőzik tekerőzik temetkezik teniszezik tetőzik tiltakozik titkolózik tízóraizik tojózik tornázik töredezik törülközik törvénykezik tréfálkozik tudakolózik tudakozik túlórázik túrázik tükrözik tünedezik unatkozik utálkozik utazik uzsonnázik ütközik vacsorázik vagdalkozik vagdalózik vágyakozik vakarózik vállalkozik váltakozik változik várakozik vasutazik védekezik végrendelkezik vemhezik verejtékezik vetkezik vétkezik vetkőzik vickándozik visszakozik vitatkozik vitázik vitorlázik vízilabdázik vizsgázik vonatkozik zárkózik zongorázik ";
var ik2 = " bagzik bogárzik burjánzik dohányzik érzik fogamzik fogzik habzik hangzik hiányzik hólyagzik hullámzik lélegzik magzik nyálzik összhangzik patakzik pattogzik sugárzik tajtékzik vérzik virágzik ";
var tarb = " adózik aggódik alakul alkalmazkodik alkonyodik aránylik ájul árt ásít ázik barátkozik betegszik bízik bomlik borul bókol bővül búcsúzik bújik csodálkozik csökken csuklik csúszik doktorál döglik dől drágul egyesül egyezik egyszerűsödik ellenkezik emelkedik emigrál emlékszik engedelmeskedik enyhül erősödik esik esküszik esteledik ébred ég élesedik élénkül épül érettségizik érik érintkezik érkezik érvel érvényesül fagy fáj fárad fázik fejeződik fejlődik fertőződik fér foglalkozik fogy folyik folytatódik fordul forr fő fullad függ gondolkodik gondolkozik gondoskodik gurul gyengül gyorsul gyógyul gyullad gyűlik habozik hajnalodik hal hallatszik haragszik havazik házasodik helyezkedik hull hullik hűl ijed illeszkedik illik indul ismétlődik izzik ízlik javul jelentkezik jön jut kacsint kanyarodik kapaszkodik kapcsolódik kel keletkezik kell kering kezdődik készül készülődik koccan kopik költözik költözködik következik közeledik közlekedik különbözik lábadozik látszik lehet lejt lesz létezik lyukad marad megy mosdik mozdul múlik mutatkozik működik nősül nyílik nyugszik nyújtózkodik nyúl oldódik olvad öltözik öltözködik ömlik örül örvend őszül párolog pirul pusztul ragyog rémül rendelkezik romlik sápad sértődik sikerül sötétedik süllyed szabad szakad szárad származik szegényedik szédül születik szűnik találkozik tartozik tartózkodik táplálkozik távolodik tegeződik telik terjed tetszik tér téved tisztul törik törődik történik törülközik tűnik ütközik van vágyik válik változik vész villámlik virágzik viselkedik vizsgázik viszonylik volt zuhan sérül igyekszik gyanakszik melegszik növekszik öregszik veszik magázódik ";
var tarc = " alkudozik alszik barkácsol befejez borotválkozik bukik cseng csöng csókolózik dadog dedikál dicsekszik diétázik didereg dohányzik dorombol dörög drukkol dudál dúdol dülöngél ebédel éhezik él élesít enyhít építkezik érdeklődik fekszik féltékenykedik felvételizik fésülködik felel fogyókúrázik fürdik gépel gyalogol gyönyörködik haldoklik haldokol hegedül hiányzik hiányoz idegeskedik illet intézkedik ismerkedik jár karambolozik kávézik kereskedik kertészkedik kirándul koccint lakik legel levelez lóg lottózik makacskodik menstruál mosakszik mosakodik mozog mulat napozik nyaral nyávog nyugtalankodik ordít öttusázik panaszkodik pingpongozik ragoz reggelizik reszket sír sóhajt szerepel szórakozik sztrájkol takarékoskodik tapétáz tartalmaz telefonál terem terít tízóraizik tornázik türelmetlenkedik unatkozik utazik úszik utal uzsonnázik üdül ül vacsorázik válaszol védekezik verekszik versenyez veszekszik vetkőzik virágzik vitatkozik vív zenél zongorázik zúg zuhan zuhanyozik zuhog ";
var tarf = " bejön bemegy eljön elmegy feljön felmegy hazamegy jön kijön lejön lemegy lesz megvan megy nincs odamegy továbbmegy végigmegy visszajön visszamegy ";
var szemb = " csökken cseng csöng elmúlik előfordul eltörik fáj illet ízlik kiderül nyílik sikerül történik zúg ";
var szemf = " nincs sincs ";
var szemg = " szokott ";
var felb = " ízlik "
