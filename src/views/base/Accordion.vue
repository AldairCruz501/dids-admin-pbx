<!-- <script setup>
import { ref, computed } from 'vue'
import api from '../../services/api'
import Multiselect from 'vue-multiselect'
import Swal from 'sweetalert2'

// Datos
const selectedStates = ref([])
const selectedCodes = ref([])
const results = ref([])
const loading = ref(false)

// Opciones de selección
const statesOptions = [
  { name: 'Aguascalientes', code: 'AGS'},
  { name: 'Baja California', code: 'BC'},
  { name: 'Baja California Sur', code: 'BCS'},
  { name: 'Campeche', code: 'CAM'},
  { name: 'Chiapas', code: 'CHS'},
  { name: 'Chiahuahua', code: 'CHI'},
  { name: 'Coahuila', code: 'COA'},
  { name: 'Colima', code: 'COL'},
  { name: 'Ciudad de México', code: 'CMX' },
  { name: 'Durango', code: 'DGO' },
  { name: 'Guanajuato', code: 'DGO' },
  { name: 'Guerrero', code: 'GRO' },  
  { name: 'Hidalgo', code: 'HGO' },  
  { name: 'Jalisco', code: 'JAL' },
  { name: 'Estado de México', code: 'MEX' }, 
  { name: 'Michoacán', code: 'MIC' },  
  { name: 'Morelos', code: 'MOR' }, 
  { name: 'Nayarit', code: 'NAY' }, 
  { name: 'Nuevo León', code: 'NL' },
  { name: 'Oaxaca', code: 'OAX' }, 
  { name: 'Puebla', code: 'PUE' }, 
  { name: 'Querétaro', code: 'QRO' },
  { name: 'Quintana Roo', code: 'QR' },
  { name: 'Sam Luis Potosi', code: 'SLP' },
  { name: 'Sinaloa', code: 'SIN' },
  { name: 'Sonora', code: 'SON' },
  { name: 'Tabasco', code: 'TAB' },
  { name: 'Tamaulipas', code: 'TAM' },
  { name: 'Tlaxcala', code: 'TLA' },
  { name: 'Veracruz', code: 'VER' },
  { name: 'Yucatán', code: 'YUC' },
  { name: 'Zacatecas', code: 'ZAC' },
]

