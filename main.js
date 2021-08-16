var sepet=localStorage.getItem('sepet')? JSON.parse(localStorage.getItem('sepet')) : []

const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true
    },

});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



/* fetch() ile veri çekiyoruz*/
var swiperUrunContainer=document.querySelector(".urunSwiper .swiper-wrapper")
var data=fetch("urunler.json")
.then(response=>response.json())
.then(veri=>{
    veri.urunler.forEach(urun => {
        var swiperSlide=document.createElement("div")
        swiperSlide.classList.add("swiper-slide")
        swiperSlide.innerHTML=`
                                <div class="card">
                                <div class="baslik">
                                    <p style="text-align: center"><strong>
                                            ${urun.name}
                                        </strong></p>
                                </div>
                                <img src="${urun.img}" alt="" class="w-100">
                                <hr>
                                <div class="bilgi">
                                    <p>Fiyat: ${urun.fiyat}</p>
                                    <p>Ürün kodu: ${urun.urunKodu}</p>
                                </div>
        
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-secondary mr-2 sepeteEkle" style="flex-grow: 2" data-urun-id="${urun.id}"">
                                        Sepete Ekle
                                    </button>
                                    <button class="tooltip-top btn btn-secondary float-right d-inline">
                                        <span class="tooltiptext">
                                            <p>
                                                Bağcık; cırt cırtlı bant <br>
                                                Deri ve file saya <br>
                                                Kauçuk dış taban <br>
                                                Ürün rengi: Cloud White / Legend Ink / Red <br>
                                                Ürün kodu: GZ9112
                                            </p>
                                        </span>
                                        <i class="fas fa-info-circle"></i></button>
                                </div>
        
                            </div>
        
        `
swiperUrunContainer.appendChild(swiperSlide)
var sepeteEkleButon=swiperSlide.querySelector(".sepeteEkle")
sepeteEkleButon.addEventListener("click", sepeteEkle)

    });
    var urunSwiper = new Swiper(".urunSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        simulateTouch:true,
        centeredSlidesBounds:true,
        freeMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true
        },
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
    
        },
    });



})

function sepeteEkle(e){
    var urunID=e.target.dataset.urunId;
    sepet.push(urunID)
    localStorage.setItem('sepet',JSON.stringify(sepet))
}

var btnSepet=document.querySelector(".sepetGoster")
btnSepet.addEventListener("click", function(e){
    e.preventDefault()
    var sepetDiv=document.querySelector(".sepetItems")
    sepetDiv.classList.toggle('gizle')
})


