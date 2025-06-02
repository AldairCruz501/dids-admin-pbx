<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1 class="text-center ">Inicio de Sesión</h1>
                  <p class="text-body-secondary text-center">Introduce tu correo y contraseña para empezar a utilizar la herramienta.</p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Correo Electrónico"
                      autocomplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="********"
                      autocomplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton class="px-4 btn-color"> Iniciar Sesión </CButton>
                    </CCol>
                    <CCol :xs="6">
                      <CButton class="px-0 btn-link">
                        ¿Olvidaste tu contraseña
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <img src="/src/assets/images/logo.png" alt="" class="w-50 mb-3">
                  <p>
                    Crea una cuenta para comenzar a gestionar tus DID’s de forma fácil, 
                    segura y centralizada. Lleva el control completo de tus números, 
                    configuraciones y reportes desde un solo lugar.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Registrate
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<style scoped>
  .bg-primary {
    background-color: #337b7e !important;
    border: 1px solid #337b7e !important;
  }
  .btn-color {
    background-color: #337b7e !important;
    border: 1px solid #337b7e !important;
  } 
  .btn-color:hover {
    background-color: #a0e5e4 !important;
    border: 1px solid #a0e5e4 !important;
    color: #337b7e;
  } 
  .btn-link {
    background-color: transparent !important;
    color: #337b7e;
    text-decoration: none;
  }
  .btn-link:hover {
    text-decoration: underline;
  }
</style>