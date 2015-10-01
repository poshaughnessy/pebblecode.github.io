(function () {

  window.sr = new scrollReveal();

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // Navigation appear on scroll up
  var scrollCurrent = 0;
  $(window).scroll(function() {
    var scrollDiff = $(this).scrollTop();
    if(scrollDiff > scrollCurrent && scrollDiff > 100) {
       $('header').addClass('hide').removeClass('show');
    } else {
       $('header').addClass('show').removeClass('hide');
    }
    scrollCurrent = scrollDiff;
  });

  // Mobile nav
  var gblHeadBtn = $('.gbl-head-btn');
  var gblHeadNav = $('.gbl-head-nav');
  gblHeadBtn.click( function() {
    $(this).toggleClass('active');
    gblHeadNav.toggleClass('active');
  });

  // Tabs
  var tabHeadItem = $('.tab-head-item');
  var tabContent = $('.tab-content');
  tabHeadItem.click( function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var tabID = $(this).data('tab-id');
    $('#' + tabID).siblings('.tab-content').removeClass('active');
    $('#' + tabID).addClass('active');
  });

  // Change services bg colour on scroll
  var servicesContainer = $('.services-container');

  if ($(servicesContainer).length > 0) {
    var servicesStrategy;
    var servicesHacking;
    var servicesUX;
    var servicesUXdesign;
    var servicesDesign;
    var servicesAgile;
    var servicesTests;
    var servicesCollab;

    var scrollPositions = debounce(function () {
      servicesStrategy = $('#services-strategy').offset().top - 200;
      servicesHacking = $('#services-hacking').offset().top - 200;
      servicesUX = $('#services-UX').offset().top - 200;
      servicesUXdesign = $('#services-UX-design').offset().top - 200;
      servicesDesign = $('#services-design').offset().top - 200;
      servicesAgile = $('#services-agile').offset().top - 200;
      servicesTests = $('#services-tests').offset().top - 200;
      servicesCollab = $('#services-collab').offset().top - 200;
    }, 100);

    var servicesBG = debounce(function () {
      var windowTop = $(window).scrollTop();

      if (windowTop > servicesCollab) {
        servicesContainer.css({'background-color':'#ed4f7e' });
      } else if (windowTop > servicesTests) {
        servicesContainer.css({'background-color':'#9b5ca4' });
      } else if (windowTop > servicesAgile) {
        servicesContainer.css({'background-color':'#faad40' });
      } else if (windowTop > servicesDesign) {
        servicesContainer.css({'background-color':'#a4ce4e' });
      } else if (windowTop > servicesUXdesign) {
        servicesContainer.css({'background-color':'#37bec0' });
      } else if (windowTop > servicesUX) {
        servicesContainer.css({'background-color':'#0ea2dc' });
      } else if (windowTop > servicesHacking) {
        servicesContainer.css({'background-color':'#ed4f7e' });
      } else {
        servicesContainer.css({'background-color':'#9b5ca4' });
      }
    }, 100);

    $(window).resize(scrollPositions).scroll(servicesBG);
    scrollPositions();
    servicesBG();
  }

  // Change nav bg colour on scroll
  var aboutHeaderContainer = $('.about .gbl-head');
  var servicesHeaderContainer = $('.services .gbl-head');
  var workHeaderContainer = $('.work .gbl-head');
  var careersHeaderContainer = $('.careers .gbl-head');
  var blogHeaderContainer = $('.blog .gbl-head');

  if ($(aboutHeaderContainer).length > 0) {
    var aboutDirectors;

    var scrollPositions = debounce(function () {
      aboutDirectors = $('#about-directors').offset().top - 200;
    }, 100);

    var headerBG = debounce(function () {
      var windowTop = $(window).scrollTop();

     if (windowTop > aboutDirectors) {
        aboutHeaderContainer.css({'background-color':'#0ea2dc' });
      } else {
        aboutHeaderContainer.css({'background-color':'' });
      }
     }, 100);

    $(window).resize(scrollPositions).scroll(headerBG);
    scrollPositions();
    headerBG();
  }

  if ($(servicesHeaderContainer).length > 0) {
    var servicesStrategy;
    var servicesHacking;
    var servicesUX;
    var servicesUXdesign;
    var servicesDesign;
    var servicesAgile;
    var servicesTests;
    var servicesCollab;

    var scrollPositions = debounce(function () {
      servicesStrategy = $('#services-strategy').offset().top - 200;
      servicesHacking = $('#services-hacking').offset().top - 200;
      servicesUX = $('#services-UX').offset().top - 200;
      servicesUXdesign = $('#services-UX-design').offset().top - 200;
      servicesDesign = $('#services-design').offset().top - 200;
      servicesAgile = $('#services-agile').offset().top - 200;
      servicesTests = $('#services-tests').offset().top - 200;
      servicesCollab = $('#services-collab').offset().top - 200;
    }, 100);

    var headerBG = debounce(function () {
      var windowTop = $(window).scrollTop();

      if (windowTop > servicesCollab) {
        servicesHeaderContainer.css({'background-color':'#ed4f7e' });
      } else if (windowTop > servicesTests) {
        servicesHeaderContainer.css({'background-color':'#9b5ca4' });
      } else if (windowTop > servicesAgile) {
        servicesHeaderContainer.css({'background-color':'#faad40' });
      } else if (windowTop > servicesDesign) {
        servicesHeaderContainer.css({'background-color':'#a4ce4e' });
      } else if (windowTop > servicesUXdesign) {
        servicesHeaderContainer.css({'background-color':'#37bec0' });
      } else if (windowTop > servicesUX) {
        servicesHeaderContainer.css({'background-color':'#0ea2dc' });
      } else if (windowTop > servicesHacking) {
        servicesHeaderContainer.css({'background-color':'#ed4f7e' });
      } else if (windowTop > servicesStrategy) {
        servicesHeaderContainer.css({'background-color':'#9b5ca4' });
      } else {
        servicesHeaderContainer.css({'background-color':'' });
      }
    }, 100);

    $(window).resize(scrollPositions).scroll(headerBG);
    scrollPositions();
    headerBG();

  }

  if ($(workHeaderContainer).length > 0) {
    var workPharmaceutical;
    var workIntranets;
    var workSelfDirected;
    var workNextGen;
    var workEnterpriseMobile;
    var workRailTravel;
    var workHighFrequency;

    var scrollPositions = debounce(function () {
      workPharmaceutical = $('#work-pharmaceutical').offset().top - 200;
      workIntranets = $('#work-intranets').offset().top - 200;
      workSelfDirected = $('#work-self-directed').offset().top - 200;
      workNextGen = $('#work-next-gen').offset().top - 200;
      workEnterpriseMobile = $('#work-enterprise-mobile').offset().top - 200;
      workRailTravel = $('#work-rail-travel').offset().top - 200;
      workHighFrequency = $('#work-high-frequency').offset().top - 200;
    }, 100);

    var headerBG = debounce(function () {
      var windowTop = $(window).scrollTop();

     if (windowTop > workHighFrequency) {
        workHeaderContainer.css({'background-color':'#ed4f7e' });
      } else if (windowTop > workRailTravel) {
        workHeaderContainer.css({'background-color':'#faad40' });
      } else if (windowTop > workEnterpriseMobile) {
        workHeaderContainer.css({'background-color':'#a4ce4e' });
      } else if (windowTop > workNextGen) {
        workHeaderContainer.css({'background-color':'#0ea2dc' });
      } else if (windowTop > workSelfDirected) {
        workHeaderContainer.css({'background-color':'#37bec0' });
      } else if (windowTop > workIntranets) {
        workHeaderContainer.css({'background-color':'#ed4f7e' });
      } else if (windowTop > workPharmaceutical) {
        workHeaderContainer.css({'background-color':'#9b5ca4' });
      } else {
        workHeaderContainer.css({'background-color':'' });
      }
     }, 100);

    $(window).resize(scrollPositions).scroll(headerBG);
    scrollPositions();
    headerBG();
  }

  if ($(careersHeaderContainer).length > 0) {
    var careersBenefits;
    var careersKaizen;

    var scrollPositions = debounce(function () {
      careersBenefits = $('#careers-benefits').offset().top - 200;
      careersKaizen = $('#careers-kaizen').offset().top - 200;
    }, 100);

    var headerBG = debounce(function () {
      var windowTop = $(window).scrollTop();

     if (windowTop > careersBenefits) {
        careersHeaderContainer.css({'background-color':'#0ea2dc' });
      } else if (windowTop > careersKaizen) {
        careersHeaderContainer.css({'background-color':'#37bec0' });
      } else {
        careersHeaderContainer.css({'background-color':'' });
      }
     }, 100);

    $(window).resize(scrollPositions).scroll(headerBG);
    scrollPositions();
    headerBG();
  }

  // Smooth Scrolling for Internal Links
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Google Maps: Pan between different Locations
  var marker;
  var map;

  $('#londonBtn').click( function() {
    var latLng = new google.maps.LatLng(51.485672, -0.118554);
    marker.setPosition(latLng);
    map.panTo(latLng);
  });
  $('#sofiaBtn').click(function(){
    var latLng = new google.maps.LatLng(42.6742392, 23.3543577);
    marker.setPosition(latLng);
    map.panTo(latLng);
  });

  // Initialise google map
  function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(51.485672, -0.118554),
      zoom: 15,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      overviewMapControl: false,
      rotateControl: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapProp);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(51.485672, -0.118554),
      animation: google.maps.Animation.DROP
    });
      marker.setMap(map);
      map.panTo(marker.position);
      google.maps.event.addListener(marker, "click", function () {
    });
  }
  // Initialise map if visible
  if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }


  // Stop HTML 5 video laoding on mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById('gif1').style.visibility = 'visible';
    document.getElementById('gif1').style.backgroundImage = 'url(/img/projects/pharma-int.gif)';

    document.getElementById('gif2').style.visibility = 'visible';
    document.getElementById('gif2').style.backgroundImage = 'url(/img/projects/learning.gif)';

    document.getElementById('gif3').style.visibility = 'visible';
    document.getElementById('gif3').style.backgroundImage = 'url(/img/projects/mobile-dir.gif)';
  }

  else {
    //Add HTML 5 video on desktop
    function addSourceToVideo(element, src, type) {
        var source = document.createElement('source');

        source.src = src;
        source.type = type;

        element.appendChild(source);
    }


    var video1 = document.createElement('video');
    document.getElementById("video1").appendChild(video1);
    addSourceToVideo(video1, '/img/projects/pharma-int.mp4', 'video/mp4');
    addSourceToVideo(video1, '/img/projects/pharma-int.webm', 'video/webm');
    addSourceToVideo(video1, '/img/projects/pharma-int.ogv', 'video/ogg');
    // addSourceToVideo(img, '/img/projects/pharma-int.jpg');
    video1.play();
    video1.muted = true;
    video1.loop = true;

    var video2 = document.createElement('video');
    document.getElementById("video2").appendChild(video2);
    addSourceToVideo(video2, '/img/projects/learning.mp4', 'video/mp4');
    addSourceToVideo(video2, '/img/projects/learning.webm', 'video/webm');
    addSourceToVideo(video2, '/img/projects/learning.ogv', 'video/ogg');
    // addSourceToVideo(img, '/img/projects/learning.jpg');
    video2.play();
    video2.muted = true;
    video2.loop = true;

    var video3 = document.createElement('video');
    document.getElementById("video3").appendChild(video3);
    addSourceToVideo(video3, '/img/projects/mobile-dir.mp4', 'video/mp4');
    addSourceToVideo(video3, '/img/projects/mobile-dir.webm', 'video/webm');
    addSourceToVideo(video3, '/img/projects/mobile-dir.ogv', 'video/ogg');
    // addSourceToVideo(img, '/img/projects/mobile-dir.jpg');
    video3.play();
    video3.muted = true;
    video3.loop = true;
  }

}()); // end 'use strict'