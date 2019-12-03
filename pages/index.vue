<template>
<div class="page index">
  <nav>
    <div class="logo"></div>
    <div class="title">{{ textMap.title }}</div>
  </nav>
  <div class="banner"></div>
  <div class="intro margin-top-bottom-double">
    <div class="content responsive-typesetting-container-medium paragraphs a-text-parent font-size-variable-large" v-html="markdown(textMap.intro)"></div>
  </div>
  <div class="description">
    <div class="content responsive-typesetting-container-medium paragraphs a-text-parent" v-html="markdown(textMap.description)"></div>
  </div>
  <div class="section-title-container">
    <h2 class="section-title with-underline text-align-center margin-top-double margin-bottom-single"><span>{{ textMap.showcase }}</span></h2>
  </div>
  <div class="game-container">
    <h3 class="game-title">{{ textMap.home }}</h3>
    <game />
  </div>
  <div class="projects tcl-container">
    <div class="project tcl-panel">
      <div class="note paragraphs no-margin a-text-parent" v-html="markdown(textMap.introToProjects)"></div>
    </div>
    <div class="project tcl-panel" v-for="(project, projectIndex) of projects" :key="projectIndex">
      <div class="image"></div>
      <div class="summary margin-bottom-8">
        <div class="id secondary-text font-size-small margin-top-4">提案 {{ project.id }}</div>
        <h3 class="title" v-html="spacingOptimizer(project.title)"></h3>
        <a class="a-block show-details font-size-tiny line-height-tight" @click="projectsIX[projectIndex].showDetails = !projectsIX[projectIndex].showDetails"><span class="a-target">{{ projectsIX[projectIndex].showDetails ? '收合' : '展開' }}</span></a>
      </div>
      <div class="details margin-bottom-single" v-show="projectsIX[projectIndex].showDetails">
        <div class="team">{{ textMap.projectOwner }}{{ PUNCT.COLON }}{{ project.team }}</div>
        <div class="description paragraphs margin-8 secondary-text font-size-small" v-html="markdown(project.description)"></div>
        <a class="a-block font-size-tiny" :href="project.doc" target="_blank"><span class="a-target">看詳細成果</span></a>
      </div>
    </div>
    <div class="project tcl-panel">
      <div class="note paragraphs no-margin a-text-parent" v-html="markdown(textMap.toAllProjects)"></div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="section-title-container">
    <h2 class="section-title with-underline text-align-center margin-top-double margin-bottom-single"><span>{{ textMap.theater }}</span></h2>
  </div>
  <div class="theater">
    <div class="movie">
      <template v-if="activeMovie.type === 'youtube'">
        <iframe class="content embed" :src="`https://www.youtube.com/embed/${activeMovie.id}`" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </template>
      <template v-else-if="activeMovie.type === 'fb'">
        <iframe class="content embed" :src="`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D${activeMovie.id}&show_text=false&appId`" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
      </template>
    </div>
  </div>
  <div class="playlist tcl-container margin-top-8">
    <div class="item tcl-panel half-width" v-for="(movie, movieIndex) of movies" :key="movieIndex" @click="activeMovieIndex = movieIndex">
      <div class="image" :style="{ backgroundImage: `url(${movie.image})`}"></div>
      <h3 class="small margin-top-bottom-4" v-html="spacingOptimizer(movie.title)"></h3>
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
  <div class="section-title-container">
    <h2 class="section-title with-underline text-align-center margin-top-double margin-bottom-single"><span>{{ textMap.more }}</span></h2>
  </div>
  <div class="links tcl-container">
    <div class="link tcl-panel half-width" v-for="(link, linkIndex) of links" :key="linkIndex">
      <a class="a-block" :href="link.reference" target="_blank"><span class="a-target">{{ link.text }}</span></a>
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
  <footer>
    <div class="orgs-container tcl-container">
      <div class="orgs tcl-panel full-width tcl-left-right-margin">
        <div class="org margin-bottom-single">
          <img src="/images/tjc-logo-white.png" height="256px" />
          <div class="margin-top-bottom-8 font-size-small">主辦</div>
        </div>
        <div class="org margin-bottom-single">
          <img src="/images/watchout-logo-white.png" height="24px" />
          <div class="margin-top-bottom-8 font-size-small">用心協辦</div>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import Game from '~/components/Game'
