;(function () {
  'use strict'

  var isMobile = {
    Android () {
      return navigator.userAgent.match(/Android/i)
    },
    BlackBerry () {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera () {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows () {
      return navigator.userAgent.match(/IEMobile/i)
    },
    any () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }
  }

  const mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
	    const container = $('#fh5co-offcanvas, .js-fh5co-nav-toggle')
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ($('body').hasClass('offcanvas')) {
    			$('body').removeClass('offcanvas')
    			$('.js-fh5co-nav-toggle').removeClass('active')
	    	}
	    }
    })
  }

  const offcanvasMenu = function () {
    $('#page').prepend('<div id="fh5co-offcanvas" />')
    $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>')
    const clone1 = $('.menu-1 > ul').clone()
    $('#fh5co-offcanvas').append(clone1)
    const clone2 = $('.menu-2 > ul').clone()
    $('#fh5co-offcanvas').append(clone2)

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown')
    $('#fh5co-offcanvas')
      .find('li')
      .removeClass('has-dropdown')

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown').mouseenter(function () {
      const $this = $(this)

      $this
        .addClass('active')
        .find('ul')
        .slideDown(500, 'easeOutExpo')
    }).mouseleave(function () {
      const $this = $(this)
      $this
        .removeClass('active')
        .find('ul')
        .slideUp(500, 'easeOutExpo')
    })

    $(window).resize(function () {
      if ($('body').hasClass('offcanvas')) {
    			$('body').removeClass('offcanvas')
    			$('.js-fh5co-nav-toggle').removeClass('active')
	    	}
    })
  }

  const burgerMenu = function () {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      const $this = $(this)

      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas')
      } else {
        $('body').addClass('overflow offcanvas')
      }
      $this.toggleClass('active')
      event.preventDefault()
    })
  }

  const fullHeight = function () {
    if (!isMobile.any()) {
      $('.js-fullheight').css('height', $(window).height())
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height())
      })
    }
  }

  const contentWayPoint = function () {
    let i = 0
    $('.animate-box').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
        i++

        $(this.element).addClass('item-animate')
        setTimeout(function () {
          $('body .animate-box.item-animate').each(function (k) {
            const el = $(this)
            setTimeout(function () {
              const effect = el.data('animate-effect')
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated-fast')
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated-fast')
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated-fast')
              } else {
                el.addClass('fadeInUp animated-fast')
              }

              el.removeClass('item-animate')
            }, k * 200, 'easeInOutExpo')
          })
        }, 100)
      }
    }, { offset: '85%' })
  }

  const dropdown = function () {
    $('.has-dropdown').mouseenter(function () {
      const $this = $(this)
      $this
        .find('.dropdown')
        .css('display', 'block')
        .addClass('animated-fast fadeInUpMenu')
    }).mouseleave(function () {
      const $this = $(this)

      $this
        .find('.dropdown')
        .css('display', 'none')
        .removeClass('animated-fast fadeInUpMenu')
    })
  }

  const goToTop = function () {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault()

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo')

      return false
    })

    $(window).scroll(function () {
      const $win = $(window)
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active')
      } else {
        $('.js-top').removeClass('active')
      }

      if ($win.scrollTop() > 100) {
        $('.fh5co-nav').addClass('scrolled')
      } else {
        $('.fh5co-nav').removeClass('scrolled')
      }
    })
  }

  // Loading page
  const loaderPage = function () {
    $('.fh5co-loader').fadeOut('slow')
  }

  const counterWayPoint = function () {
    if ($('#fh5co-counter').length > 0) {
      $('#fh5co-counter').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 400)
          $(this.element).addClass('animated')
        }
      }, { offset: '90%' })
    }
  }

  const sliderMain = function () {
	  	$('#fh5co-slider-wrwap .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 5000,
      directionNav: true,
      start () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp')
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp')
        }, 500)
      },
      before () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp')
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp')
        }, 500)
      }

	  	})

	  	$('#fh5co-slider-wrwap .flexslider .slides > li').css('height', $(window).height())
	  	$(window).resize(function () {
	  		$('#fh5co-slider-wrwap .flexslider .slides > li').css('height', $(window).height())
	  	})
  }

  const parallax = function () {
    if (!isMobile.any()) {
      // $(window).stellar()
    }
  }

  const DateTimePickerFunc = function () {
    if ($('#taskdatetime').length > 0) {
      $('#taskdatetime').datetimepicker()
    }
  }

  const zoomFunc = function () {
    if ($('.zoomerang').length > 0) {
	   	// Zoomerang.config({maxHeight:730,maxWidth:900}).listen('.zoomerang');

	   	$('.fh5co-bg-img').each(function () {
	   		$(this).css('width', '100%')
	   	})
	   	Zoomerang
        .config({
          maxHeight: 900,
          maxWidth: 800,
          bgColor: '#000',
          bgOpacity: 0.85,
          onOpen: openCallback,
          onClose: closeCallback,
          onBeforeOpen: beforeOpenCallback,
          onBeforeClose: beforeCloseCallback
        })
        .listen('.zoomerang')

      function openCallback (el) {
        console.log('zoomed in on: ')
        // console.log(el)
      }

      function closeCallback (el) {
        console.log('zoomed out on: ')
        // console.log(el)
      }

      function beforeOpenCallback (el) {
            	console.log('on before zoomed in on:')
            	// console.log(el)
      }

      function beforeCloseCallback (el) {
            	console.log('on before zoomed out on:')
            	// console.log(el)
      }
	   }
  }

  window.dataLayer = window.dataLayer || []
  function gtag () { dataLayer.push(arguments) }
  gtag('js', new Date())

  gtag('config', 'UA-178298675-1')

  const startUp = function () {
    mobileMenuOutsideClick()
    offcanvasMenu()
    burgerMenu()
    contentWayPoint()
    sliderMain()
    dropdown()
    goToTop()
    loaderPage()
    counterWayPoint()
    fullHeight()
    parallax()
    DateTimePickerFunc()

    $('.fh5co-bg-img').each(function () {
      $(this).css('width', '100%')
    })
  }

  window.pageStart = startUp
}())
