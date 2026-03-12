import { compressImage } from './image-utils.js';
import { policyServiceHTML, privacyPolicyHTML } from './policy-content.js';

const CONFIG = {
  webhookUrl: 'https://hook.eu2.make.com/snkxjnttf3bbr0bw476f41bk7w7dxvlr',
  minAge: 18,
  heightRange: { min: 120, max: 220 },
  weightRange: { min: 30, max: 250 }
};

const form = document.getElementById('patientForm');
const steps = Array.from(document.querySelectorAll('.step'));
const progressSteps = Array.from(document.querySelectorAll('.progress__step'));

const openInitialModalBtn = document.getElementById('openInitialModalBtn');
const continueFromInitialBtn = document.getElementById('continueFromInitialBtn');
const toSummaryBtn = document.getElementById('toSummaryBtn');
const backToStep1Btn = document.getElementById('backToStep1Btn');
const backToStep2Btn = document.getElementById('backToStep2Btn');
const submitBtn = document.getElementById('submitBtn');

const fullNameEl = document.getElementById('fullName');
const ageEl = document.getElementById('age');
const weightEl = document.getElementById('weightKg');
const heightEl = document.getElementById('heightCm');
const procedureEl = document.getElementById('procedure');

const initialInfoEl = document.getElementById('initialInfo');
const summaryListEl = document.getElementById('summaryList');
const imcResultEl = document.getElementById('imcResult');
const statusMessageEl = document.getElementById('statusMessage');
const step2ErrorEl = document.getElementById('step2Error');
const summaryErrorEl = document.getElementById('summaryError');
const initialModalErrorEl = document.getElementById('initialModalError');

const initialModal = document.getElementById('initialModal');
const ageModal = document.getElementById('ageModal');
const imcModal = document.getElementById('imcModal');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const continueFromImcBtn = document.getElementById('continueFromImcBtn');
const confirmImcReadingEl = document.getElementById('confirmImcReading');
const imcModalContentEl = document.getElementById('imcModalContent');
const imcModalErrorEl = document.getElementById('imcModalError');
const loaderOverlay = document.getElementById('loaderOverlay');
const loadingBarFill = document.getElementById('loadingBarFill');

const policyServiceModal = document.getElementById('policyServiceModal');
const policyServiceScroll = document.getElementById('policyServiceScroll');
const policyServiceText = document.getElementById('policyServiceText');
const policyServiceAcceptBtn = document.getElementById('policyServiceAcceptBtn');
const privacyPolicyModal = document.getElementById('privacyPolicyModal');
const privacyPolicyScroll = document.getElementById('privacyPolicyScroll');
const privacyPolicyText = document.getElementById('privacyPolicyText');
const privacyPolicyAcceptBtn = document.getElementById('privacyPolicyAcceptBtn');

const ageCheckModal = document.getElementById('ageCheckModal');
const ageCheckYesBtn = document.getElementById('ageCheckYesBtn');
const ageCheckNoBtn = document.getElementById('ageCheckNoBtn');
const ageCheckErrorEl = document.getElementById('ageCheckError');
const dobModal = document.getElementById('dobModal');
const dobContinueBtn = document.getElementById('dobContinueBtn');
const dobErrorEl = document.getElementById('dobError');
const calendarWidget = document.getElementById('calendarWidget');
const selectedDateDisplay = document.getElementById('selectedDateDisplay');

const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let calYear = new Date().getFullYear() - 25;
let calMonth = 0;
let selectedDob = null;

let ineFrenteFile = null;
let ineReversoFile = null;
const ineFrenteInput = document.getElementById('ineFrenteInput');
const ineReversoInput = document.getElementById('ineReversoInput');
const ineFrenteBtn = document.getElementById('ineFrenteBtn');
const ineReversoBtn = document.getElementById('ineReversoBtn');
const ineFrenteImg = document.getElementById('ineFrenteImg');
const ineReversoImg = document.getElementById('ineReversoImg');
const ineFrentePlaceholder = document.getElementById('ineFrentePlaceholder');
const ineReversoPlaceholder = document.getElementById('ineReversoPlaceholder');
const ineErrorEl = document.getElementById('ineError');
const backFromIneBtn = document.getElementById('backFromIneBtn');
const continueFromIneBtn = document.getElementById('continueFromIneBtn');
const iconIne1 = document.getElementById('iconIne1');
const iconIne2 = document.getElementById('iconIne2');
const iconIne3 = document.getElementById('iconIne3');

