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
  <div class="section-title with-underline small text-align-center margin-top-double margin-bottom-single"><span>成果展示</span></div>
  <div class="game-container">
    <div class="game"></div>
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
      <div class="details" v-show="projectsIX[projectIndex].showDetails">
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
</div>
</template>

<script>
import { markdown, PUNCT, spacingOptimizer } from '~/lib/util'
import { textMap, projects } from '~/data/hackathon-2019-11'
export default {
  data() {
    let projectsIX = projects.map(project => ({
      showDetails: false
    }))
    return {
      PUNCT,
      textMap,
      projects,
      projectsIX
    }
  },
  methods: {
    markdown,
    spacingOptimizer
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

// local variables
$yellow: #FFDF2E;
$black: #222;
$grey: #CCC;
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
      background-image: url('/logo-2-small.png');
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
    background-image: url('/fb-cover-2.png');
    background-position: center center;
    background-size: cover;
  }
  > .game-container {
    background-color: $color-light-grey;
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
        background-image: url('/banner-2.png');
        background-position: center center;
        background-size: cover;
      }
      > .summary {
        position: relative;
        > .show-details {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      > .note {
        background-color: rgba($yellow, 0.65);
        padding: 1rem;
        font-size: $font-size-small;
      }
    }
  }
}
</style>
