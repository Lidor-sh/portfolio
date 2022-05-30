function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about',
        triggerHook: 0
    })
    .setPin('.about-title', {pushFollowers:false})
    .addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about',
        triggerHook: 0
    })
    .setPin('.about-pic', {pushFollowers:false})
    .addIndicators()
    .addTo(controller);
}

splitScroll();