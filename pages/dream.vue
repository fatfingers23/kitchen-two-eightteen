<template>
  <div>
    <About class="first-element" :show-header="false" />
    <div id="fh5co-timeline">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0">
            <ul class="timeline animate-box">
              <li class="timeline-heading text-center animate-box">
                <div><h3>Our Experience</h3></div>
              </li>
              <li class="animate-box timeline-unverted">
                <div class="timeline-badge">
                  2019
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      The Founders Meet
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted animate-box">
                <div class="timeline-badge">
                  2020
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      Create A Restaurant
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </li>
              <li class="animate-box timeline-unverted">
                <div class="timeline-badge">
                  <i class="icon-genius" />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      Added 200+ Employees
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </li>

              <br>
              <li class="timeline-heading text-center animate-box">
                <div><h3>More Restaurants Outlet</h3></div>
              </li>
              <li class="timeline-inverted animate-box">
                <div class="timeline-badge">
                  <i class="icon-genius" />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      Stablished Restaurant in Europe
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </li>
              <li class="animate-box timeline-unverted">
                <div class="timeline-badge">
                  <i class="icon-genius" />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      Franchise Restaurants Brooklyn
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted animate-box">
                <div class="timeline-badge">
                  <i class="icon-genius" />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      Added 100K More Employees
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </li>
              <li class="animate-box timeline-unverted">
                <div class="timeline-badge">
                  <i class="icon-genius" />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h3 class="timeline-title">
                      Stablished Marketing
                    </h3>
                  </div>
                  <div class="timeline-body">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="fh5co-featured-testimony" class="fh5co-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 fh5co-heading">
            <h2>Testimony</h2>
            <div class="row">
              <div class="col-md-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil, nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque, nesciunt similique commodi omnis.</p>
              </div>
            </div>
          </div>

          <div class="col-md-5 animate-box img-to-responsive">
            <img src="images/person_1.jpg" alt="">
          </div>
          <div class="col-md-7 animate-box">
            <blockquote>
              <p> &ldquo; If you have good chicken tenders. I will eat lunch at Kitchen 218 everyday. &rdquo;</p>
              <p class="author">
                <cite>&mdash; Evan Porter</cite>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div id="fh5co-started" class="fh5co-section animate-box" style="background-image: url(images/hero_1.jpeg);" data-stellar-background-ratio="0.5">
      <div class="overlay" />
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Book a Table</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim quae vitae cupiditate, sequi quam ea id dolor reiciendis consectetur repudiandae. Rem quam, repellendus veniam ipsa fuga maxime odio? Eaque!</p>
            <p><a href="mailto:info@yourdomainname.com" class="btn btn-primary btn-outline">Contact Us</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import About from '../components/About'

export default {
  name: 'Dream',
  components: { About }
}
</script>

  <style scoped />
</template>
