<template>
  <div id="page">
    <nav class="fh5co-nav" role="navigation">
      <!-- <div class="top-menu"> -->
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-center logo-wrap">
            <div id="fh5co-logo">
              <NuxtLink to="/">
                Kitchen 218
              </NuxtLink>
            </div>
          </div>
          <div class="col-xs-12 text-center menu-1 menu-wrap">
            <ul>
              <li
                :class="$nuxt.$route.name === 'index' ? 'active' : ''"
              >
                <NuxtLink to="/">
                  Home
                </NuxtLink>
              </li>
              <li :class="$nuxt.$route.name === 'menu' ? 'active' : ''">
                <NuxtLink to="/menu">
                  Menu
                </NuxtLink>
              </li>
              <li :class="$nuxt.$route.name === 'dream' ? 'active' : ''">
                <NuxtLink to="/dream">
                  The Dream
                </NuxtLink>
              </li>
              <!--              <li class="has-dropdown">-->
              <!--                <a href="gallery.html">Gallery</a>-->
              <!--                <ul class="dropdown">-->
              <!--                  <li><a href="#">Events</a></li>ww-->
              <!--                  <li><a href="#">Food</a></li>-->
              <!--                  <li><a href="#">Coffees</a></li>-->
              <!--                </ul>-->
              <!--              </li>-->

              <!--              <li><a href="about.html">About</a></li>-->
              <!--              <li><a href="contact.html">Contact</a></li>-->
            </ul>
          </div>
        </div>
        <div v-if="settings.showOrderNowButton" class="row text-center" style="padding-top: 25px;">
          <a class="btn btn-primary btn-outline" href="https://www.toasttab.com/kitchen-128-218-n-1st-st/v3">
            Order now
          </a>
        </div>
      </div>
      <!-- </div> -->
    </nav>

    <Nuxt />

    <footer id="fh5co-footer" role="contentinfo" class="fh5co-section">
      <div class="container">
        <div class="row row-pb-md">
          <div class="col-md-6 fh5co-widget">
            s
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13040.9186747329!2d-87.0303985!3d35.2007478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b333e8356d3428!2sKitchen%20218!5e0!3m2!1sen!2sus!4v1627103641369!5m2!1sen!2sus"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
          </div>
          <div class="col-md-2 col-md-push-1 fh5co-widget">
            <h4>Links</h4>
            <ul class="fh5co-footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>

          <div class="col-md-4 col-md-push-1 fh5co-widget">
            <h4>Contact Information</h4>
            <ul class="fh5co-footer-links">
              <li>218 N 1st St, <br>Pulaski, TN 38478</li>
              <!--              <li><a href="tel://1234567920">+ 1235 2355 98</a></li>-->
              <!--              <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>-->
              <!--              <li><a href="http://https://freehtml5.co">freehtml5.co</a></li>-->
            </ul>
          </div>
        </div>

        <div class="row copyright">
          <div class="col-md-12 text-center">
            <p>
              <small class="block">&copy; 2021 Kitchen 218</small>
              <small class="block">Designed by <a href="https://www.linkedin.com/in/bailey-townsend-25b195105/" target="_blank">Bailey Townsend</a></small>
            </p>
            <p>
              <ul class="fh5co-social-icons">
                <li><a href="https://www.facebook.com/TheKitchen218/"><i class="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/thekitchen218/"><i class="icon-instagram2" /></a></li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import layoutText from '@/control/text/layout.json'
import settings from '@/control/settings.json'

export default {
  name: 'Default',
  data () {
    return { layoutText, settings }
  },
  mounted () {
    window.pageStart()
  }

}
</script>

<style scoped>

</style>
