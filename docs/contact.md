---
layout: default
title: Contact
permalink: /contact/
activejquery: false
---

<!-- Fil d'ariane -->
<nav class="ms-4 mt-1" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page"><a href="/" >Accueil</a></li>
        <li class="breadcrumb-item" aria-current="page">Contact</li>
  </ol>
</nav>

<!-- Corps -->
<div class="container" >
  <div class="min-vh-100 d-inline-block" >
    <p>
      <img src="/assets/img/logo-hbcsm.png" alt="Logo HBCSM" />
    </p>
    <h2>Nos réseaux</h2>
    <h3><i class="bi bi-facebook"></i> Facebook</h3>
    <p><a href="https://www.facebook.com/HBCSM79">HBCSM Officiel</a></p>
    <h3><i class="bi bi-instagram"></i> Instagram</h3>
    <p><a href="https://www.instagram.com/hbcsm_officiel/" >@hbcsm_officiel</a></p>
    <h2>Contacts club privilégiés</h2>
    <h3>Mathéo SELLIN</h3>
    <p>
      <a class="btn btn-primary" id="phoneMSE" ><i class="bi bi-telephone" href="#" ></i> Appeler</a>
    </p>
    <h3>Christopher THUBERT</h3>
    <p>
      <a class="btn btn-primary" id="phoneCTH" ><i class="bi bi-telephone" href="#" ></i> Appeler</a>
    </p>
  </div>
</div>

<script src="/assets/js/jquery-1_12_4.js" ></script>
<script src="/assets/js/phone-1_1_0.min.js" ></script>
<script>
let phoneNumberList = new Array();
{% for dataPN in site.data.phone-number.data %}
phoneNumberList.push(new PhoneNumber("{{ dataPN.ID }}", "{{ dataPN.phone }}", "{{ dataPN.key }}"));
{% endfor %}

$("#phoneMSE").on("click", function () {
  const phoneCmd = new PhoneCmd("MSE", "phoneMSE", phoneNumberList);
  (new PhoneComponent(phoneCmd)).showPhoneNumberOnClick();
  $("#phoneMSE").off("click");
});
$("#phoneCTH").on("click", function () {
  const phoneCmd = new PhoneCmd("CTH", "phoneCTH", phoneNumberList);
  (new PhoneComponent(phoneCmd)).showPhoneNumberOnClick();
  $("#phoneCTH").off("click");
});
</script>

