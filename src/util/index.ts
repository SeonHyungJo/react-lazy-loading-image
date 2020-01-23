export const lazyImageObj = (() => {
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage['src'] = lazyImage['dataset'].src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      })
    }, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.2
    })
    return lazyImageObserver
  } else {
    let active = false;
    let lazyImages: Array<Element> = []

    const lazyLoad = function () {
      if (active === false) {
        active = true;

        setTimeout(function () {
          lazyImages.forEach((lazyImage: HTMLImageElement) => {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              console.log(lazyImage)
              lazyImage.src = lazyImage.dataset.src || '';
              lazyImage.srcset = lazyImage.dataset.srcset || '';
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);

    return {
      observe: (setElement: Element) => {
        lazyImages.push(setElement)
      }
    }
  }
}) ()
