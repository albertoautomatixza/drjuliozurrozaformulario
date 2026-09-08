(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const x=1200,De=.75;function ue(e){return new Promise((a,t)=>{const n=new FileReader;n.onload=i=>{const s=new Image;s.onload=()=>{const l=document.createElement("canvas");let{width:d,height:o}=s;d>x&&(o=Math.round(o*x/d),d=x),l.width=d,l.height=o,l.getContext("2d").drawImage(s,0,0,d,o),l.toBlob(g=>{g?a(g):t(new Error("Error al comprimir la imagen."))},"image/jpeg",De)},s.onerror=()=>t(new Error("Error al procesar la imagen.")),s.src=i.target.result},n.onerror=()=>t(new Error("Error al leer el archivo.")),n.readAsDataURL(e)})}const qe=`
<p>De conformidad con la Ley General de Salud, su Reglamento en Materia de Prestación de servicios de Atención Médica y la Norma Oficial Mexicana NOM-004-SSA3-2012, el equipo del médico cirujano especialista en cirugía plástica y reconstructiva, Julio César Zurroza Estrada, establece las siguientes políticas para regular la atención médica y quirúrgica en su consultorio privado y en los hospitales donde presta servicios.</p>

<h4>1. Objeto</h4>
<p>Estas políticas regulan las condiciones para la prestación de servicios médicos en cirugía plástica, reconstructiva y estética, incluyendo consultas, procedimientos quirúrgicos y no quirúrgicos, garantizando la seguridad del paciente y el cumplimiento normativo.</p>
<p>Los procedimientos pueden ser, enunciativa más no limitativamente, quirúrgicos como rinoplastia, aumento mamario con implantes, abdominoplastia, abdominoplastia con liposucción y lipo transferencia a glúteo y cadera, liposucción y lipo transferencia a glúteo y cadera, blefaroplastia superior e inferior, ribxcar, otoplastia, lifting cervical, mommy makeover, etc., o no quirúrgicos, como aplicación de bótox, consultas médicas de valoración, rellenos de ácido hialurónico, radiofrecuencia, etc.</p>

<h4>2. Alcance</h4>
<p>Aplica a todos los pacientes que soliciten servicios en el consultorio privado del Dr. Julio César Zurroza Estrada o en los hospitales, clínicas o centros médicos donde preste servicios.</p>

<h4>3. Requisitos para la prestación del servicio</h4>
<p>Los pacientes deberán:</p>
<ul>
  <li>Someterse a una evaluación médica inicial, así como a las interconsultas solicitadas por el Dr. Julio César Zurroza Estrada, para determinar la existencia de factores de riesgo y su idoneidad para el procedimiento solicitado, conforme a la NOM-004-SSA3-2012 (numerales 4.2 y 4.6).</li>
  <li>Proporcionar información veraz y completa sobre su historial médico, estudios preoperatorios, y antecedentes de salud, incluyendo uso de medicamentos, drogas ilícitas, alcohol o tabaco.</li>
  <li>Realizar los estudios preoperatorios indicados por el Dr. Julio César Zurroza Estrada o los que sean solicitados por los médicos que atiendan las interconsultas, tales como biometría hemática, química sanguínea, pruebas de coagulación, toxicología, entre otros, en los laboratorios o centros indicados por el médico tratante para garantizar su autenticidad.</li>
  <li>Firmar una carta de consentimiento informado antes de cualquier procedimiento quirúrgico, conforme a la NOM-004-SSA3-2012 (numeral 10.1), aceptando los riesgos, beneficios, alternativas y pronósticos reales esperados y explicados.</li>
  <li>Cubrir los honorarios médicos y gastos de hospitalización por adelantado para procedimientos quirúrgicos, según lo acordado.</li>
  <li>Acudir puntualmente a las citas de valoración, cirugía y seguimiento, así como atender con precisión las indicaciones pre y post operatorias que se describen:
    <br><br><strong>Preoperatorias</strong>, como acudir a la cita de valoración, interconsultas, abstenerse en el consumo de alcohol, tabaco y drogas ilícitas con por lo menos 8 semanas de anticipación a la fecha de su cirugía, seguir la dieta indicada, entre otras.
    <br><br><strong>Postoperatorias</strong>, como seguir los cuidados indicados por el médico, tomar los medicamentos recetados, abstenerse en el consumo de alcohol, tabaco y drogas ilícitas por lo menos durante las 8 semanas posteriores a la cirugía, utilizar la faja o aditamentos que sean señalados, realizarse los masajes que se indiquen y presentarse puntualmente a sus citas de seguimiento.</li>
</ul>

<h4>4. Causas para negar la prestación del servicio</h4>
<p>El Dr. Julio César Zurroza Estrada y su equipo, podrán negar la atención médica para procedimientos quirúrgicos, con base en su libertad prescriptiva (NOM-004-SSA3-2012, numeral 10.1.1.7) y la Ley General de Salud, en los siguientes casos de existencia de factores de riesgo o falta de idoneidad para el procedimiento solicitado:</p>
<ul>
  <li>Obesidad severa, definida como un índice de masa corporal (IMC) superior a 35, determinado mediante evaluación médica, debido a los riesgos asociados al procedimiento quirúrgico.</li>
  <li>Consumo de drogas ilícitas, alcohol o tabaco dentro de las 8 semanas previas o posteriores al procedimiento quirúrgico, verificado mediante evaluación clínica o pruebas toxicológicas.</li>
  <li>Condiciones médicas preexistentes como diabetes, enfermedades cardíacas, hipertensión, entre otras.</li>
  <li>Condiciones psicológicas o psiquiátricas que contraindiquen la cirugía, como trastorno de dismorfia corporal, depresión severa, ansiedad grave o trastornos psicóticos, determinadas mediante cuestionario o entrevista clínica realizada por un profesional de la salud mental.</li>
  <li>Expectativas irreales sobre los resultados del procedimiento, evaluadas durante la consulta inicial, donde se explicarán los alcances y pronósticos reales del tratamiento.</li>
  <li>Falta de veracidad en la información proporcionada sobre historial médico o estudios preoperatorios, verificada mediante revisión cruzada en los laboratorios o centros autorizados por el Dr. Julio César Zurroza Estrada.</li>
  <li>Procedimientos quirúrgicos relacionados con reasignación de género o que impliquen complejidades derivadas de cambios hormonales o anatómicos previos que impliquen riesgos médicos elevados debido a condiciones preexistentes incompatibles con la cirugía plástica o reconstructiva, según evaluación médica previa.</li>
  <li>Incumplimiento de las indicaciones preoperatorias, como consumo de sustancias prohibidas o no seguir protocolos médicos.</li>
  <li>Negativa parcial o total a practicarse estudios preoperatorios, participar en las interconsultas o proporcionar información médica.</li>
  <li>Impuntualidad o falta de asistencia a las citas médicas, interconsultas o aplicación de técnicas terapéuticas indicadas.</li>
  <li>Falta de pago de los honorarios médicos o gastos de hospitalización por adelantado, según lo acordado.</li>
</ul>
<p>La negativa o inconformidad con una o varias de las políticas aquí descritas, deberá ser informada por el paciente de manera escrita, en ese caso el Dr. Julio César Zurroza Estrada no podrá prestar el servicio o atención solicitados.</p>
<p>En caso de notoria urgencia que ponga en peligro la vida o la integridad física del paciente, el Dr. Julio César Zurroza Estrada proporcionará atención médica inmediata, conforme al Artículo 255 del Reglamento de la Ley General de Salud en Materia de Prestación de Servicios de Atención Médica, independientemente de las restricciones establecidas en este numeral, salvo que la situación comprometa la seguridad del procedimiento.</p>

<h4>5. Interrupción del servicio</h4>
<p>El Dr. Julio César Zurroza Estrada podrá interrumpir la prestación del servicio, conforme a la NOM-004-SSA3-2012 y la Ley General de Salud, en los siguientes casos:</p>
<ul>
  <li>Complicaciones intraoperatorias o emergencias médicas que requieran priorizar la vida o la salud del paciente.</li>
  <li>Deterioro imprevisto del estado de salud del paciente durante el procedimiento, que haga inviable continuar con la cirugía.</li>
  <li>Incumplimiento de las indicaciones preoperatorias, como consumo de alcohol, tabaco o drogas ilícitas dentro de las 8 semanas anteriores al procedimiento, que comprometan la seguridad y resultado del mismo.</li>
  <li>Incumplimiento de las indicaciones postoperatorias, como consumo de alcohol, tabaco o drogas ilícitas dentro de las 8 semanas posteriores al procedimiento, que comprometan la recuperación y resultados.</li>
  <li>Detección de falsedad en la información proporcionada por el usuario.</li>
  <li>Comportamiento del paciente que represente un riesgo para el personal médico, otros pacientes o la seguridad del procedimiento.</li>
  <li>Falta de pago de honorarios médicos o gastos de hospitalización adicionales acordados durante el tratamiento, sin que ello implique la retención de pacientes por el Dr. Julio César Zurroza Estrada en los centros médicos en que se encuentren.</li>
</ul>

<h4>6. Proceso de evaluación y notificación</h4>
<p>La idoneidad del paciente será evaluada mediante consulta médica inicial, interconsultas, estudios preoperatorios y, en su caso, evaluación psicológica mediante cuestionario o entrevista clínica. La negativa o interrupción del servicio será notificada verbalmente al paciente, respaldada por la aceptación de estas políticas como contrato de adhesión, y documentada en el expediente clínico (NOM-004-SSA3-2012, numeral 4.4 y 6).</p>

<h4>7. Obligaciones del paciente</h4>
<p>Cumplir con las indicaciones pre y postoperatorias proporcionadas.</p>
<p>Realizar los estudios preoperatorios en los laboratorios o centros indicados por los médicos.</p>
<p>Proporcionar información veraz y completa sobre su historial médico y antecedentes.</p>
<p>Pagar los honorarios médicos y gastos de hospitalización por adelantado para procedimientos quirúrgicos.</p>
<p>Asistir a las citas de seguimiento programadas para garantizar una recuperación adecuada.</p>
<p>Aceptar que no habrá reembolsos por inconformidad con los resultados, ya que los beneficios, riesgos y pronósticos fueron explicados y aceptados en la consulta inicial y el consentimiento informado.</p>

<h4>8. Obligaciones del médico</h4>
<p>Prestar los servicios con profesionalismo, conforme a la NOM-004-SSA3-2012 y la Ley General de Salud y su Reglamento en materia de prestación de servicios de atención médica.</p>
<p>Informar al paciente sobre los riesgos, beneficios y expectativas reales de cada procedimiento mediante consentimiento informado (NOM-004-SSA3-2012, numeral 10.1).</p>
<p>Resguardar la confidencialidad de los datos personales y el expediente clínico, conforme a la LFPDPPP (artículo 19) y la NOM-004-SSA3-2012 (numeral 5.7), para lo cual pone a disposición de los usuarios el Aviso y Políticas de Privacidad.</p>

<h4>9. Cancelación de citas o procedimientos</h4>
<p>Las citas o procedimientos cancelados con menos de 24 horas de aviso podrán resultar en la suspensión temporal o definitiva del servicio, a discreción del Dr. Julio César Zurroza Estrada.</p>

<h4>10. No reembolsos</h4>
<p>No se realizarán reembolsos por inconformidad con los resultados del procedimiento, ya que los pronósticos reales fueron explicados y aceptados por el paciente en la consulta inicial y el consentimiento informado, en el contexto de que la medicina no es una ciencia exacta y por ello los resultados y satisfacción del paciente frente a sus expectativas no pueden garantizarse.</p>

<h4>11. Excepciones</h4>
<p>El Dr. Julio César Zurroza Estrada podrá evaluar excepciones a las restricciones mencionadas en el numeral 4, siempre que no comprometan la seguridad del paciente ni contravengan criterios médicos objetivos, conforme a la Ley General de Salud y la NOM-004-SSA3-2012.</p>

<h4>12. Cambios a las políticas</h4>
<p>Nos reservamos el derecho de modificar estas políticas para cumplir con cambios normativos o en nuestras prácticas. Las modificaciones se notificarán a través de los canales oficiales de comunicación del Dr. Julio César Zurroza Estrada o por comunicación directa en consulta.</p>

<h4>13. Contacto</h4>
<p>Para dudas, quejas o aclaraciones, contáctenos en el correo electrónico Zurrozaestradajulio@hotmail.com, así como al número telefónico 449-586-32-91 o WhatsApp correspondiente al mismo número telefónico.</p>
`,Be=`
<h4 style="text-align:center;font-size:1.1rem;">AVISO DE PRIVACIDAD</h4>
<p>De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), la Norma Oficial Mexicana NOM-004-SSA3-2012, la Ley General de Salud, sus reglamentos y la Ley de Salud del Estado de Aguascalientes, se informa lo siguiente:</p>

<h4>1. Identidad y domicilio del responsable</h4>
<p>Julio César Zurroza Estrada, médico cirujano especialista en cirugía plástica y reconstructiva, con cédulas profesionales 5255099 y 9960819, con domicilio en el Hospital MAC norte, piso 4, consultorio 408, Aguascalientes, Aguascalientes, es el responsable del tratamiento de sus datos personales.</p>

<h4>2. Datos personales que se recaban</h4>
<p>Recopilamos los siguientes datos personales (artículo 3, fracción VI, LFPDPPP; 4.4, NOM-004-SSA3-2012):</p>
<p><strong>Datos de identificación:</strong> Nombre completo, edad, sexo, estado civil, ocupación, dirección, teléfono, correo electrónico.</p>
<p><strong>Datos sensibles:</strong> Estado de salud, historial médico, antecedentes heredofamiliares, padecimiento actual, resultados de estudios de laboratorio y gabinete, datos biométricos (fotografías pre y postoperatorias), datos genéticos (si aplica).</p>
<p><strong>Datos financieros (en caso de facturación):</strong> Información bancaria o fiscal para emisión de comprobantes.</p>

<h4>3. Finalidades del tratamiento</h4>
<p><strong>Primarias</strong> (artículo 6, LFPDPPP; 4.4, NOM-004-SSA3-2012):</p>
<ul>
  <li>Elaboración, integración y resguardo del expediente clínico, conforme a la NOM-004-SSA3-2012.</li>
  <li>Diagnóstico, tratamiento, seguimiento médico y programación de citas para procedimientos de cirugía plástica, reconstructiva y estética (invasivos y no invasivos).</li>
  <li>Cumplimiento de obligaciones sanitarias ante el Instituto de Servicios de Salud del Estado de Aguascalientes (ISSEA), COFEPRIS o Secretaría de Salud (artículo 9, fracción VI, Ley de Salud del Estado de Aguascalientes).</li>
  <li>Facturación y cobro de servicios médicos.</li>
</ul>
<p><strong>Secundarias</strong> (con consentimiento expreso, artículo 8, LFPDPPP):</p>
<ul>
  <li>Envío de información sobre servicios médicos, promociones o recordatorios de citas.</li>
  <li>Solicitud de interconsultas o estudios de laboratorio o gabinete.</li>
  <li>Uso de datos anonimizados para investigación médica o estadísticas (5.5, NOM-004-SSA3-2012).</li>
</ul>

<h4>4. Transferencia de datos</h4>
<p>Sus datos personales no serán transferidos a terceros, salvo en los casos siguientes (artículo 37, LFPDPPP; 5.5.1, NOM-004-SSA3-2012):</p>
<ul>
  <li>Requerimientos de autoridades judiciales, de procuración de justicia o administrativas (por ejemplo, Fiscalía, Poder Judicial, ISSEA, COFEPRIS o Secretaría de Salud).</li>
  <li>Con su autorización escrita para laboratorios, aseguradoras o fines de investigación médica anonimizada.</li>
</ul>

<h4>5. Medidas de seguridad para limitar el uso o divulgación de sus datos</h4>
<p>Implementamos medidas físicas, electrónicas y administrativas para proteger sus datos (artículo 19, LFPDPPP; 5.7, NOM-004-SSA3-2012):</p>
<ul>
  <li>Expedientes clínicos resguardados en lugares seguros con acceso restringido.</li>
  <li>Sistemas electrónicos con contraseñas, encriptación y copias de seguridad protegidas.</li>
  <li>Capacitación constante del personal en confidencialidad y protección de datos, conforme a la Ley de Salud del Estado de Aguascalientes (artículo 9, fracción XII).</li>
</ul>

<h4>6. Ejercicio de los derechos ARCO</h4>
<p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (artículos 22 al 27, LFPDPPP). Para ejercerlos, presente una solicitud por escrito en el consultorio 408, piso 4, Hospital MAC Norte o vía correo electrónico a jzurroza@gmail.com. La respuesta se dará en un plazo máximo de 20 días hábiles (artículo 32, LFPDPPP).</p>

<h4>7. Consentimiento informado</h4>
<p>Previo a cualquier procedimiento quirúrgico o de alto riesgo, se recabará su consentimiento informado por escrito, conforme a los numerales 4.2 y 10.1 de la NOM-004-SSA3-2012, incluyendo información sobre riesgos, beneficios y autorización para el tratamiento de datos relacionados con el procedimiento.</p>

<h4>8. Conservación de datos</h4>
<p>Los datos personales, incluidos los del expediente clínico, se conservarán por un mínimo de 5 años desde el último acto médico (5.4, NOM-004-SSA3-2012).</p>

<h4>9. Cambios al aviso de privacidad</h4>
<p>Nos reservamos el derecho de modificar este aviso para cumplir con cambios normativos o en nuestras prácticas. Las modificaciones se notificarán a través de los canales oficiales de comunicación del Dr. Julio César Zurroza Estrada o por comunicación directa en consulta.</p>

<h4>10. Contacto</h4>
<p>Para dudas, quejas o aclaraciones, contáctenos en el correo electrónico Zurrozaestradajulio@hotmail.com, así como al número telefónico 449-586-32-91 o WhatsApp correspondiente al mismo número telefónico.</p>

<p><em>He leído, comprendido y acepto los términos del Aviso de Privacidad.</em></p>

<hr style="margin:2rem 0;border:none;border-top:2px solid #e5e7eb;">

<h4 style="text-align:center;font-size:1.1rem;">POLÍTICAS DE PRIVACIDAD</h4>
<p>De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), la Norma Oficial Mexicana NOM-004-SSA3-2012, la Ley General de Salud, sus reglamentos y la Ley de Salud del Estado de Aguascalientes, se establecen las siguientes políticas para el tratamiento de datos personales:</p>

<h4>1. Finalidad y alcance</h4>
<p>Estas políticas regulan la recopilación, uso, almacenamiento, protección y, en su caso, transferencia de datos personales de los pacientes, garantizando el cumplimiento de las disposiciones legales aplicables, incluyendo la LFPDPPP, la NOM-004-SSA3-2012, y la Ley de Salud del Estado de Aguascalientes (artículo 9, fracción VI).</p>

<h4>2. Datos personales recopilados</h4>
<p>Recopilamos los siguientes datos (artículo 3, fracción VI, LFPDPPP; 4.4, NOM-004-SSA3-2012):</p>
<p><strong>Datos de identificación:</strong> Nombre completo, edad, sexo, estado civil, ocupación, dirección, teléfono, correo electrónico.</p>
<p><strong>Datos sensibles:</strong> Estado de salud, historial médico, antecedentes heredofamiliares, padecimiento actual, resultados de estudios de laboratorio y gabinete, datos biométricos (fotografías pre y postoperatorias), datos genéticos (si aplica).</p>
<p><strong>Datos financieros (si aplica):</strong> Información bancaria o fiscal para facturación.</p>

<h4>3. Finalidades del tratamiento</h4>
<p><strong>Primarias</strong> (artículo 6, LFPDPPP; 4.4, NOM-004-SSA3-2012):</p>
<ul>
  <li>Elaboración, integración y resguardo del expediente clínico, incluyendo notas preoperatorias, postoperatorias y de egreso (numerales 6, 8 y 10, NOM-004-SSA3-2012).</li>
  <li>Diagnóstico, tratamiento, seguimiento médico y programación de citas para procedimientos de cirugía plástica, reconstructiva y estética. Cumplimiento de obligaciones sanitarias ante el ISSEA, COFEPRIS o Secretaría de Salud (artículo 9, fracción VI, Ley de Salud del Estado de Aguascalientes).</li>
  <li>Facturación y cobro de servicios.</li>
</ul>
<p><strong>Secundarias</strong> (con consentimiento expreso, artículo 8, LFPDPPP):</p>
<ul>
  <li>Envío de información promocional o recordatorios de citas.</li>
  <li>Uso de datos anonimizados para investigación médica o estadísticas (5.5, NOM-004-SSA3-2012).</li>
</ul>

<h4>4. Base legal del tratamiento</h4>
<p><strong>Consentimiento informado</strong> (artículo 8, LFPDPPP; 4.2, 10.1, NOM-004-SSA3-2012): Obtenido por escrito antes de procedimientos quirúrgicos o de alto riesgo.</p>
<p><strong>Obligación legal</strong> (artículo 6, LFPDPPP): Cumplimiento de la NOM-004-SSA3-2012 y la Ley de Salud del Estado de Aguascalientes.</p>
<p><strong>Interés legítimo</strong> (artículo 7, LFPDPPP): Gestión de citas y mejora de la calidad del servicio médico.</p>

<h4>5. Transferencia de datos</h4>
<p>Los datos personales no serán transferidos, salvo en los casos siguientes (artículo 37, LFPDPPP; 5.5.1, NOM-004-SSA3-2012):</p>
<ul>
  <li>Requerimientos de autoridades judiciales, de procuración de justicia o administrativas (ISSEA, COFEPRIS, Secretaría de Salud).</li>
  <li>Con autorización escrita del paciente para laboratorios, aseguradoras o investigación médica anonimizada.</li>
</ul>

<h4>6. Medidas de seguridad para limitar el uso o divulgación de sus datos</h4>
<p>Implementamos medidas para proteger los datos personales (artículo 19, LFPDPPP; 5.7, NOM-004-SSA3-2012):</p>
<ul>
  <li><strong>Físicas:</strong> Expedientes clínicos en lugares seguros con acceso restringido.</li>
  <li><strong>Electrónicas:</strong> Sistemas con contraseñas, encriptación y copias de seguridad protegidas.</li>
  <li><strong>Administrativas:</strong> Capacitación trimestral del personal en confidencialidad y protección de datos (artículo 9, fracción XII, Ley de Salud del Estado de Aguascalientes).</li>
  <li>Capacitación constante de cumplimiento normativo, conforme al contrato de servicios legales y la legislación.</li>
</ul>

<h4>7. Derechos ARCO</h4>
<p>Los pacientes pueden ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición (artículos 22 al 27, LFPDPPP) mediante solicitud escrita en el consultorio 408, piso 4, Hospital MAC Norte o vía correo electrónico a jzurroza@gmail.com. La respuesta se dará en un plazo máximo de 20 días hábiles (artículo 32, LFPDPPP).</p>

<h4>8. Consentimiento informado</h4>
<p>Antes de cualquier procedimiento quirúrgico o de alto riesgo, se recabará un consentimiento informado por escrito (10.1, NOM-004-SSA3-2012), incluyendo:</p>
<ul>
  <li>Nombre del establecimiento y del médico.</li>
  <li>Descripción del procedimiento, riesgos y beneficios.</li>
  <li>Autorización para el tratamiento de datos personales relacionados.</li>
  <li>Firma del paciente (o representante legal), médico y dos testigos.</li>
</ul>
<p>El paciente puede revocar el consentimiento en cualquier momento, notificándolo por escrito.</p>

<h4>9. Conservación de datos</h4>
<p>Los datos personales y el expediente clínico se conservarán por un mínimo de 5 años desde el último acto médico (5.4, NOM-004-SSA3-2012).</p>

<h4>10. Cambios a las políticas</h4>
<p>Nos reservamos el derecho de modificar estas políticas para cumplir con cambios normativos o en nuestras prácticas. Las modificaciones se notificarán a través de los canales oficiales de comunicación del Dr. Julio César Zurroza Estrada o por comunicación directa en consulta.</p>

<h4>11. Contacto</h4>
<p>Para dudas, quejas o aclaraciones, contáctenos en el correo electrónico Zurrozaestradajulio@hotmail.com, así como al número telefónico 449-586-32-91 o WhatsApp correspondiente al mismo número telefónico.</p>

<p><em>He leído, comprendido y acepto los términos de las Políticas de Privacidad.</em></p>
`,c={webhookUrl:"https://expediente.159-54-158-237.sslip.io/webhook/exp-prereg?token_ingesta=3337a1ef07ac7a3fc38c130b594681c0c073",minAge:18,heightRange:{min:120,max:220},weightRange:{min:30,max:250}},R=document.getElementById("patientForm"),Ne=Array.from(document.querySelectorAll(".step")),Oe=Array.from(document.querySelectorAll(".progress__step")),xe=document.getElementById("openInitialModalBtn"),Re=document.getElementById("continueFromInitialBtn"),pe=document.getElementById("toSummaryBtn"),me=document.getElementById("backToStep1Btn"),ge=document.getElementById("backToStep2Btn"),z=document.getElementById("submitBtn"),U=document.getElementById("fullName"),B=document.getElementById("age"),H=document.getElementById("weightKg"),J=document.getElementById("heightCm"),G=document.getElementById("procedure"),Q=document.getElementById("initialInfo"),ze=document.getElementById("summaryList"),Fe=document.getElementById("imcResult"),b=document.getElementById("statusMessage"),w=document.getElementById("step2Error"),T=document.getElementById("summaryError"),W=document.getElementById("initialModalError"),Z=document.getElementById("initialModal"),S=document.getElementById("ageModal"),ye=document.getElementById("imcModal"),k=document.getElementById("successModal"),we=document.getElementById("closeModalBtn"),Te=document.getElementById("continueFromImcBtn"),V=document.getElementById("confirmImcReading"),ke=document.getElementById("imcModalContent"),_=document.getElementById("imcModalError"),M=document.getElementById("loaderOverlay"),_e=document.getElementById("loadingBarFill"),fe=document.getElementById("policyServiceModal"),$=document.getElementById("policyServiceScroll"),$e=document.getElementById("policyServiceText"),Y=document.getElementById("policyServiceAcceptBtn"),ve=document.getElementById("privacyPolicyModal"),j=document.getElementById("privacyPolicyScroll"),je=document.getElementById("privacyPolicyText"),K=document.getElementById("privacyPolicyAcceptBtn"),Ue=document.getElementById("ageCheckModal"),L=document.getElementById("ageCheckYesBtn"),He=document.getElementById("ageCheckNoBtn"),he=document.getElementById("ageCheckError"),Ee=document.getElementById("dobModal"),Je=document.getElementById("dobContinueBtn"),F=document.getElementById("dobError"),X=document.getElementById("calendarWidget"),Ge=document.getElementById("selectedDateDisplay"),ee=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];let y=new Date().getFullYear()-25,f=0,u=null,E=null,I=null;const D=document.getElementById("ineFrenteInput"),q=document.getElementById("ineReversoInput"),Ie=document.getElementById("ineFrenteBtn"),be=document.getElementById("ineReversoBtn"),ae=document.getElementById("ineFrenteImg"),oe=document.getElementById("ineReversoImg"),Ze=document.getElementById("ineFrentePlaceholder"),Ve=document.getElementById("ineReversoPlaceholder"),v=document.getElementById("ineError"),Ye=document.getElementById("backFromIneBtn"),Ke=document.getElementById("continueFromIneBtn"),Qe=document.getElementById("iconIne1"),We=document.getElementById("iconIne2"),ie=document.getElementById("iconIne3"),te=document.getElementById("icon1-1"),ne=document.getElementById("icon1-2"),se=document.getElementById("icon1-3"),re=document.getElementById("icon2-1"),ce=document.getElementById("icon2-2"),le=document.getElementById("icon2-3"),Xe=document.getElementById("icon3-1"),ea=document.getElementById("icon3-2"),aa=document.getElementById("icon3-3");function h(e){Ne.forEach(n=>{n.classList.toggle("is-active",Number(n.dataset.step)===e)}),Oe.forEach(n=>{const i=Number(n.dataset.step);n.classList.toggle("is-active",i===e),n.classList.toggle("is-done",i<e)});const t=e/4*100;_e.style.width=`${t}%`}function p(e){e.classList.add("is-visible"),e.setAttribute("aria-hidden","false")}function m(e){e.classList.remove("is-visible"),e.setAttribute("aria-hidden","true")}function oa(){M.classList.add("is-visible"),M.setAttribute("aria-hidden","false")}function de(){M.classList.remove("is-visible"),M.setAttribute("aria-hidden","true")}function ia(){return new URLSearchParams(window.location.search).get("token")||""}function C(){const e=U.value.trim(),a=Number(B.value);e.length>=3?te.classList.add("is-filled"):te.classList.remove("is-filled"),!Number.isNaN(a)&&a>=c.minAge?ne.classList.add("is-filled"):ne.classList.remove("is-filled"),e.length>=3&&!Number.isNaN(a)&&a>=c.minAge?se.classList.add("is-filled"):se.classList.remove("is-filled")}function P(){const e=Number(H.value),a=Number(J.value),t=G.value.trim();e>=c.weightRange.min&&e<=c.weightRange.max?re.classList.add("is-filled"):re.classList.remove("is-filled"),a>=c.heightRange.min&&a<=c.heightRange.max?ce.classList.add("is-filled"):ce.classList.remove("is-filled"),t?le.classList.add("is-filled"):le.classList.remove("is-filled")}function ta(e){return e<18.5?"Bajo peso":e<25?"Peso normal":e<30?"Sobrepeso":"Obesidad"}function Se(e){const a="<p><strong>El Índice de Masa Corporal (IMC)</strong> es una medida simple que relaciona el peso y la talla, calculada como el peso en kilogramos dividido por el cuadrado de la estatura en metros (kg/m²), que la Organización Mundial de la Salud (OMS) usa para clasificar a los adultos en categorías de peso, siendo un IMC mayor a 25 sobrepeso, mayor a 30 obesidad moderada y cuando resulta superior a 35 obesidad severa. Los anteriores parámetros ayudan a evaluar la posibilidad de realizar la cirugía estética y evaluar riesgos de salud como enfermedades crónicas y la posibilidad de riesgos graves durante la cirugía.</p>";return e<18.5?{suitable:!1,content:a+`
        <div class="imc-value">Tu IMC: ${e}</div>
        <p class="imc-status not-suitable">EN ESTE MOMENTO NO ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) es <strong>BAJO</strong>, o muestra peso insuficiente ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define como cualquier valor inferior a 18.5 kg/m². Este rango indica que la persona está por debajo de un peso saludable, lo que podría implicar riesgos de desnutrición o deficiencia de nutrientes.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal y poder solicitar una nueva valoración para tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `}:e>=18.5&&e<25?{suitable:!0,content:a+`
        <div class="imc-value">Tu IMC: ${e}</div>
        <p class="imc-status suitable">HOY USTED ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) se encuentra en estado <strong>ÓPTIMO</strong>. Su peso muestra condiciones favorables para la intervención quirúrgica que usted desea realizarse ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define como cualquier valor entre 18.5–24.9 como un peso normal. Este rango indica que la persona está en un rango de peso saludable.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal antes de tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas o aumentas de peso se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `}:e>=25&&e<35?{suitable:!0,content:a+`
        <div class="imc-value">Tu IMC: ${e}</div>
        <p class="imc-status suitable">HOY USTED ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) se encuentra en estado de <strong>OBESIDAD MODERADA CLASE I</strong>. Sin embargo, muestra condiciones que SÍ permiten realizar la intervención quirúrgica que usted desea realizarse ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define la obesidad moderada clase I como cualquier valor IMC mayor a 30. Este rango indica que la persona aunque revela obesidad se encuentra saludable, sin embargo, se deberán tomar las acciones necesarias para disminuir los riesgos en tu intervención quirúrgica.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal antes de tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas o aumentas de peso se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `}:{suitable:!1,content:a+`
        <div class="imc-value">Tu IMC: ${e}</div>
        <p class="imc-status not-suitable">HOY USTED NO ES APTA PARA LA INTERVENCIÓN QUIRÚRGICA SOLICITADA</p>
        <p>Su Índice de Masa Corporal (IMC) se encuentra en estado de <strong>OBESIDAD SEVERA</strong>. La OMS clasifica la obesidad severa (o grado II) en adultos con un Índice de Masa Corporal (IMC) de 35.0 a 39.9 kg/m². Su peso muestra condiciones que NO permiten realizar la intervención quirúrgica que usted desea realizarse ya que de acuerdo a la Organización Mundial de la Salud (OMS) en adultos se define la obesidad severa como cualquier valor IMC mayor a 35.</p>
        <p>Este rango indica que la persona se encuentra en una categoría en la que presenta <strong>riesgos altos a la salud</strong>, predisposición a enfermedades crónicas y enfermedades cardiovasculares, por lo que la operación que usted desea pone en riesgo su vida.</p>
        <p><strong>Recuerda:</strong> Si tu resultado de Índice de Masa Corporal es mayor a 35, refleja obesidad severa y de acuerdo a las políticas de prestación del servicio y a los parámetros de la Organización Mundial de la Salud aún no estás en condiciones óptimas para la operación que deseas ya que se pondría en riesgo grave tu salud y nos preocupamos por tu bienestar.</p>
        <p><strong>SIGUE LAS INSTRUCCIONES DE TU MÉDICO.</strong> Si deseas continuar con la cirugía solicitada, realízate los exámenes clínicos y pídele a tu médico las indicaciones específicas para regular tu índice de masa corporal y poder solicitar una nueva valoración para tu cirugía, sin descartar siempre la existencia de riesgos quirúrgicos que deberá leer y a su vez seguir el protocolo médico, firmar el consentimiento informado entre otros documentos que forman parte de su expediente clínico.</p>
        <p><strong>Recuerda:</strong> Si no cumples las indicaciones pre-quirúrgicas o aumentas de peso se podrá cancelar tu cirugía ya que nos preocupamos por tu salud y bienestar.</p>
      `}}function A(){const e=ee.map((o,r)=>`<option value="${r}"${r===f?" selected":""}>${o}</option>`).join(""),a=new Date().getFullYear();let t="";for(let o=a;o>=a-100;o--)t+=`<option value="${o}"${o===y?" selected":""}>${o}</option>`;const n=new Date(y,f,1),i=new Date(y,f+1,0).getDate();let s=n.getDay();s=s===0?6:s-1;const l=new Date;l.setHours(0,0,0,0);let d="";for(let o=0;o<s;o++)d+='<span class="calendar__day calendar__day--empty"></span>';for(let o=1;o<=i;o++){const g=new Date(y,f,o)>l,N=u&&u.getFullYear()===y&&u.getMonth()===f&&u.getDate()===o,O=["calendar__day"];g&&O.push("calendar__day--disabled"),N&&O.push("calendar__day--selected"),d+=`<button type="button" class="${O.join(" ")}" data-day="${o}"${g?" disabled":""}>${o}</button>`}X.innerHTML=`
    <div class="calendar__header">
      <select class="calendar__select" id="calMonthSelect">${e}</select>
      <select class="calendar__select" id="calYearSelect">${t}</select>
    </div>
    <div class="calendar__weekdays">
      <span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sa</span><span>Do</span>
    </div>
    <div class="calendar__grid">${d}</div>
  `,document.getElementById("calMonthSelect").addEventListener("change",o=>{f=parseInt(o.target.value),A()}),document.getElementById("calYearSelect").addEventListener("change",o=>{y=parseInt(o.target.value),A()}),X.querySelectorAll(".calendar__day:not(.calendar__day--empty):not(.calendar__day--disabled)").forEach(o=>{o.addEventListener("click",()=>{u=new Date(y,f,parseInt(o.dataset.day)),A();const r=u.getDate(),g=ee[u.getMonth()],N=u.getFullYear();Ge.textContent=`${r} de ${g} de ${N}`})})}function na(e){const a=new Date;let t=a.getFullYear()-e.getFullYear();const n=a.getMonth()-e.getMonth();return(n<0||n===0&&a.getDate()<e.getDate())&&t--,t}function Ce(){const e=U.value.trim(),a=Number(B.value);if(e.length<3)throw new Error("Ingresa un nombre completo válido.");if(Number.isNaN(a)||a<0)throw new Error("Ingresa una edad válida.");if(a<c.minAge)throw p(S),new Error("Edad no permitida para este formulario.");return{fullName:e,age:a}}function Pe(){const e=Number(J.value),a=Number(H.value),t=G.value.trim();if(e<c.heightRange.min||e>c.heightRange.max)throw new Error(`La estatura debe estar entre ${c.heightRange.min} y ${c.heightRange.max} cm.`);if(a<c.weightRange.min||a>c.weightRange.max)throw new Error(`El peso debe estar entre ${c.weightRange.min} y ${c.weightRange.max} kg.`);if(!t)throw new Error("Selecciona el procedimiento estético quirúrgico que desea.");return{heightCm:e,weightKg:a,procedure:t}}function Le(){const{fullName:e,age:a}=Ce(),{heightCm:t,weightKg:n,procedure:i}=Pe(),s=t/100,l=n/(s*s),d=Number(l.toFixed(2)),o=ta(d);return ze.innerHTML=`
    <li><strong>Nombre completo:</strong> ${e}</li>
    <li><strong>Edad:</strong> ${a} años</li>
    <li><strong>INE Frente:</strong> ${E?"Adjunta":"No adjunta"}</li>
    <li><strong>INE Reverso:</strong> ${I?"Adjunta":"No adjunta"}</li>
    <li><strong>Peso:</strong> ${n} kg</li>
    <li><strong>Estatura:</strong> ${t} cm</li>
    <li><strong>Procedimiento deseado:</strong> ${i}</li>
  `,Fe.textContent=`IMC calculado: ${d} (${o}).`,{fullName:e,age:a,heightCm:t,weightKg:n,procedure:i,roundedImc:d,classification:o}}async function sa(e){if(c.webhookUrl.includes("TU_WEBHOOK_AQUI")){const t={};for(const[n,i]of e.entries())t[n]=i instanceof Blob?`[Archivo: ${(i.size/1024).toFixed(1)} KB]`:i;console.log("Modo de prueba - Datos del formulario:",t),await new Promise(n=>setTimeout(n,1e3));return}if(!(await fetch(c.webhookUrl,{method:"POST",body:e})).ok)throw new Error("No se pudo enviar la información. Intenta de nuevo.")}xe.addEventListener("click",()=>p(Z));L.addEventListener("click",()=>{he.textContent="",m(Ue),A(),p(Ee)});He.addEventListener("click",()=>{he.textContent="Este servicio es exclusivamente para personas mayores de edad (18 años o más).",L.disabled=!0,L.style.opacity="0.4",L.style.pointerEvents="none"});Je.addEventListener("click",()=>{if(F.textContent="",!u){F.textContent="Selecciona tu fecha de nacimiento.";return}const e=na(u);if(e<c.minAge){F.textContent="De acuerdo a tu fecha de nacimiento, no cumples con la edad mínima requerida (18 años).";return}B.value=e,C(),m(Ee),p(Z)});function Ae(){E&&I?ie.classList.add("is-filled"):ie.classList.remove("is-filled")}Ie.addEventListener("click",()=>{D.value="",D.click()});be.addEventListener("click",()=>{q.value="",q.click()});D.addEventListener("change",async()=>{const e=D.files[0];if(e){v.textContent="";try{E=await ue(e),ae.src=URL.createObjectURL(E),ae.style.display="block",Ze.style.display="none",Ie.textContent="Volver a tomar",Qe.classList.add("is-filled"),Ae()}catch(a){v.textContent=a.message}}});q.addEventListener("change",async()=>{const e=q.files[0];if(e){v.textContent="";try{I=await ue(e),oe.src=URL.createObjectURL(I),oe.style.display="block",Ve.style.display="none",be.textContent="Volver a tomar",We.classList.add("is-filled"),Ae()}catch(a){v.textContent=a.message}}});Ye.addEventListener("click",()=>h(1));Ke.addEventListener("click",()=>{if(v.textContent="",!E){v.textContent="Debes capturar la foto del frente de tu INE.";return}if(!I){v.textContent="Debes capturar la foto del reverso de tu INE.";return}h(3)});U.addEventListener("input",C);B.addEventListener("input",C);H.addEventListener("input",P);J.addEventListener("input",P);G.addEventListener("change",P);Re.addEventListener("click",()=>{W.textContent="";try{const{fullName:e,age:a}=Ce();m(Z),Q.textContent=`✅ ${e}, ${a} años. Puedes continuar al siguiente paso.`,Q.className="status-message success",C(),h(2)}catch(e){e.message!=="Edad no permitida para este formulario."&&(W.textContent=e.message)}});$e.innerHTML=qe;je.innerHTML=Be;function Me(e){return e.scrollHeight-e.scrollTop<=e.clientHeight+30}$.addEventListener("scroll",()=>{Me($)&&(Y.disabled=!1)});j.addEventListener("scroll",()=>{Me(j)&&(K.disabled=!1)});Y.addEventListener("click",()=>{m(fe),j.scrollTop=0,K.disabled=!0,p(ve)});K.addEventListener("click",()=>{m(ve),p(ye)});pe.addEventListener("click",()=>{w.textContent="",T.textContent="",b.textContent="",b.className="status-message",_.textContent="",V.checked=!1;try{const{heightCm:e,weightKg:a}=Pe(),t=e/100,n=a/(t*t),i=Number(n.toFixed(2)),s=Se(i);ke.innerHTML=s.content,P(),$.scrollTop=0,Y.disabled=!0,p(fe)}catch(e){w.textContent=e.message}});me.addEventListener("click",()=>h(2));ge.addEventListener("click",()=>h(3));we.addEventListener("click",()=>m(S));S.addEventListener("click",e=>{e.target===S&&m(S)});k.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault()});Te.addEventListener("click",()=>{_.textContent="";try{if(!V.checked)throw new Error("Debes confirmar que has leído y comprendido la información sobre tu IMC.");Le(),m(ye),Xe.classList.add("is-filled"),ea.classList.add("is-filled"),aa.classList.add("is-filled"),h(4)}catch(e){_.textContent=e.message}});R.addEventListener("submit",async e=>{e.preventDefault(),w.textContent="",T.textContent="",b.textContent="",b.className="status-message";try{const{fullName:a,age:t,heightCm:n,weightKg:i,procedure:s,roundedImc:l,classification:d}=Le(),o=Se(l),r=new FormData;r.append("nombre",a),r.append("edad",t),r.append("ine_frente",E,"ine_frente.jpg"),r.append("ine_reverso",I,"ine_reverso.jpg"),r.append("estatura_cm",n),r.append("peso_kg",i),r.append("procedimiento",s),r.append("imc",l),r.append("clasificacion_imc",d),r.append("apta_para_cirugia",o.suitable),r.append("confirmo_lectura_imc",V.checked),r.append("fecha_nacimiento",u?u.toISOString().split("T")[0]:""),r.append("token",ia()),r.append("timestamp",new Date().toISOString()),oa(),z.disabled=!0,await sa(r),de(),R.style.pointerEvents="none",R.style.opacity="0.6",me.disabled=!0,ge.disabled=!0,pe.disabled=!0,z.disabled=!0,p(k),k.style.pointerEvents="auto"}catch(a){T.textContent=a.message,b.className="status-message error",de(),z.disabled=!1}});h(1);C();P();
