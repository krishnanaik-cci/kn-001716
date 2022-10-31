/*
add "<p id='stop'></p>" at the point that you want autoscroll to stop at. Will use stopText if necessary 
*/
var stopText = "<p></p><p></p>";

var isiText = "" +
"<b>Boxed Warning: Elderly patients with dementia-related psychosis treated with antipsychotic drugs are at an increased risk of death. LYBALVI is not approved for the treatment of patients with dementia-related psychosis.</b>" + 
"<p><b>Contraindications:</b> LYBALVI is contraindicated in patients who are using opioids or are undergoing acute opioid withdrawal. If LYBALVI is administered with lithium or valproate, refer to the lithium or valproate Prescribing Information for the contraindications for these products.</p>" +
"<p><b>Cerebrovascular Adverse Reactions in Elderly Patients with Dementia-Related Psychosis,</b> including stroke, transient ischemia attack, and fatalities. See Boxed Warning above.</p>" +
"<p><b>Precipitation of Severe Opioid Withdrawal in Patients who are Physiologically Dependent on Opioids:</b> LYBALVI can precipitate opioid withdrawal in patients who are dependent on opioids, which can lead to an opioid withdrawal syndrome, sometimes requiring hospitalization. LYBALVI is contraindicated in patients who are using opioids or undergoing acute opioid withdrawal. Prior to initiating LYBALVI, there should be at least a 7-day opioid-free interval from last use of short-acting opioids, and at least a 14-day opioid-free interval from the last use of long-acting opioids. Explain the risks associated with precipitated withdrawal and the importance of giving an accurate account of last opioid use to patients and caregivers.</p>" +
"<p><b>Vulnerability to Life-Threatening Opioid Overdose:</b> Attempting to overcome opioid blockade with high or repeated doses of exogenous opioids could lead to life-threatening or fatal opioid intoxication, particularly if LYBALVI therapy is interrupted or discontinued subjecting the patient to high levels of unopposed opioid agonist as the samidorphan blockade wanes. Inform patients of the potential consequences of trying to overcome the opioid blockade and the serious risks of taking opioids concurrently with LYBALVI or while transitioning off LYBALVI. In emergency situations, if a LYBALVI-treated patient requires opioid treatment as part of anesthesia or analgesia, discontinue LYBALVI. Opioids should be administered by properly trained individual(s) and patient should be continuously monitored in a setting equipped and staffed for cardiopulmonary resuscitation. Patients with a history of chronic opioid use prior to treatment with LYBALVI may have decreased opioid tolerance if LYBALVI therapy is interrupted or discontinued. Advise patients that this decreased tolerance may increase the risk of opioid overdose if opioids are resumed at the previously tolerated dosage.</p>" +
"<p><b>Neuroleptic Malignant Syndrome,</b> a potentially fatal reaction. Signs and symptoms include hyperpyrexia, muscle rigidity, delirium, autonomic instability, elevated creatinine phosphokinase, myoglobinuria (and/or rhabdomyolysis), and acute renal failure. Manage with immediate discontinuation, intensive symptomatic treatment, and close monitoring.</p>" +
"<p><b>Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS),</b> a potentially fatal condition reported with exposure to olanzapine, a component of LYBALVI. Symptoms include a cutaneous reaction (such as rash or exfoliative dermatitis), eosinophilia, fever, and/or lymphadenopathy with systemic complications such as hepatitis, nephritis, pneumonitis, myocarditis, and/or pericarditis. Discontinue if DRESS is suspected.</p>" +
"<p><b>Metabolic Changes,</b> including hyperglycemia, diabetes mellitus, dyslipidemia, and weight gain. Hyperglycemia, in some cases extreme and associated with ketoacidosis or hyperosmolar coma or death, has been reported in patients treated with atypical antipsychotics. Any patient treated with LYBALVI should be monitored for symptoms of hyperglycemia including polydipsia, polyuria, polyphagia, and weakness. In some cases, hyperglycemia has resolved when the atypical antipsychotic was discontinued; however, some patients required anti-diabetic treatment despite discontinuation of the suspect drug. Measure weight and assess fasting glucose and lipids when initiating LYBALVI and monitor periodically.</p>" +
"<p><b>Tardive Dyskinesia (TD):</b> Risk of developing TD (a syndrome of potentially irreversible, involuntary, dyskinetic movements) and the likelihood it will become irreversible increases with the duration of treatment and the cumulative dose. The syndrome can develop after a relatively brief treatment period, even at low doses, or after discontinuation. Given these considerations, LYBALVI should be prescribed in a manner that is most likely to reduce the risk of tardive dyskinesia. If signs and symptoms of TD appear, drug discontinuation should be considered.</p>" +
"<p><b>Orthostatic Hypotension and Syncope:</b> Monitor orthostatic vital signs in patients who are vulnerable to hypotension, patients with known cardiovascular disease, and patients with cerebrovascular disease.</p>" +
"<p><b>Falls:</b> LYBALVI may cause somnolence, postural hypotension, and motor and sensory instability, which may lead to falls, and consequently, fractures or other injuries. Assess patients for risk when using LYBALVI.</p>" +
"<p><b>Leukopenia, Neutropenia, and Agranulocytosis (including fatal cases):</b> Perform complete blood counts in patients with a history of a clinically significant low white blood cell (WBC) count or history of leukopenia or neutropenia. Discontinue LYBALVI if clinically significant decline in WBC occurs in the absence of other causative factors.</p>" +
"<p><b>Dysphagia:</b> Use LYBALVI with caution in patients at risk for aspiration.</p>" +
"<p><b>Seizures:</b> Use LYBALVI with caution in patients with a history of seizures or with conditions that lower the seizure threshold.</p>" +
"<p><b>Potential for Cognitive and Motor Impairment:</b> Because LYBALVI may cause somnolence, impair judgment, thinking, or motor skills, caution patients about operating hazardous machinery, including motor vehicles, until they are certain that LYBALVI does not affect them adversely.</p>" +
"<p><b>Body Temperature Dysregulation:</b> Use LYBALVI with caution in patients who may experience conditions that increase core body temperature (e.g., strenuous exercise, extreme heat, dehydration, or concomitant use with anticholinergics).</p>" +
"<p><b>Anticholinergic (Antimuscarinic) Effects:</b> Olanzapine, a component of LYBALVI, was associated with constipation, dry mouth, and tachycardia. Use LYBALVI with caution with other anticholinergic medications and in patients with urinary retention, prostatic hypertrophy, constipation, paralytic ileus or related conditions. In postmarketing experience, the risk for severe adverse reactions (including fatalities) was increased with concomitant use of anticholinergic medications.</p>" +
"<p><b>Hyperprolactinemia:</b> LYBALVI elevates prolactin levels. Galactorrhea, amenorrhea, gynecomastia, and impotence have been reported in patients receiving prolactin-elevating compounds.</p>" +
"<p><b>Risks Associated with Combination Treatment with Lithium or Valproate:</b> If LYBALVI is administered with lithium or valproate, refer to the lithium or valproate Prescribing Information for a description of the risks for these products.</p>" +
"<p><b>Most common adverse reactions</b> observed in clinical trials were: </p>" +
"<ul class='space-top'>" +
"<li><span><i>Schizophrenia (LYBALVI)</i>: weight increased, somnolence, dry mouth, and headache</span></li>" +
"<li><span><i>Bipolar I Disorder, Manic or Mixed Episodes (olanzapine)</i>: asthenia, dry mouth, constipation, increased appetite, somnolence, dizziness, tremor</span></li>" +
"<li class='no-space'><span><i>Bipolar I Disorder, Manic or Mixed Episodes, adjunct to Lithium or Valproate (olanzapine)</i>: dry mouth, dyspepsia, weight gain, increased appetite, dizziness, back pain, constipation, speech disorder, increased salivation, amnesia, paresthesia</span></li>" +
"</ul>" +
"<p><b>Concomitant Medication:</b> LYBALVI is contraindicated in patients who are using opioids or undergoing acute opioid withdrawal. Concomitant use of LYBALVI is not recommended with strong CYP3A4 inducers, levodopa and dopamine agonists. Reduce dosage of LYBALVI when using with strong CYP1A2 inhibitors. Increase dosage of LYBALVI with CYP1A2 inducers. Use caution with diazepam, alcohol, other CNS acting drugs, or in patients receiving anticholinergic (antimuscarinic) medications. Monitor blood pressure and reduce dosage of antihypertensive drug in accordance with its approved product labeling.</p>" +
"<p><b>Pregnancy:</b> May cause extrapyramidal and/or withdrawal symptoms in neonates with third trimester exposure. Advise patients to notify their healthcare provider if they become pregnant or intend to become pregnant during treatment with LYBALVI. Inform patients that there is a pregnancy exposure registry that monitors pregnancy outcomes in women exposed to LYBALVI during pregnancy.</p>" +
"<p><b>Renal Impairment:</b> LYBALVI is not recommended for patients with end-stage renal disease (eGFR of <15 mL/minute/1.73 m<sup>²</sup>).</p>" +
"<p><b>To report SUSPECTED ADVERSE REACTIONS, contact Alkermes at 1-888-235-8008 or FDA at 1-800-FDA-1088 or <a id='clickTag2'>www.fda.gov/medwatch</a>.</b></p>" +
"<br><header class='heading'>INDICATIONS</header>" + 
"<p>LYBALVI is indicated for the treatment of:</p>" +
"<ul>" +
"<li><span>Schizophrenia in adults</span></li>" +
"<li><span>Bipolar I disorder in adults</span></li>" +
"<li class='remove-bullet'><ul><li><span>Acute treatment of manic or mixed episodes as monotherapy and as adjunct to lithium or valproate</span></li><li><span>Maintenance monotherapy treatment</span></li></ul></li>" +
"</ul>" +
"<p><b>Please see full <a id='clickTag3'>Prescribing Information</a>, including Boxed Warning, for LYBALVI.</b></p>" +
"<p class='alk-logo'><span></span></p>" +
"<p>ALKERMES<sup class='reg-mark'>&reg;</sup> is a registered trademark of Alkermes, Inc. LYBALVI<sup class='reg-mark'>&reg;</sup> is a registered trademark and the LYBALVI logo is a trademark of Alkermes Pharma Ireland Limited, both used by Alkermes, Inc., under license.<br>&copy;2022 Alkermes, Inc. All rights reserved. LYB-001716</p>" +
"<p id='stop'></p>" +
"<p></p>";