const icon1_1 = document.getElementById('icon1-1');
const icon1_2 = document.getElementById('icon1-2');
const icon1_3 = document.getElementById('icon1-3');
const icon2_1 = document.getElementById('icon2-1');
const icon2_2 = document.getElementById('icon2-2');
const icon2_3 = document.getElementById('icon2-3');
const icon3_1 = document.getElementById('icon3-1');
const icon3_2 = document.getElementById('icon3-2');
const icon3_3 = document.getElementById('icon3-3');

function setStep(stepNumber) {
  steps.forEach((step) => {
    step.classList.toggle('is-active', Number(step.dataset.step) === stepNumber);
  });

  progressSteps.forEach((dot) => {
    const dotStep = Number(dot.dataset.step);
    dot.classList.toggle('is-active', dotStep === stepNumber);
    dot.classList.toggle('is-done', dotStep < stepNumber);
  });

  const totalSteps = 4;
  const progressPercentage = (stepNumber / totalSteps) * 100;
  loadingBarFill.style.width = `${progressPercentage}%`;
}

function showModal(modalEl) {
  modalEl.classList.add('is-visible');
  modalEl.setAttribute('aria-hidden', 'false');
}

function hideModal(modalEl) {
  modalEl.classList.remove('is-visible');
  modalEl.setAttribute('aria-hidden', 'true');
}

function showLoader() {
  loaderOverlay.classList.add('is-visible');
  loaderOverlay.setAttribute('aria-hidden', 'false');
}

function hideLoader() {
  loaderOverlay.classList.remove('is-visible');
  loaderOverlay.setAttribute('aria-hidden', 'true');
}

function parseUrlToken() {
  const params = new URLSearchParams(window.location.search);
  return params.get('token') || '';
}

function updateStep1Icons() {
  const fullName = fullNameEl.value.trim();
  const age = Number(ageEl.value);

  if (fullName.length >= 3) {
    icon1_1.classList.add('is-filled');
  } else {
    icon1_1.classList.remove('is-filled');
  }

  if (!Number.isNaN(age) && age >= CONFIG.minAge) {
    icon1_2.classList.add('is-filled');
  } else {
    icon1_2.classList.remove('is-filled');
  }

  if (fullName.length >= 3 && !Number.isNaN(age) && age >= CONFIG.minAge) {
    icon1_3.classList.add('is-filled');
  } else {
    icon1_3.classList.remove('is-filled');
  }
}

function updateStep2Icons() {
  const weightKg = Number(weightEl.value);
  const heightCm = Number(heightEl.value);
  const procedure = procedureEl.value.trim();

  if (weightKg >= CONFIG.weightRange.min && weightKg <= CONFIG.weightRange.max) {
    icon2_1.classList.add('is-filled');
  } else {
    icon2_1.classList.remove('is-filled');
  }

  if (heightCm >= CONFIG.heightRange.min && heightCm <= CONFIG.heightRange.max) {
    icon2_2.classList.add('is-filled');
  } else {
    icon2_2.classList.remove('is-filled');
  }

  if (procedure) {
    icon2_3.classList.add('is-filled');
  } else {
    icon2_3.classList.remove('is-filled');
  }
}

function getImcClassification(imc) {
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidad';
}

