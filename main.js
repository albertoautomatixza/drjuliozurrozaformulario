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
const resetBtn = document.getElementById('resetBtn');
const submitBtn = document.getElementById('submitBtn');

const fullNameEl = document.getElementById('fullName');
const ageEl = document.getElementById('age');
const weightEl = document.getElementById('weightKg');
const heightEl = document.getElementById('heightCm');
const procedureEl = document.getElementById('procedure');
const confirmDataEl = document.getElementById('confirmData');

const initialInfoEl = document.getElementById('initialInfo');
const summaryListEl = document.getElementById('summaryList');
const imcResultEl = document.getElementById('imcResult');
const statusMessageEl = document.getElementById('statusMessage');
const step2ErrorEl = document.getElementById('step2Error');
const summaryErrorEl = document.getElementById('summaryError');
const initialModalErrorEl = document.getElementById('initialModalError');

const initialModal = document.getElementById('initialModal');
const ageModal = document.getElementById('ageModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const loaderOverlay = document.getElementById('loaderOverlay');
const loadingBarFill = document.getElementById('loadingBarFill');

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

function getImcClassification(imc) {
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidad';
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

continueFromInitialBtn.addEventListener('click', () => {
  initialModalErrorEl.textContent = '';

  try {
    const { fullName, age } = validateInitialQuestionnaire();
    hideModal(initialModal);
    initialInfoEl.textContent = `✅ ${fullName}, ${age} años. Puedes continuar al siguiente paso.`;
    initialInfoEl.className = 'status-message success';
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

  try {
    fillSummary();
    setStep(3);
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

resetBtn.addEventListener('click', () => {
  form.reset();
  summaryListEl.innerHTML = '';
  imcResultEl.textContent = '';
  initialInfoEl.textContent = '';
  initialInfoEl.className = 'status-message';
  step2ErrorEl.textContent = '';
  summaryErrorEl.textContent = '';
  initialModalErrorEl.textContent = '';
  statusMessageEl.textContent = '';
  statusMessageEl.className = 'status-message';
  setStep(1);
  showModal(initialModal);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  step2ErrorEl.textContent = '';
  summaryErrorEl.textContent = '';
  statusMessageEl.textContent = '';
  statusMessageEl.className = 'status-message';

  try {
    if (!confirmDataEl.checked) {
      throw new Error('Debes confirmar que la información es correcta para enviar.');
    }

    const { fullName, age, heightCm, weightKg, procedure, roundedImc, classification } = fillSummary();

    const payload = {
      nombre: fullName,
      edad: age,
      estatura_cm: heightCm,
      peso_kg: weightKg,
      procedimiento: procedure,
      imc: roundedImc,
      clasificacion_imc: classification,
      confirmo_datos: confirmDataEl.checked,
      token: parseUrlToken(),
      timestamp: new Date().toISOString()
    };

    showLoader();
    submitBtn.disabled = true;
    await sendPayload(payload);
    statusMessageEl.textContent = '✅ Registro enviado correctamente. Nos pondremos en contacto pronto.';
    statusMessageEl.className = 'status-message success';
  } catch (error) {
    summaryErrorEl.textContent = error.message;
    statusMessageEl.className = 'status-message error';
  } finally {
    hideLoader();
    submitBtn.disabled = false;
  }
});

setStep(1);
