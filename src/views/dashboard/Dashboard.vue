<script setup>


</script>

<template>
  <div>
    <div class="text-center pt-3 pb-3">
      <h1 class="fw-bold display-5">Hola, bienevenido(a) a nuestra herramienta</h1>
    </div>
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CCarousel indicators>
              <CCarouselItem>
                <div class="container h-100">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-6 mb-4">
                      <h1 class="fs-3 fw-bold text-body-emphasis lh-1 mb-3">Obtén tu número DID en segundos<span class="text-empresary"></span></h1>
                      <p class="lead">
                        Conecta tu negocio al mundo con números locales en más de 60 países.
                        Activa tu DID hoy mismo y empieza a recibir llamadas como si estuvieras ahí.
                      </p>
                      <div class="d-lg-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Ver DID´s disponibles</button>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="position-relative">
                        <img src="/src/assets/images/hero-did.png" class="w-75 h-100" alt="hero-img">
                      </div>
                    </div>
                  </div>
                </div>
              </CCarouselItem>
              <CCarouselItem>
                <div class="container h-100">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-6">
                      <div class="position-relative text-center">
                        <img src="/src/assets/images/hero-doc.png" class="w-75 h-100" alt="hero-img">
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-4">
                      <h1 class="fs-3 fw-bold text-body-emphasis lh-1 mb-3">Revisa nuestra <span class="fw-bold color-text">documentación</span></h1>
                      <p class="lead">
                        Consulta las guías y ejemplos para comenzar rápidamente o profundizar en opciones avanzadas de configuración.
                      </p>
                      <div class="d-lg-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Ver Documentación</button>
                      </div>
                    </div>
                  </div>
                </div>
              </CCarouselItem>
            </CCarousel>
          </CCardBody>
        </CCard>
      </CCol>
      <!-- <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader></CCardHeader>
          <CCardBody>

          </CCardBody>
        </CCard>
      </CCol> -->
    </CRow>
    <!-- <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader> </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol :sm="12" :lg="6">
              </CCol>
              <CCol :sm="12" :lg="6">
                <CRow>

                </CRow>
              
                
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow> -->
  </div>
</template>

<style>
.btn-primary {
  background-color: #337b7e !important;
  border: 1px solid #337b7e !important;
}
.carousel-indicators button {
  background-color: #337b7e !important;
}

.color-text {
  color: #337b7e;
}
</style>
