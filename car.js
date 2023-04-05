let car_data = [{
        id: "honda",
        model: "accord",
        link: "Accord.html"
    },
    {
        id: "honda",
        model: "civic",
        link: "Civic.html"
    },
    {
        id: "honda",
        model: "city",
        link: "City.html"
    },
    {
        id: "toyota",
        model: "altis",
        link: "Altis.html"
    },
    {
        id: "toyota",
        model: "camry",
        link: "Camry.html"
    },
    {
        id: "toyota",
        model: "vios",
        link: "Vios.html"
    },
    {
        id: "mazda",
        model: "mazda2",
        link: "Mazda2.html"
    },
    {
        id: "mazda",
        model: "mazda3",
        link: "Mazda3.html"
    },
    {
        id: "mazda",
        model: "cx30",
        link: "CX-30.html"
    },
    {
        id: "mg",
        model: "mg3",
        link: "MG3.html"
    },
    {
        id: "mg",
        model: "mg5",
        link: "MG5.html"
    },
    {
        id: "mg",
        model: "zs",
        link: "ZS.html"
    },
    {
        id: "nissan",
        model: "almera",
        link: "Almera.html"
    },
    {
        id: "nissan",
        model: "gtr",
        link: "GT-R.html"
    },
    {
        id: "nissan",
        model: "march",
        link: "March.html"
    },
];


function keyEnter(even) {
    if (even.keyCode == 13) {
        findcar()
    }
}


function findcar() {
    let search = document.getElementById('text')
    let result = search.value.toLowerCase()
    for (let i = 0; i < car_data.length; i++) {
        if (result == "") {
            alert("กรุณากรอกรุ่นรถของท่านที่ต้องการ")
            break
        } else {
            if (result == car_data[i].model || result == car_data[i].id + car_data[i].model || result == car_data[i].id + " " +
                car_data[i].model) {
                location.href = car_data[i].link
                break
            } else {
                location.href = "none.html"
            }

        }

    }

}


function total() {
    let honda = 0
    let toyota = 0
    let mazda = 0
    let mg = 0
    let nissan = 0
    for (let i = 0; i < car_data.length; i++) {
        if (car_data[i].id == "honda") {
            honda++
        }
        if (car_data[i].id == "toyota") {
            toyota++
        }
        if (car_data[i].id == "mazda") {
            mazda++
        }
        if (car_data[i].id == "mg") {
            mg++
        }
        if (car_data[i].id == "nissan") {
            nissan++
        }
    }

    alert("จำนวนรถทั้งหมดใน stock " + car_data.length + " คัน\n" + "แบ่งเป็น : \n" +
        "- Honda  " + honda + " คัน\n" + "- Toyota  " + toyota + " คัน\n" + "- Mazda  " + mazda + " คัน\n" +
        "- MG  " + mg + " คัน\n" + "- Nissan  " + nissan + " คัน\n")

}


function cleartext() {
    clear = document.getElementById('text').value = ""
}


function calprice() {
    let price = document.getElementById('price').value
    let round = document.getElementById('round').value
    let down = document.getElementById('down').value
    let interest = document.getElementById('interest').value

    if (price == "" || round == "" || down == "" || interest == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    } else if (price.match(/^([\D])+$/i) || round.match(/^([\D])+$/i) || down.match(/^([\D])+$/i) || interest.match(/^([\D])+$/i)) {
        alert("กรอกได้แค่ตัวเลขเท่านั้น")
    } else {
        let totaldown = (down / 100) * price
        let total = (price - totaldown) / round
        let total0 = total * (interest / 100)
        let total1 = total0 + total

        alert("ราคารถ : " + price + " บาท\n" + "ดาวน์ : " + down + " %\n" + "ผ่อน : " + round + " งวด\n" +
            "ดอกเบี้ย : " + interest + " %\n" + "การผ่อนสุทธิรวมทั้งหมด : " + total1.toFixed(0) + " บาท/งวด")

    }

}