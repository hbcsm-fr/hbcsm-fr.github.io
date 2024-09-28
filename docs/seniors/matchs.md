---
layout: default
title: "Calendrier matchs : seniors"
permalink: /seniors/matchs/
activejquery: true
activecalendarstr: 'SEN'
---

<!-- Fil d'ariane -->
<nav class="ms-4 mt-1" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page"><a href="/" >Accueil</a></li>
    <li class="breadcrumb-item" aria-current="page">Equipe seniors</li>
    <li class="breadcrumb-item" aria-current="page">Calendrier matchs</li>
  </ol>
</nav>

<!-- Corps -->
<div class="container" >
  <div class="min-vh-100 d-inline-block" >
  <div id="warning-message" class="alert alert-warning" role="alert" style="display: none;" >
    ...
  </div>
    <div id="waiting-message" class="d-flex justify-content-center" style="margin-bottom: 10%;" >
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Construction du calendrier en cours, veuillez patienter, merci &#9786;</span>
      </button>
    </div>
    <h2 id="next-match-title" style="display: none;" >Prochains matchs</h2>
    <div class="list-group" id="next-match-group" style="display: none;" >
      <span id="next-match" class="list-group-item list-group-item-action active placeholder-wave" display="display: none;" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 placeholder w-50"></h5>
          <small class="placeholder w-25" ></small>
        </div>
        <p class="mb-1 placeholder w-50"></p>
        <small class="placeholder w-50" ></small>
      </span>
      <span id="second-next-match" class="list-group-item list-group-item-action placeholder-wave" style="display: none;" >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 placeholder w-50"></h5>
          <small class="text-body-secondary placeholder w-25"></small>
        </div>
        <p class="mb-1 placeholder w-50"></p>
        <small class="text-body-secondary placeholder w-50"></small>
      </span>
    </div>
    <h2 id="past-match-title" class="mt-4" style="display: none;" >Matchs passés</h2>
    <p id="past-match-text" style="display: none;" >
      Les résultats des match sont à retrouver sur nos réseaux ou sur le site de la fédération !
    </p>
    <div class="list-group" id="past-match-group" style="display: none;" >
      <span class="list-group-item list-group-item-action placeholder-wave" id="past-match-placeholder" >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 placeholder w-50"></h5>
          <small class="placeholder w-25" ></small>
        </div>
        <p class="mb-1 placeholder w-50"></p>
        <small class="placeholder w-50" ></small>
      </span>
    </div>
  </div>
</div>

<!--
<div class="container" >
  <div class="min-vh-100 w-50 d-inline-block" style="margin-left: 25%;"  >
    <h2>Prochains matchs</h2>
    <div class="list-group">
      <span class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Match contre Brioux</h5>
          <small>Dans 2 jours</small>
        </div>
        <p class="mb-1">Le 22 mai 2024 à 21h00</p>
        <small>Lieu : Salle XXX à Brioux</small>
      </span>
      <span class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Match contre Airvault</h5>
          <small class="text-body-secondary">Dans 9 jours</small>
        </div>
        <p class="mb-1">Le XX mai 2024 à 19h</p>
        <small class="text-body-secondary">Lieu : Salle Cavaillès à St Maixent</small>
      </span>
    </div>
    <h2 class="mt-4">Matchs passés</h2>
    <p>
      Les résultats des match sont à retrouver sur nos réseaux ou sur le site de la fédération !
    </p>
    <div class="list-group">
      <span class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Match contre Centre Nord</h5>
          <small>14/10/2024</small>
        </div>
        <p class="mb-1">Résultat à retrouver sur nos réseaux !</p>
        <small>Lieu : Salle Cavaillès à St Maixent</small>
      </span>
      <span class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Match contre XXX</h5>
          <small class="text-body-secondary">06/10/2024</small>
        </div>
        <p class="mb-1">Résultat à retrouver sur nos réseaux !</p>
        <small class="text-body-secondary">Lieu : Salle Cavaillès à St Maixent</small>
      </span>
      <span class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Match contre Bressuire</h5>
          <small class="text-body-secondary">30/09/2023</small>
        </div>
        <p class="mb-1">Résultat à retrouver sur nos réseaux !</p>
        <small class="text-body-secondary">Lieu : Salle XXX à Bressuire</small>
      </span>
    </div>
  </div>
</div>
-->