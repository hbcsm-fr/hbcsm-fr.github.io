---
layout: default
title: "Calendrier matchs : U11 Masculins"
permalink: /U11/m/matchs/
activejquery: true
activecalendarstr: 'U11M'
---

<!-- Fil d'ariane -->
<nav class="ms-4 mt-1" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page"><a href="/" >Accueil</a></li>
    <li class="breadcrumb-item" aria-current="page">Equipe U11M</li>
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
    <p id="generated-at" class="mb-1 placeholder w-50" style="display: none;" ></p>
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