import * as INFO from '~/data/info'
import { markdown, PUNCT, spacingOptimizer, generateMeta } from '~/lib/util'
import { textMap, projects, movies, links } from '~/data/hackathon-2019-11'
export default {
  data() {
    let projectsIX = projects.map(project => ({
      showDetails: false
    }))
    return {
      PUNCT,
      textMap,
      projects,
      projectsIX,
      movies,
      activeMovieIndex: 0,
      links
    }
  },
  computed: {
    activeMovie() {
      return this.movies[this.activeMovieIndex]
    }
  },
  head() {
    const baseURL = INFO.BASE_URL
    const title = INFO.SITE_TITLE
    const description = INFO.SITE_DESCRIPTION
    const image = baseURL + 'images/fb-cover-2-with-title.png'
    return {
      title,
      meta: this.generateMeta(baseURL, title, description, image)
    }
  },
  methods: {
    markdown,
    spacingOptimizer,
    generateMeta
  },
  components: {
    Game
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

// local variables
$yellow: #FFDF2E;
$black: #222;
$grey: #CCC;
$dark-grey: #555;
$nav-height: 3rem;

// override watchout-common-assets
a.a-text,
.a-text-parent a {
  display: inline;
  @include underline($black, 0.5);
  &:hover, &:focus, &:active {
    @include underline($black, 1.0);
  }
}
a.a-block:not(.disabled) {
  & {
    .a-target {
      display: inline;
      @include underline($black, 0.5);
    }
  }
  &:hover, &:focus, &:active {
    .a-target {
      @include underline($black, 1.0);
    }
  }
}

.page.index {
  > nav {
    display: flex;
    height: 3rem;
    background-color: $black;
    > .logo {
      @include rect(1);
      width: $nav-height;
      background-color: $yellow;
      background-image: url('/images/logo-2-small.png');
      background-position: center center;
      background-size: cover;
    }
    > .title {
      line-height: $nav-height;
      font-size: 1.25rem;
      color: white;
      margin-left: 0.5rem;
    }
  }
  > .banner {
    @include rect(2);
    @include tcl-sm {
      @include rect(3);
    }
    background-color: $grey;
    background-image: url('/images/fb-cover-2-with-title.png');
    background-position: center center;
    background-size: cover;
  }
  > .section-title-container {
    width: 100%;
    overflow: hidden;
    > .section-title {
      font-size: 1.25rem;
      transform: scaleX(1.8);
    }
  }
  > .game-container {
    background-color: $black;
    padding: 2rem;
    > .game-title {
      margin-bottom: 1rem;
      text-align: center;
      color: white;
    }
    > .game {
      @include rect(1);
      max-width: 30rem;
      margin: 0 auto;
      background-color: $grey;
    }
  }
  > .projects {
    margin-top: 2rem;
    margin-bottom: 2rem;
    > .project {
      > .image {
        @include rect(2/1);
        background-color: $grey;
        background-image: url('/images/banner-2.png');
        background-position: center center;
        background-size: cover;
      }
      > .summary {
        position: relative;
        > .show-details {
          position: absolute;
          top: 0;
          right: 1rem;
          @include tcl-sm {
            right: 0;
          }
        }
      }
      > .summary,
      > .details {
        padding-left: 1rem;
        padding-right: 1rem;
        @include tcl-sm {
          padding: 0;
        }
      }
      > .note {
        background-color: rgba($yellow, 0.65);
        padding: 1rem;
        font-size: $font-size-small;
      }
    }
  }
  > .theater {
    max-height: 33.75rem;
    display: flex;
    justify-content: center;
    background-color: $black;
    > .movie {
      @include rect(16/9);
      max-width: 60rem;
    }
  }
  > .playlist {
    > .item {
      margin-bottom: 0;
      cursor: pointer;
      > .image {
        @include rect(16/9);
        background-color: $grey;
        background-position: center center;
        background-size: cover;
      }
    }
  }
  > footer {
    margin-top: 8rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background-color: $black;
    color: $dark-grey;
  }
}
</style>
