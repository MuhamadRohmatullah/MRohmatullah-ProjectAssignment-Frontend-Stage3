<template>

<div class="container-fluid mt-5">
   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div id="elemen"></div>
      <div class="carousel-caption d-none d-md-block">
        <h3>Diskon 10% Belanja min 30.000</h3>
        <p>Dapatkan diskon</p>
      </div>
    </div>
    <div class="carousel-item">
      <div id="elemen"></div>
      <div class="carousel-caption d-none d-md-block">
        <h3>CashBack 90%</h3>
        <p>Dapatkan Cashback</p>
      </div>
    </div>
    <div class="carousel-item">
      <div id="elemen"></div>
      <div class="carousel-caption d-none d-md-block">
        <h3>Gratis Ongkir</h3>
        <p>Dapatkan gratis ongkir ke semua wilayah.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</template>
<style>
#elemen{
    width: 100%;
    height: 150px;
    background-color: rgb(120, 223, 129);
}
</style>