const phoneCodeOptions = [
  { name: '33', code: '33' },
  { name: '55', code: '55' },
  { name: '56', code: '56' },
  { name: '81', code: '81' },
  { name: '221', code: '221' },
  { name: '222', code: '222' },
  { name: '223', code: '223' },
  { name: '224', code: '224' },
  { name: '225', code: '225' },
  { name: '226', code: '226' },
  { name: '227', code: '227' },
  { name: '228', code: '228' },
  { name: '229', code: '229' },
  { name: '231', code: '231' },
  { name: '232', code: '232' },
  { name: '233', code: '233' },
  { name: '235', code: '235' },
  { name: '236', code: '236' },
  { name: '237', code: '237' },
  { name: '238', code: '238' },
  { name: '241', code: '241' },
  { name: '243', code: '243' },
  { name: '244', code: '244' },
  { name: '245', code: '245' },
  { name: '246', code: '246' },
  { name: '247', code: '247' },
  { name: '248', code: '248' },
  { name: '249', code: '249' },
  { name: '271', code: '271' },
  { name: '272', code: '272' },
  { name: '273', code: '273' },
  { name: '274', code: '274' },
  { name: '275', code: '275' },
  { name: '276', code: '276' },
  { name: '278', code: '278' },
  { name: '279', code: '279' },
  { name: '281', code: '281' },
  { name: '282', code: '282' },
  { name: '283', code: '283' },
  { name: '284', code: '284' },
  { name: '285', code: '285' },
  { name: '287', code: '287' },
  { name: '288', code: '288' },
  { name: '294', code: '294' },
  { name: '296', code: '296' },
  { name: '297', code: '297' },
  { name: '311', code: '311' },
  { name: '312', code: '312' },
  { name: '313', code: '313' },
  { name: '314', code: '314' },
  { name: '315', code: '315' },
  { name: '316', code: '316' },
  { name: '317', code: '317' },
  { name: '319', code: '319' },
  { name: '321', code: '321' },
  { name: '322', code: '322' },
  { name: '323', code: '323' },
  { name: '324', code: '324' },
  { name: '325', code: '325' },
  { name: '326', code: '326' },
  { name: '327', code: '327' },
  { name: '328', code: '328' },
  { name: '329', code: '329' },
  { name: '341', code: '341' },
  { name: '342', code: '342' },
  { name: '343', code: '343' },
  { name: '344', code: '344' },
  { name: '345', code: '345' },
  { name: '346', code: '346' },
  { name: '347', code: '347' },
  { name: '348', code: '348' },
  { name: '349', code: '349' },
  { name: '351', code: '351' },
  { name: '352', code: '352' },
  { name: '353', code: '353' },
  { name: '354', code: '354' },
  { name: '355', code: '355' },
  { name: '356', code: '356' },
  { name: '357', code: '357' },
  { name: '358', code: '358' },
  { name: '359', code: '359' },
  { name: '371', code: '371' },
  { name: '372', code: '372' },
  { name: '373', code: '373' },
  { name: '374', code: '374' },
  { name: '375', code: '375' },
  { name: '376', code: '376' },
  { name: '377', code: '377' },
  { name: '378', code: '378' },
  { name: '381', code: '381' },
  { name: '382', code: '382' },
  { name: '383', code: '383' },
  { name: '384', code: '384' },
  { name: '385', code: '385' },
  { name: '386', code: '386' },
  { name: '387', code: '387' },
  { name: '388', code: '388' },
  { name: '389', code: '389' },
  { name: '391', code: '391' },
  { name: '392', code: '392' },
  { name: '393', code: '393' },
  { name: '394', code: '394' },
  { name: '395', code: '395' },
  { name: '411', code: '411' },
  { name: '412', code: '412' },
  { name: '413', code: '413' },
  { name: '414', code: '414' },
  { name: '415', code: '415' },
  { name: '417', code: '417' },
  { name: '418', code: '418' },
  { name: '419', code: '419' },
  { name: '421', code: '421' },
  { name: '422', code: '422' },
  { name: '423', code: '423' },
  { name: '424', code: '424' },
  { name: '425', code: '425' },
  { name: '426', code: '426' },
  { name: '427', code: '427' },
  { name: '428', code: '428' },
  { name: '429', code: '429' },
  { name: '431', code: '431' },
  { name: '432', code: '432' },
  { name: '433', code: '433' },
  { name: '434', code: '434' },
  { name: '435', code: '435' },
  { name: '436', code: '436' },
  { name: '437', code: '437' },
  { name: '438', code: '438' },
  { name: '440', code: '440' },
  { name: '441', code: '441' },
  { name: '442', code: '442' },
  { name: '443', code: '443' },
  { name: '444', code: '444' },
  { name: '445', code: '445' },
  { name: '446', code: '446' },
  { name: '447', code: '447' },
  { name: '448', code: '448' },
  { name: '449', code: '449' },
  { name: '451', code: '451' },
  { name: '452', code: '452' },
  { name: '453', code: '453' },
  { name: '454', code: '454' },
  { name: '455', code: '455' },
  { name: '456', code: '456' },
  { name: '457', code: '457' },
  { name: '458', code: '458' },
  { name: '459', code: '459' },
  { name: '461', code: '461' },
  { name: '462', code: '462' },
  { name: '463', code: '463' },
  { name: '464', code: '464' },
  { name: '465', code: '465' },
  { name: '466', code: '466' },
  { name: '467', code: '467' },
  { name: '468', code: '468' },
  { name: '469', code: '469' },
  { name: '471', code: '471' },
  { name: '472', code: '472' },
  { name: '473', code: '473' },
  { name: '474', code: '474' },
  { name: '475', code: '475' },
  { name: '476', code: '476' },
  { name: '477', code: '477' },
  { name: '478', code: '478' },
  { name: '479', code: '479' },
  { name: '481', code: '481' },
  { name: '482', code: '482' },
  { name: '483', code: '483' },
  { name: '485', code: '485' },
  { name: '486', code: '486' },
  { name: '487', code: '487' },
  { name: '488', code: '488' },
  { name: '489', code: '489' },
  { name: '492', code: '492' },
  { name: '493', code: '493' },
  { name: '494', code: '494' },
  { name: '495', code: '495' },
  { name: '496', code: '496' },
  { name: '498', code: '498' },
  { name: '499', code: '499' },
  { name: '588', code: '588' },
  { name: '591', code: '591' },
  { name: '592', code: '592' },
  { name: '593', code: '593' },
  { name: '594', code: '594' },
  { name: '595', code: '595' },
  { name: '596', code: '596' },
  { name: '597', code: '597' },
  { name: '599', code: '599' },
  { name: '611', code: '611' },
  { name: '612', code: '612' },
  { name: '613', code: '613' },
  { name: '614', code: '614' },
  { name: '615', code: '615' },
  { name: '616', code: '616' },
  { name: '618', code: '618' },
  { name: '621', code: '621' },
  { name: '622', code: '622' },
  { name: '623', code: '623' },
  { name: '624', code: '624' },
  { name: '625', code: '625' },
  { name: '626', code: '626' },
  { name: '627', code: '627' },
  { name: '628', code: '628' },
  { name: '629', code: '629' },
  { name: '631', code: '631' },
  { name: '632', code: '632' },
  { name: '633', code: '633' },
  { name: '634', code: '634' },
  { name: '635', code: '635' },
  { name: '636', code: '636' },
  { name: '637', code: '637' },
  { name: '638', code: '638' },
  { name: '639', code: '639' },
  { name: '641', code: '641' },
  { name: '642', code: '642' },
  { name: '643', code: '643' },
  { name: '644', code: '644' },
  { name: '645', code: '645' },
  { name: '647', code: '647' },
  { name: '648', code: '648' },
  { name: '649', code: '649' },
  { name: '651', code: '651' },
  { name: '652', code: '652' },
  { name: '653', code: '653' },
  { name: '656', code: '656' },
  { name: '657', code: '657' },
  { name: '658', code: '658' },
  { name: '659', code: '659' },
  { name: '661', code: '661' },
  { name: '662', code: '662' },
  { name: '663', code: '663' },
  { name: '664', code: '664' },
  { name: '665', code: '665' },
  { name: '667', code: '667' },
  { name: '668', code: '668' },
  { name: '669', code: '669' },
  { name: '671', code: '671' },
  { name: '672', code: '672' },
  { name: '673', code: '673' },
  { name: '674', code: '674' },
  { name: '675', code: '675' },
  { name: '676', code: '676' },
  { name: '677', code: '677' },
  { name: '687', code: '687' },
  { name: '694', code: '694' },
  { name: '695', code: '695' },
  { name: '696', code: '696' },
  { name: '697', code: '697' },
  { name: '698', code: '698' },
  { name: '711', code: '711' },
  { name: '712', code: '712' },
  { name: '713', code: '713' },
  { name: '714', code: '714' },
  { name: '715', code: '715' },
  { name: '716', code: '716' },
  { name: '717', code: '717' },
  { name: '718', code: '718' },
  { name: '719', code: '719' },
  { name: '721', code: '721' },
  { name: '722', code: '722' },
  { name: '723', code: '723' },
  { name: '724', code: '724' },
  { name: '725', code: '725' },
  { name: '726', code: '726' },
  { name: '727', code: '727' },
  { name: '728', code: '728' },
  { name: '729', code: '729' },
  { name: '731', code: '731' },
  { name: '732', code: '732' },
  { name: '733', code: '733' },
  { name: '734', code: '734' },
  { name: '735', code: '735' },
  { name: '736', code: '736' },
  { name: '737', code: '737' },
  { name: '738', code: '738' },
  { name: '739', code: '739' },
  { name: '741', code: '741' },
  { name: '742', code: '742' },
  { name: '743', code: '743' },
  { name: '744', code: '744' },
  { name: '745', code: '745' },
  { name: '746', code: '746' },
  { name: '747', code: '747' },
  { name: '748', code: '748' },
  { name: '749', code: '749' },
  { name: '751', code: '751' },
  { name: '753', code: '753' },
  { name: '754', code: '754' },
  { name: '755', code: '755' },
  { name: '756', code: '756' },
  { name: '757', code: '757' },
  { name: '758', code: '758' },
  { name: '759', code: '759' },
  { name: '761', code: '761' },
  { name: '762', code: '762' },
  { name: '763', code: '763' },
  { name: '764', code: '764' },
  { name: '765', code: '765' },
  { name: '766', code: '766' },
  { name: '767', code: '767' },
  { name: '768', code: '768' },
  { name: '769', code: '769' },
  { name: '771', code: '771' },
  { name: '772', code: '772' },
  { name: '773', code: '773' },
  { name: '774', code: '774' },
  { name: '775', code: '775' },
  { name: '776', code: '776' },
  { name: '777', code: '777' },
  { name: '778', code: '778' },
  { name: '779', code: '779' },
  { name: '781', code: '781' },
  { name: '782', code: '782' },
  { name: '783', code: '783' },
  { name: '784', code: '784' },
  { name: '785', code: '785' },
  { name: '786', code: '786' },
  { name: '789', code: '789' },
  { name: '791', code: '791' },
  { name: '797', code: '797' },
  { name: '821', code: '821' },
  { name: '823', code: '823' },
  { name: '824', code: '824' },
  { name: '825', code: '825' },
  { name: '826', code: '826' },
  { name: '828', code: '828' },
  { name: '829', code: '829' },
  { name: '831', code: '831' },
  { name: '832', code: '832' },
  { name: '833', code: '833' },
  { name: '834', code: '834' },
  { name: '835', code: '835' },
  { name: '836', code: '836' },
  { name: '841', code: '841' },
  { name: '842', code: '842' },
  { name: '844', code: '844' },
  { name: '845', code: '845' },
  { name: '846', code: '846' },
  { name: '861', code: '861' },
  { name: '862', code: '862' },
  { name: '864', code: '864' },
  { name: '866', code: '866' },
  { name: '867', code: '867' },
  { name: '868', code: '868' },
  { name: '869', code: '869' },
  { name: '871', code: '871' },
  { name: '872', code: '872' },
  { name: '873', code: '873' },
  { name: '877', code: '877' },
  { name: '878', code: '878' },
  { name: '891', code: '891' },
  { name: '892', code: '892' },
  { name: '894', code: '894' },
  { name: '897', code: '897' },
  { name: '899', code: '899' },
  { name: '913', code: '913' },
  { name: '914', code: '914' },
  { name: '917', code: '917' },
  { name: '919', code: '919' },
  { name: '921', code: '921' },
  { name: '922', code: '922' },
  { name: '923', code: '923' },
  { name: '924', code: '924' },
  { name: '932', code: '932' },
  { name: '933', code: '933' },
  { name: '934', code: '934' },
  { name: '936', code: '936' },
  { name: '937', code: '937' },
  { name: '938', code: '938' },
  { name: '951', code: '951' },
  { name: '953', code: '953' },
  { name: '954', code: '954' },
  { name: '958', code: '958' },
  { name: '961', code: '961' },
  { name: '962', code: '962' },
  { name: '963', code: '963' },
  { name: '964', code: '964' },
  { name: '965', code: '965' },
  { name: '966', code: '966' },
  { name: '967', code: '967' },
  { name: '968', code: '968' },
  { name: '969', code: '969' },
  { name: '971', code: '971' },
  { name: '972', code: '972' },
  { name: '981', code: '981' },
  { name: '982', code: '982' },
  { name: '983', code: '983' },
  { name: '984', code: '984' },
  { name: '985', code: '985' },
  { name: '986', code: '986' },
  { name: '987', code: '987' },
  { name: '988', code: '988' },
  { name: '990', code: '990' },
  { name: '991', code: '991' },
  { name: '992', code: '992' },
  { name: '993', code: '993' },
  { name: '994', code: '994' },
  { name: '995', code: '995' },
  { name: '996', code: '996' },
  { name: '997', code: '997' },
  { name: '998', code: '998' },
  { name: '999', code: '999' }
]

