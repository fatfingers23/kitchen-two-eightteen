<template>
  <header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner" style="" data-stellar-background-ratio="0.5">
    <div class="overlay" />
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="display-t js-fullheight">
            <div class="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
              <h1 class="force-primary-font">
                <em>The</em> Nightlife of Pulaski
              </h1>

              <div class="subscribe">
                <h3 class="mx-auto force-primary-font" style="color: white;">
                  Join the waiting list for updates!
                </h3>
                <div class="row">
                  <div id="mc_embed_signup">
                    <div class="col-md-6 col-md-offset-3 col-sm6-6 ">
                      <form
                        id="mc-embedded-subscribe-form"
                        action="https://kitchen218.us2.list-manage.com/subscribe/post?u=40e6b4883ebe42e991e718cf3&amp;id=3abadf358e"
                        method="post"
                        name="mc-embedded-subscribe-form"
                        class="validate form-inline"
                        role="form"
                        target="_blank"
                        novalidate
                      >
                        <div class="form-group">
                          <label class="sr-only" for="mce-EMAIL">Email address</label>
                          <input
                            id="mce-EMAIL"
                            type="email"
                            class="form-control transparent required email force-primary-font"
                            name="EMAIL"
                            required
                            placeholder="Your email here..."
                          >
                        </div>

                        <button type="submit" class="btn btn-primary btn-outline">
                          Notify Me
                        </button>
                        <div id="mce-responses" class="clear">
                          <div id="mce-error-response" class="response" style="display:none" />
                          <div id="mce-success-response" class="response" style="display:none" />
                        </div>
                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                          <input type="text" name="b_40e6b4883ebe42e991e718cf3_3abadf358e" tabindex="-1" value="">
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderWithPicture',
  watch: {
    $route () {
      window.pageStart()
    }
  },
  mounted () {
    window.pageStart()
  }
}
</script>

<style scoped>

#fh5co-header {
  background-image: url(~assets/images/front_of_building.jpg);
}
</style>
