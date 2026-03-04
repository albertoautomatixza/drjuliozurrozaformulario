const CONFIG = {
  webhookUrl: 'https://hook.make.com/TU_WEBHOOK_AQUI',
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

  const totalSteps = 3;
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
    <li><strong>Peso:</strong> ${weightKg} kg</li>
    <li><strong>Estatura:</strong> ${heightCm} cm</li>
    <li><strong>Procedimiento deseado:</strong> ${procedure}</li>
  `;

  imcResultEl.textContent = `IMC calculado: ${roundedImc} (${classification}).`;

  return { fullName, age, heightCm, weightKg, procedure, roundedImc, classification };
}

async function sendPayload(payload) {
  if (CONFIG.webhookUrl.includes('TU_WEBHOOK_AQUI')) {
    console.log('Modo de prueba - Datos del formulario:', payload);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return;
  }

  const response = await fetch(CONFIG.webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('No se pudo enviar la información. Intenta de nuevo.');
  }
}

openInitialModalBtn.addEventListener('click', () => showModal(initialModal));

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
    showModal(imcModal);
  } catch (error) {
    step2ErrorEl.textContent = error.message;
  }
});

backToStep1Btn.addEventListener('click', () => setStep(1));
backToStep2Btn.addEventListener('click', () => setStep(2));

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
    setStep(3);
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

    const payload = {
      nombre: fullName,
      edad: age,
      estatura_cm: heightCm,
      peso_kg: weightKg,
      procedimiento: procedure,
      imc: roundedImc,
      clasificacion_imc: classification,
      apta_para_cirugia: imcInfo.suitable,
      confirmo_lectura_imc: confirmImcReadingEl.checked,
      token: parseUrlToken(),
      timestamp: new Date().toISOString()
    };

    showLoader();
    submitBtn.disabled = true;
    await sendPayload(payload);
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