// Función para hacer la petición
const fetchDids = async () => {
  const stateCodes = selectedStates.value.map(s => s.code).join(',')
  const phoneCodes = selectedCodes.value.map(p => p.code).join(',')

  const params = { limit: 10 }

  if (stateCodes) params['filter[state]'] = stateCodes
  if (phoneCodes) params['filter[phone_code]'] = phoneCodes

  try {
    const response = await api.get('/did', { params })
    results.value = response.data.data

    if (results.value.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Sin resultados',
        text: 'No se encontraron DIDs con los filtros seleccionados.'
      })
    }
  } catch (err) {
    console.error('Error al obtener DIDs:', err)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error al obtener los DIDs. Intenta nuevamente.'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <CCard class="mb-4">
    <CCardHeader class="fw-bold fs-4">
      Buscar DIDS Disponibles
    </CCardHeader>
    <CCardBody>
      <div class="mt-1 mb-3">
        <span class="fst-italic fs-6 text-secondary">Busca los DIDS Disponibles ya sea por el Código Telefónico o por Estados de la República Mexicana.</span>
      </div>
      <div class="row g-5">
        <div class="col-md-6 col-lg-4">
          <label>Códigos Telefónicos</label>
          <Multiselect
            v-model="selectedCodes"
            :options="phoneCodeOptions"
            label="name"
            track-by="code"
            :multiple="true"
            placeholder="Selecciona códigos"
          />
        </div>
        <div class="col-md-6 col-lg-4">
          <label>Estados</label>
          <Multiselect
            v-model="selectedStates"
            :options="statesOptions"
            label="name"
            track-by="code"
            :multiple="true"
            placeholder="Selecciona estados"
          />
        </div>
        <div class="col-12 col-lg-4 align-self-end">
          <button class="btn btn-primary w-100" @click="fetchDids" :disabled="loading">
            <CSpinner v-if="loading" size="sm" /> Consultar
          </button>
        </div>
      </div>
    </CCardBody>
  </CCard>

  <CCard v-if="results.length">
    <CCardBody>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>DID</CTableHeaderCell>
            <CTableHeaderCell>Estado</CTableHeaderCell>
            <CTableHeaderCell>Ciudad</CTableHeaderCell>
            <CTableHeaderCell>Código</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow v-for="did in results" :key="did.id">
            <CTableDataCell>{{ did.did }}</CTableDataCell>
            <CTableDataCell>{{ did.state }}</CTableDataCell>
            <CTableDataCell>{{ did.city }}</CTableDataCell>
            <CTableDataCell>{{ did.phone_code }}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style> -->


<template>
  <div class="container mt-5">
    <h1 class="mb-4">Ping API</h1>
    <button @click="fetchPing" class="btn btn-primary mb-3">Hacer Ping</button>

    <div v-if="loading" class="text-info">Cargando...</div>
    <div v-if="error" class="text-danger">Error: {{ error }}</div>
    <div v-if="message" class="alert alert-success">
      <strong>Mensaje:</strong> {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const message = ref('')
const error = ref(null)
const loading = ref(false)

const fetchPing = async () => {
  loading.value = true
  error.value = null
  message.value = ''

  try {
    const baseURL = import.meta.env.VITE_API_BASE_URL
    const response = await axios.get(`${baseURL}/ping`)
    message.value = response.data.message // Aquí accedemos a la propiedad `message`
  } catch (err) {
    error.value = err.message || 'Error desconocido'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