function getImcInfo(imc) {
  const intro = `<p><strong>El Índice de Masa Corporal (IMC)</strong> es una medida simple que relaciona el peso y la talla, calculada como el peso en kilogramos dividido por el cuadrado de la estatura en metros (kg/m²), que la Organización Mundial de la Salud (OMS) usa para clasificar a los adultos en categorías de peso, siendo un IMC mayor a 25 sobrepeso, mayor a 30 obesidad moderada y cuando resulta superior a 35 obesidad severa. Los anteriores parámetros ayudan a evaluar la posibilidad de realizar la cirugía estética y evaluar riesgos de salud como enfermedades crónicas y la posibilidad de riesgos graves durante la cirugía.</p>`;

  if (imc < 18.5) {
    return {
      suitable: false,
      content: intro + `
        <div class="imc-value">Tu IMC: ${imc}</div>
        <p class="imc-status not-suitable">EN ESTE MOMENTO NO ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) es <strong>BAJO</strong>, o muestra peso insuficiente ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define como cualquier valor inferior a 18.5 kg/m². Este rango indica que la persona está por debajo de un peso saludable, lo que podría implicar riesgos de desnutrición o deficiencia de nutrientes.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal y poder solicitar una nueva valoración para tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `
    };
  } else if (imc >= 18.5 && imc < 25) {
    return {
      suitable: true,
      content: intro + `
        <div class="imc-value">Tu IMC: ${imc}</div>
        <p class="imc-status suitable">HOY USTED ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) se encuentra en estado <strong>ÓPTIMO</strong>. Su peso muestra condiciones favorables para la intervención quirúrgica que usted desea realizarse ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define como cualquier valor entre 18.5–24.9 como un peso normal. Este rango indica que la persona está en un rango de peso saludable.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal antes de tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas o aumentas de peso se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `
    };
  } else if (imc >= 25 && imc < 35) {
    return {
      suitable: true,
      content: intro + `
        <div class="imc-value">Tu IMC: ${imc}</div>
        <p class="imc-status suitable">HOY USTED ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) se encuentra en estado de <strong>OBESIDAD MODERADA CLASE I</strong>. Sin embargo, muestra condiciones que SÍ permiten realizar la intervención quirúrgica que usted desea realizarse ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define la obesidad moderada clase I como cualquier valor IMC mayor a 30. Este rango indica que la persona aunque revela obesidad se encuentra saludable, sin embargo, se deberán tomar las acciones necesarias para disminuir los riesgos en tu intervención quirúrgica.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal antes de tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas o aumentas de peso se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `
    };
  } else {
    return {
      suitable: false,
      content: intro + `
        <div class="imc-value">Tu IMC: ${imc}</div>
        <p class="imc-status not-suitable">HOY USTED NO ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) se encuentra en estado de <strong>OBESIDAD SEVERA</strong>. La OMS clasifica la obesidad severa (o grado II) en adultos con un Índice de Masa Corporal (IMC) de 35.0 a 39.9 kg/m². Su peso muestra condiciones que NO permiten realizar la intervención quirúrgica que usted desea realizarse ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define la obesidad severa como cualquier valor IMC mayor a 35.</p>
        <p>Este rango indica que la persona se encuentra en una categoría en la que presenta <strong>riesgos altos a la salud</strong>, predisposición a enfermedades crónicas y enfermedades cardiovasculares, por lo que la operación que usted desea pone en riesgo su vida.</p>
        <p><strong>Recuerda:</strong> Si tu resultado de Índice de Masa Corporal es mayor a 35, refleja obesidad severa y de acuerdo a las políticas de prestación del servicio y a los parámetros de la Organización Mundial de la Salud aún no estás en condiciones óptimas para la operación que deseas ya que se pondría en riesgo grave tu salud y nos preocupamos por tu bienestar.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal y poder solicitar una nueva valoración para tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas o aumentas de peso se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `
    };
  }
}

function renderCalendar() {
  const monthOptions = MONTHS_ES.map((m, i) =>
    `<option value="${i}"${i === calMonth ? ' selected' : ''}>${m}</option>`
  ).join('');

  const currentYear = new Date().getFullYear();
  let yearOptions = '';
  for (let y = currentYear; y >= currentYear - 100; y--) {
    yearOptions += `<option value="${y}"${y === calYear ? ' selected' : ''}>${y}</option>`;
  }

  const firstDay = new Date(calYear, calMonth, 1);
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  let startDay = firstDay.getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let daysHtml = '';
  for (let i = 0; i < startDay; i++) {
    daysHtml += '<span class="calendar__day calendar__day--empty"></span>';
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const thisDate = new Date(calYear, calMonth, d);
    const isDisabled = thisDate > today;
    const isSelected = selectedDob &&
      selectedDob.getFullYear() === calYear &&
      selectedDob.getMonth() === calMonth &&
      selectedDob.getDate() === d;
    const classes = ['calendar__day'];
    if (isDisabled) classes.push('calendar__day--disabled');
    if (isSelected) classes.push('calendar__day--selected');
    daysHtml += `<button type="button" class="${classes.join(' ')}" data-day="${d}"${isDisabled ? ' disabled' : ''}>${d}</button>`;
  }

  calendarWidget.innerHTML = `
    <div class="calendar__header">
      <select class="calendar__select" id="calMonthSelect">${monthOptions}</select>
      <select class="calendar__select" id="calYearSelect">${yearOptions}</select>
    </div>
    <div class="calendar__weekdays">
      <span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sa</span><span>Do</span>
    </div>
    <div class="calendar__grid">${daysHtml}</div>
  `;

  document.getElementById('calMonthSelect').addEventListener('change', (e) => {
    calMonth = parseInt(e.target.value);
    renderCalendar();
  });
  document.getElementById('calYearSelect').addEventListener('change', (e) => {
    calYear = parseInt(e.target.value);
    renderCalendar();
  });

  calendarWidget.querySelectorAll('.calendar__day:not(.calendar__day--empty):not(.calendar__day--disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDob = new Date(calYear, calMonth, parseInt(btn.dataset.day));
      renderCalendar();
      const day = selectedDob.getDate();
      const month = MONTHS_ES[selectedDob.getMonth()];
      const year = selectedDob.getFullYear();
      selectedDateDisplay.textContent = `${day} de ${month} de ${year}`;
    });
  });
}

