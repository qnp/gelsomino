<template>
  <div id="app">
    <div class="navbar-header navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" href="#">Le Bonneteau</span>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">1 — Explications</a></li>
            <li ><a href="model.html">2 — Mon Bonneteau</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div class="container">
        <div class="starter-template">
          <div class="row">
            <div class="col-xs-12">
              <h1>Le Bonneteau</h1>
            </div>
            <div class="col-xs-6">
              <p>The three-card Monte game itself is very simple. To play, a dealer places three cards face down on a table, usually on a cardboard box which provides the ability to set up and disappear quickly.[4] The dealer shows that one of the cards is the target card, e.g. <a href="https://en.wikipedia.org/wiki/Three-card_Monte">acording to wikipedia…</a></p>
              
              <h2>Rules</h2>
              <p>
                The game goal is very simple, the game shows an object, and then the object is hidden under one of the 3 hidding element.
                The hidding element can be whatever you like, either cards, cups… and they usually hide a dice.
                I our you can show shells for instance hidding a pearl.
                Then we shuffle the objects and the user must make a selection to find his object.
                Then we display winner or looser.
              </p>
            </div>
            <div class="col-xs-4">
              <img src="http://jamiemason.github.io/front-end-engineer-interview-exercise/static/cat-game-of-shells.gif">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <h2>The goal of this test</h2>
              <p>You're mission if you accept it <strong>is to code a game</strong></p>
              <p>
                The primary goal is to make a working game available. <em>because we would like to have fun here</em><br>
              </p>
              <h2>The code</h2>
              <p>
                You need to build an app in vueJs, making an XHR call to this url: <pre>https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new</pre>
                This enpoint will randomly return a value between 0 & 2. You need to get the information from here to know under which object you will display the pearl
              </p>
              <p>you can use whatever online documentation you need
              </p>
              <p>
                <strong>Enjoy ! </strong>
              </p>
              <br>
              <img src="static/logo.png" style="max-width: 20.7rem; display: block; margin-top: 0rem; margin-bottom: 0.7rem ">
              <p>L'Équipe des dev de Backmarket</p>
              <h2 style="margin-top:5rem">Ressources</h2>
              <img src="static/pearl.jpeg">
              <img src="static/shell.png">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  body {
    padding-top: 50px;
  }
  .starter-template {
    padding: 40px 15px;
  }
</style>
