<template>
  <div>
    <header-with-picture v-if="showHeader" />

    <div id="fh5co-about" class="fh5co-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6  img-wrap animate-box" data-animate-effect="fadeInLeft">
            <img class="img-thumbnail" src="~/assets/images/family.jpg" alt="The family">
          </div>
          <div class="col-md-5 col-md-push-1 animate-box">
            <div class="section-heading">
              <h2>The Restaurant</h2>
              <p>{{ aboutText.topParagraph }}</p>
              <p v-if="aboutText.bottomParagraph != ''">
                {{ aboutText.bottomParagraph }}
              </p>
              <p>
                <NuxtLink to="/dream" class="btn btn-primary btn-outline">
                  The Dream
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutText from '@/control/text/about.json'
import HeaderWithPicture from './HeaderWithPicture'

export default {
  name: 'About',
  components: { HeaderWithPicture },
  props: {
    showHeader: {
      type: Boolean,
      default: true
    }

  },
  data () {
    return {
      aboutText
    }
  }
}
</script>

<style scoped>

</style>