function calculateAgeFromDob(dob) {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

function validateInitialQuestionnaire() {
  const fullName = fullNameEl.value.trim();
  const age = Number(ageEl.value);

  if (fullName.length < 3) {
    throw new Error('Ingresa un nombre completo válido.');
  }

  if (Number.isNaN(age) || age < 0) {
    throw new Error('Ingresa una edad válida.');
  }

  if (age < CONFIG.minAge) {
    showModal(ageModal);
    throw new Error('Edad no permitida para este formulario.');
  }

  return { fullName, age };
}

function validateStep2() {
  const heightCm = Number(heightEl.value);
  const weightKg = Number(weightEl.value);
  const procedure = procedureEl.value.trim();

  if (heightCm < CONFIG.heightRange.min || heightCm > CONFIG.heightRange.max) {
    throw new Error(`La estatura debe estar entre ${CONFIG.heightRange.min} y ${CONFIG.heightRange.max} cm.`);
  }

  if (weightKg < CONFIG.weightRange.min || weightKg > CONFIG.weightRange.max) {
    throw new Error(`El peso debe estar entre ${CONFIG.weightRange.min} y ${CONFIG.weightRange.max} kg.`);
  }

  if (!procedure) {
    throw new Error('Selecciona el procedimiento estético quirúrgico que desea.');
  }

  return { heightCm, weightKg, procedure };
}

function fillSummary() {
  const { fullName, age } = validateInitialQuestionnaire();
  const { heightCm, weightKg, procedure } = validateStep2();

  const heightM = heightCm / 100;
  const imc = weightKg / (heightM * heightM);
  const roundedImc = Number(imc.toFixed(2));
  const classification = getImcClassification(roundedImc);

  summaryListEl.innerHTML = `
    <li><strong>Nombre completo:</strong> ${fullName}</li>
    <li><strong>Edad:</strong> ${age} años</li>
    <li><strong>INE Frente:</strong> ${ineFrenteFile ? 'Adjunta' : 'No adjunta'}</li>
    <li><strong>INE Reverso:</strong> ${ineReversoFile ? 'Adjunta' : 'No adjunta'}</li>
    <li><strong>Peso:</strong> ${weightKg} kg</li>
    <li><strong>Estatura:</strong> ${heightCm} cm</li>
    <li><strong>Procedimiento deseado:</strong> ${procedure}</li>
  `;

  imcResultEl.textContent = `IMC calculado: ${roundedImc} (${classification}).`;

  return { fullName, age, heightCm, weightKg, procedure, roundedImc, classification };
}

async function sendPayload(formData) {
  if (CONFIG.webhookUrl.includes('TU_WEBHOOK_AQUI')) {
    const entries = {};
    for (const [key, value] of formData.entries()) {
      entries[key] = value instanceof Blob ? `[Archivo: ${(value.size / 1024).toFixed(1)} KB]` : value;
    }
    console.log('Modo de prueba - Datos del formulario:', entries);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return;
  }

  const response = await fetch(CONFIG.webhookUrl, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    throw new Error('No se pudo enviar la información. Intenta de nuevo.');
  }
}

openInitialModalBtn.addEventListener('click', () => showModal(initialModal));

ageCheckYesBtn.addEventListener('click', () => {
  ageCheckErrorEl.textContent = '';
  hideModal(ageCheckModal);
  renderCalendar();
  showModal(dobModal);
});

ageCheckNoBtn.addEventListener('click', () => {
  ageCheckErrorEl.textContent = 'Este servicio es exclusivamente para personas mayores de edad (18 años o más).';
  ageCheckYesBtn.disabled = true;
  ageCheckYesBtn.style.opacity = '0.4';
  ageCheckYesBtn.style.pointerEvents = 'none';
});

dobContinueBtn.addEventListener('click', () => {
  dobErrorEl.textContent = '';
  if (!selectedDob) {
    dobErrorEl.textContent = 'Selecciona tu fecha de nacimiento.';
    return;
  }
  const age = calculateAgeFromDob(selectedDob);
  if (age < CONFIG.minAge) {
    dobErrorEl.textContent = 'De acuerdo a tu fecha de nacimiento, no cumples con la edad mínima requerida (18 años).';
    return;
  }
  ageEl.value = age;
  updateStep1Icons();
  hideModal(dobModal);
  showModal(initialModal);
});

function updateIneCheckIcon() {
  if (ineFrenteFile && ineReversoFile) {
    iconIne3.classList.add('is-filled');
  } else {
    iconIne3.classList.remove('is-filled');
  }
}

ineFrenteBtn.addEventListener('click', () => {
  ineFrenteInput.value = '';
  ineFrenteInput.click();
});

ineReversoBtn.addEventListener('click', () => {
  ineReversoInput.value = '';
  ineReversoInput.click();
});

ineFrenteInput.addEventListener('change', async () => {
  const file = ineFrenteInput.files[0];
  if (!file) return;
  ineErrorEl.textContent = '';
  try {
    ineFrenteFile = await compressImage(file);
    ineFrenteImg.src = URL.createObjectURL(ineFrenteFile);
    ineFrenteImg.style.display = 'block';
    ineFrentePlaceholder.style.display = 'none';
    ineFrenteBtn.textContent = 'Volver a tomar';
    iconIne1.classList.add('is-filled');
    updateIneCheckIcon();
  } catch (err) {
    ineErrorEl.textContent = err.message;
  }
});

ineReversoInput.addEventListener('change', async () => {
  const file = ineReversoInput.files[0];
  if (!file) return;
  ineErrorEl.textContent = '';
  try {
    ineReversoFile = await compressImage(file);
    ineReversoImg.src = URL.createObjectURL(ineReversoFile);
    ineReversoImg.style.display = 'block';
    ineReversoPlaceholder.style.display = 'none';
    ineReversoBtn.textContent = 'Volver a tomar';
    iconIne2.classList.add('is-filled');
    updateIneCheckIcon();
  } catch (err) {
    ineErrorEl.textContent = err.message;
  }
});

backFromIneBtn.addEventListener('click', () => setStep(1));

continueFromIneBtn.addEventListener('click', () => {
  ineErrorEl.textContent = '';
  if (!ineFrenteFile) {
    ineErrorEl.textContent = 'Debes capturar la foto del frente de tu INE.';
    return;
  }
  if (!ineReversoFile) {
    ineErrorEl.textContent = 'Debes capturar la foto del reverso de tu INE.';
    return;
  }
  setStep(3);
});

fullNameEl.addEventListener('input', updateStep1Icons);
ageEl.addEventListener('input', updateStep1Icons);

weightEl.addEventListener('input', updateStep2Icons);
heightEl.addEventListener('input', updateStep2Icons);
procedureEl.addEventListener('change', updateStep2Icons);

continueFromInitialBtn.addEventListener('click', () => {
  initialModalErrorEl.textContent = '';

  try {
    const { fullName, age } = validateInitialQuestionnaire();
    hideModal(initialModal);
    initialInfoEl.textContent = `✅ ${fullName}, ${age} años. Puedes continuar al siguiente paso.`;
    initialInfoEl.className = 'status-message success';
    updateStep1Icons();
    setStep(2);
  } catch (error) {
    if (error.message !== 'Edad no permitida para este formulario.') {
      initialModalErrorEl.textContent = error.message;
    }
  }
});

policyServiceText.innerHTML = policyServiceHTML;
privacyPolicyText.innerHTML = privacyPolicyHTML;

function checkScrolledToBottom(scrollEl) {
  return scrollEl.scrollHeight - scrollEl.scrollTop <= scrollEl.clientHeight + 30;
}

policyServiceScroll.addEventListener('scroll', () => {
  if (checkScrolledToBottom(policyServiceScroll)) {
    policyServiceAcceptBtn.disabled = false;
  }
});

privacyPolicyScroll.addEventListener('scroll', () => {
  if (checkScrolledToBottom(privacyPolicyScroll)) {
    privacyPolicyAcceptBtn.disabled = false;
  }
});

policyServiceAcceptBtn.addEventListener('click', () => {
  hideModal(policyServiceModal);
  privacyPolicyScroll.scrollTop = 0;
  privacyPolicyAcceptBtn.disabled = true;
  showModal(privacyPolicyModal);
});

privacyPolicyAcceptBtn.addEventListener('click', () => {
  hideModal(privacyPolicyModal);
  showModal(imcModal);
});

toSummaryBtn.addEventListener('click', () => {
  step2ErrorEl.textContent = '';
  summaryErrorEl.textContent = '';
  statusMessageEl.textContent = '';
  statusMessageEl.className = 'status-message';
  imcModalErrorEl.textContent = '';
  confirmImcReadingEl.checked = false;

  try {
    const { heightCm, weightKg } = validateStep2();
    const heightM = heightCm / 100;
    const imc = weightKg / (heightM * heightM);
    const roundedImc = Number(imc.toFixed(2));

    const imcInfo = getImcInfo(roundedImc);
    imcModalContentEl.innerHTML = imcInfo.content;

    updateStep2Icons();
    policyServiceScroll.scrollTop = 0;
    policyServiceAcceptBtn.disabled = true;
    showModal(policyServiceModal);
  } catch (error) {
    step2ErrorEl.textContent = error.message;
  }
});

backToStep1Btn.addEventListener('click', () => setStep(2));
backToStep2Btn.addEventListener('click', () => setStep(3));

closeModalBtn.addEventListener('click', () => hideModal(ageModal));
ageModal.addEventListener('click', (event) => {
  if (event.target === ageModal) hideModal(ageModal);
});

successModal.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
});

