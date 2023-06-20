(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    var isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  
    function setRemUnit() {
        var W = docEl.clientWidth
        docEl.dataset.dpr = dpr
        if (isMobile) {
            if (W <= 1080) {
                // set 1.6rem = 30px in mobile that lt 1080
                var rem = docEl.clientWidth / 108 * 1.875
                docEl.style.fontSize = rem + 'px'
            } else {
                var rem = docEl.clientWidth / 108
                docEl.style.fontSize = rem + 'px'
            }
        } else {
            // set 1rem = 10px in web
            docEl.style.fontSize = 10 + 'px'
        }
    }
  
    setRemUnit()
  
    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })
  
    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
  }(window, document))