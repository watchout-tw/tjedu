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
      <div class="summary margin-bottom-single">
        <div class="id secondary-text font-size-small margin-top-4">提案 {{ project.id }}</div>
        <h3 class="title" v-html="spacingOptimizer(project.title)"></h3>
        <a class="a-text show-details" @click="projectsIX[projectIndex].showDetails = !projectsIX[projectIndex].showDetails">{{ projectsIX[projectIndex].showDetails ? '收合' : '展開' }}</a>
      </div>
      <div class="details" v-show="projectsIX[projectIndex].showDetails">
        <div class="team">{{ project.team }}</div>
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
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import { spacingOptimizer } from 'watchout-common-functions/lib/bunko'
import { textMap, projects } from '~/data/hackathon-2019-11'
export default {
  mixins: [knowsMarkdown],
  data() {
    let projectsIX = projects.map(project => ({
      showDetails: false
    }))
    return {
      textMap,
      projects,
      projectsIX
    }
  },
  methods: {
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

.page.index {
  > nav {
    display: flex;
    height: 3rem;
    background-color: $black;
    > .logo {
      @include rect(1);
      width: $nav-height;
      background-color: $yellow;
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
    background-color: $grey;
    > .game {
      @include rect(1);
      max-width: 30rem;
      margin: 0 auto;
      background-color: $yellow;
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
      > .note {
        background-color: $grey;
        padding: 2rem;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
