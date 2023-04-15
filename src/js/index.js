const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$.getJSON('https://quantoo.pl/jobs/api/swiper/list.json', function (data) {
    const swiperWrapper = $('.swiper-wrapper');
    let img = '';
    let lead = '';
    $.each(data.items, function (index, item) {
        console.log(item.img)
        const slide = $('<div>').addClass('swiper-slide');
        if(item.img) {
            img = item.img
        } else {
            img = '../src/images/test.png'
        }


        if(item.lead) {
            lead = item.lead
        } else {
            lead = 'Lorem ipsum'
        }

        slide.html(`
            <div class="slider--content">
                <img class="img-fluid img-cover w-100 h-300" src="${img}" alt="${item.name}">
                <h2 class="slider--title">${item.id}. ${item.name}</h2>
                <p class="slider--text">${lead}</p>
                <a class="btn btn-primary" target="_blank" href="${img}">Czytaj</a>
            </div>
        `);
        swiperWrapper.append(slide);
    });
});