continueFromImcBtn.addEventListener('click', () => {
  imcModalErrorEl.textContent = '';

  try {
    if (!confirmImcReadingEl.checked) {
      throw new Error('Debes confirmar que has leído y comprendido la información sobre tu IMC.');
    }

    fillSummary();
    hideModal(imcModal);
    icon3_1.classList.add('is-filled');
    icon3_2.classList.add('is-filled');
    icon3_3.classList.add('is-filled');
    setStep(4);
  } catch (error) {
    imcModalErrorEl.textContent = error.message;
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  step2ErrorEl.textContent = '';
  summaryErrorEl.textContent = '';
  statusMessageEl.textContent = '';
  statusMessageEl.className = 'status-message';

  try {
    const { fullName, age, heightCm, weightKg, procedure, roundedImc, classification } = fillSummary();

    const imcInfo = getImcInfo(roundedImc);

    const formData = new FormData();
    formData.append('nombre', fullName);
    formData.append('edad', age);
    formData.append('ine_frente', ineFrenteFile, 'ine_frente.jpg');
    formData.append('ine_reverso', ineReversoFile, 'ine_reverso.jpg');
    formData.append('estatura_cm', heightCm);
    formData.append('peso_kg', weightKg);
    formData.append('procedimiento', procedure);
    formData.append('imc', roundedImc);
    formData.append('clasificacion_imc', classification);
    formData.append('apta_para_cirugia', imcInfo.suitable);
    formData.append('confirmo_lectura_imc', confirmImcReadingEl.checked);
    formData.append('fecha_nacimiento', selectedDob ? selectedDob.toISOString().split('T')[0] : '');
    formData.append('token', parseUrlToken());
    formData.append('timestamp', new Date().toISOString());

    showLoader();
    submitBtn.disabled = true;
    await sendPayload(formData);
    hideLoader();

    form.style.pointerEvents = 'none';
    form.style.opacity = '0.6';

    backToStep1Btn.disabled = true;
    backToStep2Btn.disabled = true;
    toSummaryBtn.disabled = true;
    submitBtn.disabled = true;

    showModal(successModal);
    successModal.style.pointerEvents = 'auto';
  } catch (error) {
    summaryErrorEl.textContent = error.message;
    statusMessageEl.className = 'status-message error';
    hideLoader();
    submitBtn.disabled = false;
  }
});

setStep(1);
updateStep1Icons();
updateStep2Icons();
