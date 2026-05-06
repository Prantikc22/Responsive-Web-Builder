import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
  intro: string;
  sections: { heading: string; content: string }[];
  faq?: { q: string; a: string }[];
  conclusion: string;
  cta: string;
  relatedSlugs: string[];
}

const articles: Record<string, Article> = {
  "homeopathy-for-diabetes": {
    slug: "homeopathy-for-diabetes",
    title: "Can Homeopathy Help Manage Diabetes? A Clinical Perspective from Kolkata",
    metaDescription: "Discover how classical homoeopathy can complement diabetes management in Kolkata. Expert insights from Dr. Souvik Dutta, CCRH Research Fellow, on constitutional treatment for blood sugar control.",
    category: "HOMEOPATHY",
    author: "Dr. Souvik Dutta, BHMS, MD(Hom.)",
    readTime: "7 min read",
    publishDate: "May 2025",
    intro: "Diabetes mellitus has become one of the most prevalent chronic diseases in India, with West Bengal alone recording millions of affected individuals. While conventional medicine focuses on blood sugar control through medication, an increasing number of patients in Kolkata are turning to classical homoeopathy — not as a replacement, but as a powerful complementary system that addresses the root causes of metabolic dysfunction. At Heal & Cure Health Clinic, Uttarpara, we have worked with hundreds of diabetic patients and observed remarkable improvements in quality of life, energy levels, and long-term glucose stability through individualised homoeopathic treatment.",
    sections: [
      {
        heading: "How Does Homoeopathy Approach Diabetes Differently?",
        content: "Conventional medicine views diabetes primarily as a blood glucose management problem. Homoeopathy sees it as an expression of a deeper constitutional imbalance — a dysfunction in how the body metabolises and regulates energy at a fundamental level. Classical homoeopathic prescribing for diabetes does not target the pancreas or insulin resistance in isolation. Instead, it identifies the patient's unique mental, emotional, and physical symptom pattern — what we call the 'totality of symptoms' — and selects a remedy that matches that totality. This constitutional approach stimulates the body's own healing intelligence, known in homoeopathy as the vital force, to correct the underlying dysregulation that manifests as elevated blood sugar. Common constitutional remedies used in diabetic cases include Syzygium jambolanum (effective for high blood sugar with thirst and weakness), Uranium nitricum (for diabetes with emaciation and polyuria), Phosphoric acid (for diabetes with extreme mental and physical exhaustion), and Lycopodium (for Type 2 diabetes with digestive symptoms and performance anxiety). Each prescription is highly individualised — two patients with the same HbA1c value may receive entirely different remedies based on their unique constitutional picture."
      },
      {
        heading: "What the Research Says: Homoeopathy and Blood Sugar",
        content: "The Council for Research in Homoeopathic Medicine (CCRH), under the Ministry of Ayush, Government of India, has conducted and published clinical studies on homoeopathic management of diabetes. These studies indicate that certain homoeopathic interventions can contribute to improvements in fasting blood glucose, post-prandial glucose, and overall glycaemic indices when combined with dietary modifications. At the Dr. Anjali Chatterji Regional Research Institute for Homoeopathy, Kolkata, where Dr. Souvik Dutta serves as Senior Research Fellow, ongoing research continues to build the evidence base for individualised homoeopathic prescribing in metabolic disorders. It is important to note that homoeopathy should always be used alongside — not instead of — prescribed conventional medication for diabetes, especially in insulin-dependent patients. The goal is integrated care that reduces the disease burden and improves quality of life."
      },
      {
        heading: "Constitutional vs. Disease-Specific Prescribing",
        content: "There is an important distinction between prescribing a 'diabetes remedy' and constitutional homoeopathic prescribing. Many patients arrive at our clinic having tried generic homoeopathic formulations available over the counter. These may provide temporary symptomatic relief but rarely achieve deep, lasting improvement. Classical constitutional prescribing — the approach practised at Heal & Cure — requires a detailed case-taking process that may take 60 to 90 minutes for an initial consultation. The homoeopath explores not just the diabetes symptoms but also the patient's mental state, sleep patterns, food preferences, thermal sensibility, and personal and family medical history. This comprehensive picture guides the selection of a single, highly potentised remedy that acts at the deepest constitutional level."
      },
      {
        heading: "Combining Homoeopathy with Clinical Nutrition for Diabetes",
        content: "At Heal & Cure, we believe that the most effective approach to diabetes management combines homoeopathic constitutional treatment with personalised clinical nutrition. Our therapeutic dietitian, Pampita Banerjee (MSc Food & Nutrition, Diabetic Educator), works in tandem with Dr. Souvik Dutta to create integrated care plans. While homoeopathy works on the constitutional level to address the root cause, clinical nutrition provides the dietary framework — low glycaemic index foods, fibre optimisation, meal timing strategies, and macronutrient balance — that stabilises blood sugar in the short and medium term. Patients who pursue both approaches consistently report better outcomes than those who rely on either alone. We have observed patients reduce their dependency on oral hypoglycaemic agents over time (always under medical supervision), achieve better HbA1c readings, and experience significantly improved energy levels and overall wellbeing."
      },
      {
        heading: "What to Expect at a Homoeopathic Consultation for Diabetes in Kolkata",
        content: "Your first consultation at Heal & Cure for diabetes management will involve a detailed case-taking process covering your complete medical history, current medications, symptoms, lifestyle, diet, stress levels, and mental and emotional state. Dr. Souvik will study your case thoroughly and prescribe a constitutional remedy. Follow-up consultations are typically scheduled at 4 to 6 week intervals to monitor progress, assess changes in symptoms, and refine the prescription as needed. Blood glucose monitoring and HbA1c tests are strongly encouraged throughout treatment so that objective improvements can be tracked alongside subjective improvements in wellbeing. The clinic is located at Panpara Lane, Uttarpara, Kolkata — easily accessible from Serampore, Hooghly, Howrah, and central Kolkata."
      }
    ],
    faq: [
      { q: "Can I stop my diabetes medication if I start homoeopathy?", a: "Absolutely not without your physician's guidance. Homoeopathy is used alongside conventional medication, not instead of it. Any reduction in medication must be done under medical supervision based on blood test results." },
      { q: "How long does it take to see results with homoeopathy for diabetes?", a: "Constitutional treatment is a deep process. Most patients notice improvements in energy, sleep, and overall wellbeing within 4 to 8 weeks. Objective improvements in blood glucose may take 3 to 6 months of consistent treatment." },
      { q: "Is homoeopathy safe for diabetic patients on insulin?", a: "Yes. Homoeopathic remedies are non-pharmacological and do not interact with insulin or other diabetes medications. They are safe to take alongside your prescribed treatment." },
      { q: "Does Heal & Cure offer online consultations for diabetes?", a: "Yes, phone consultations are available with Pampita Banerjee for nutrition counselling. For homoeopathic treatment, in-person consultation with Dr. Souvik Dutta is recommended for detailed case-taking." },
    ],
    conclusion: "Homoeopathy offers a deeply individualised, evidence-informed approach to diabetes management that addresses the root constitutional imbalance rather than merely controlling blood sugar numbers. When combined with expert clinical nutrition, it forms a powerful integrated health strategy that can dramatically improve quality of life for diabetic patients in Kolkata and beyond. If you are looking for a holistic, research-backed approach to managing your diabetes, we invite you to book a consultation at Heal & Cure Health Clinic, Uttarpara, Kolkata.",
    cta: "Book a Diabetes Consultation",
    relatedSlugs: ["diet-mistakes-for-diabetics", "constitutional-homeopathic-treatment"],
  },
  "diet-mistakes-for-diabetics": {
    slug: "diet-mistakes-for-diabetics",
    title: "5 Diet Mistakes Diabetics Make Daily — And How to Fix Them (Kolkata Dietitian's Guide)",
    metaDescription: "Kolkata's leading therapeutic dietitian Pampita Banerjee reveals the 5 most common diet mistakes diabetics make that worsen blood sugar control — and practical, culturally appropriate fixes.",
    category: "NUTRITION",
    author: "Pampita Banerjee, MSc Food & Nutrition, Diabetic Educator",
    readTime: "6 min read",
    publishDate: "April 2025",
    intro: "Managing diabetes through diet is one of the most powerful tools available — and one of the most misunderstood. In my years of practice as a therapeutic dietitian and certified Diabetic Educator at Heal & Cure Health Clinic, Uttarpara, I have seen the same dietary mistakes appear again and again in patients from Kolkata, Hooghly, Howrah, and across West Bengal. These mistakes are often made in good faith — following general advice from the internet, well-meaning relatives, or outdated dietary guidelines. The result is a silent worsening of blood sugar control that goes unnoticed until the next HbA1c test reveals the damage. Here are the five most common and correctable mistakes.",
    sections: [
      {
        heading: "Mistake 1: Eliminating Rice Entirely",
        content: "Rice is the staple grain of Bengal, and the first thing most newly diagnosed diabetics are told is to 'stop eating rice completely.' This is both incorrect and unsustainable. The glycaemic response to rice depends enormously on portion size, cooking method, and what you eat it with. A small portion of cooked rice (half a cup) eaten alongside a protein source (fish, dal, eggs) and vegetables significantly slows glucose absorption. The key is not elimination but strategic consumption — smaller portions, eaten at the right time of day (lunch rather than dinner, when insulin sensitivity is higher), and always combined with fibre and protein. Switching to parboiled or hand-pounded rice varieties also reduces the glycaemic impact compared to polished white rice. A blanket elimination of rice creates nutritional gaps, increases the craving for refined alternatives (maida-based foods), and is rarely maintained long-term."
      },
      {
        heading: "Mistake 2: Eating 'Diabetic' Biscuits and Sugar-Free Snacks",
        content: "The 'diabetic-friendly' food market is full of products that are worse for blood sugar than the foods they replace. Sugar-free biscuits are typically made with refined flour (maida), which has a higher glycaemic index than table sugar itself. They are also loaded with trans fats, artificial sweeteners, and sodium. Many patients eat these products guilt-free, consuming far more calories and carbohydrates than they realise. The safest snack choices for diabetics are whole-food-based: a handful of roasted chickpeas (chola), a boiled egg, a small portion of unsalted nuts, or a cup of moong dal chilla. These provide fibre, protein, and healthy fats that stabilise blood sugar rather than spike it. Read ingredient labels carefully. If 'refined wheat flour' (maida) or 'wheat flour' appears as the first ingredient, the product is not genuinely diabetic-friendly regardless of its marketing claims."
      },
      {
        heading: "Mistake 3: Skipping Meals to 'Save Calories'",
        content: "Skipping meals — particularly breakfast — is one of the most counterproductive strategies for diabetics. When you skip a meal, blood sugar drops, triggering a stress response that releases cortisol and glucagon. These hormones instruct the liver to release stored glucose, causing blood sugar to rise even without eating. When the next meal is eaten, the body, in a state of metabolic stress, over-absorbs glucose, causing a pronounced spike. For Type 2 diabetics, this roller-coaster pattern worsens insulin resistance over time. The optimal strategy is three balanced meals at regular intervals, with one or two small snacks if needed. Breakfast is particularly critical — a protein-rich breakfast (eggs, paneer, sprouts) taken within 90 minutes of waking sets a stable metabolic tone for the rest of the day."
      },
      {
        heading: "Mistake 4: Drinking Fruit Juices as a 'Healthy' Choice",
        content: "Fruit juice — even freshly squeezed, no-sugar-added juice — is one of the fastest ways to spike blood glucose. Juicing strips the fruit of its fibre, which is the primary mechanism that slows glucose absorption. What remains is essentially a concentrated solution of fructose and glucose that enters the bloodstream rapidly. A glass of orange juice may contain the sugar equivalent of four to five oranges without any of the fibre benefit. For diabetics in Kolkata who regularly consume 'healthy' morning juices, this is a significant and often unrecognised contributor to poor glycaemic control. The solution is simple: eat the whole fruit instead of drinking the juice. A small apple, half a guava, or a few segments of sweet lime eaten with their fibre intact have a dramatically lower glycaemic impact than their juiced equivalents."
      },
      {
        heading: "Mistake 5: Ignoring the Timing and Sequence of Food",
        content: "What you eat matters enormously — but so does when and in what order you eat it. Research consistently shows that eating vegetables and protein before carbohydrates at a meal significantly reduces the post-meal blood glucose spike, by as much as 30 to 40 percent in some studies. Starting a meal with a vegetable salad or sabzi, then eating dal or fish, and finally ending with your portion of rice is a simple sequencing strategy that most diabetics have never been taught. Meal timing also plays a critical role. Eating the largest meal of the day at lunch, when insulin sensitivity is at its peak, and keeping the evening meal light and early (before 7:30 pm) aligns eating patterns with the body's circadian metabolic rhythms. Late dinners are one of the most common unrecognised contributors to elevated fasting blood sugar readings in the morning."
      }
    ],
    faq: [
      { q: "Can a diabetic eat Bengali sweets like rasgolla or mishti doi?", a: "Occasionally and in very small amounts. Mishti doi has some probiotic value and a lower sugar load than most sweets. Rasgolla in syrup is high-GI. The key is never eating sweets alone — always after a balanced meal, and in small portions." },
      { q: "Is jaggery (gur) a safe alternative to sugar for diabetics?", a: "No. Jaggery raises blood sugar at nearly the same rate as refined sugar. While it contains trace minerals, it should not be used freely by diabetics. Moderate restriction applies just as with white sugar." },
      { q: "How many meals a day should a diabetic eat?", a: "Three balanced main meals with one or two small snacks works best for most people. The exact schedule should be personalised based on your medication, activity level, and blood sugar patterns by a qualified dietitian." },
    ],
    conclusion: "Effective diabetic nutrition is not about deprivation — it is about strategy, timing, and making smarter choices within a culturally familiar food framework. If you are a diabetic in Kolkata struggling to get your blood sugar under control despite following general dietary advice, a personalised consultation with a therapeutic dietitian can make a transformative difference. At Heal & Cure Health Clinic, Pampita Banerjee offers detailed, one-on-one diabetic nutrition counselling tailored to Bengali food culture and your specific clinical picture.",
    cta: "Book a Nutrition Consultation",
    relatedSlugs: ["homeopathy-for-diabetes", "managing-pcos-naturally"],
  },
  "constitutional-homeopathic-treatment": {
    slug: "constitutional-homeopathic-treatment",
    title: "What Is Constitutional Homeopathic Treatment? A Complete Guide",
    metaDescription: "Learn what constitutional homoeopathic treatment is, how it differs from symptomatic prescribing, and why it is the gold standard of classical homoeopathy — explained by Dr. Souvik Dutta, Kolkata.",
    category: "HOMEOPATHY",
    author: "Dr. Souvik Dutta, BHMS, MD(Hom.)",
    readTime: "8 min read",
    publishDate: "March 2025",
    intro: "If you have heard the phrase 'constitutional homoeopathic treatment' and wondered what it means, you are not alone. Many patients who come to Heal & Cure Health Clinic, Uttarpara, Kolkata have had previous experiences with homoeopathy — often involving pre-formulated combination remedies bought from a pharmacy or prescribed without detailed case-taking. Constitutional homoeopathy is something fundamentally different. It is the classical form of homoeopathic medicine as conceived by its founder Samuel Hahnemann in the 18th century, and it remains the most effective and scientific approach to homoeopathic prescribing available today.",
    sections: [
      {
        heading: "The Core Principle: Treat the Person, Not the Disease",
        content: "The defining principle of constitutional homoeopathy is that disease is not simply a malfunction of a specific organ or system — it is an expression of a disturbance in the entire individual. Two people with the same diagnosis — say, rheumatoid arthritis — may have completely different constitutional profiles. One patient may be restless, anxious, chilly, and craving warmth and company. The other may be reserved, irritable, worse in cold and damp weather, and prefer solitude. In constitutional homoeopathy, these two patients would receive entirely different remedies — Arsenicum album in the first case, and perhaps Bryonia or Rhus toxicodendron in the second — based on the totality of their individual symptoms, not their shared diagnosis. This is the essence of individualised medicine: the remedy is chosen for the person who has the disease, not for the disease itself."
      },
      {
        heading: "What Happens During a Constitutional Case-Taking?",
        content: "A constitutional case-taking at Heal & Cure is a detailed, unhurried conversation — typically lasting 60 to 90 minutes for an initial consultation. Dr. Souvik Dutta will explore your chief complaints in detail, but will also ask about aspects of your health and personality that may seem unrelated to your presenting condition. These include your thermal sensibility (are you predominantly chilly or warm?), your food desires and aversions, your sleep position and patterns, your emotional make-up, your response to stress and grief, your dreams, your energy patterns throughout the day, and the family history of disease. All of these factors contribute to the constitutional picture — the unique symptom constellation that, when matched to a homoeopathic remedy, produces the most healing response. This process is not a questionnaire exercise. It is a genuine clinical interview requiring skill, patience, and deep knowledge of homoeopathic Materia Medica."
      },
      {
        heading: "Constitutional vs. Symptomatic (Polypharmacy) Prescribing",
        content: "The most common form of homoeopathy available in India today is symptomatic or polypharmacy prescribing — giving multiple remedies based on specific symptoms or using pre-formulated combination products. A headache gets one remedy, indigestion gets another, anxiety gets a third. While this approach may provide temporary relief, it does not achieve the deep constitutional change that classical homoeopathy aims for. Constitutional prescribing uses a single, carefully selected remedy — the simillimum — that matches the patient's complete symptom picture. This single remedy acts on the vital force at the deepest level, producing changes that cascade through the physical, mental, and emotional planes. The results, when the simillimum is correctly identified, are often described by patients as transformative — not just an improvement in their primary complaint, but an overall sense of deeper vitality and wellbeing."
      },
      {
        heading: "How Long Does Constitutional Treatment Take?",
        content: "Constitutional homoeopathic treatment is a process, not a quick fix. The timeline depends on the nature of the condition, how long it has been present, the patient's overall vitality, and how closely the initial prescription approximates the simillimum. For acute conditions in healthy individuals with good vitality, significant improvement may be seen within days to weeks. For chronic conditions — especially those that have been present for years and involve multiple organ systems — constitutional treatment typically proceeds over several months to years. The direction of cure in classical homoeopathy follows Hering's Law: improvement proceeds from above downward, from within outward, from more important organs to less important organs, and in reverse order of appearance. Patients often report that old symptoms, long suppressed by conventional medicine, briefly reappear and then resolve permanently during constitutional treatment — a sign that the healing process is proceeding in the right direction."
      },
      {
        heading: "Which Conditions Respond Best to Constitutional Treatment?",
        content: "Constitutional homoeopathy is particularly effective for conditions with a strong constitutional component — those where the patient's individual make-up plays a significant role in the expression of the disease. These include chronic recurring infections (sinusitis, tonsillitis, UTIs), autoimmune conditions, skin disorders (eczema, psoriasis, urticaria), hormonal imbalances (thyroid disorders, PCOD, menstrual irregularities), mental health conditions (anxiety, depression, insomnia), migraine and headache disorders, childhood ailments (recurrent colds, bed-wetting, behavioural issues), and digestive disorders (IBS, GERD, chronic constipation). The common thread is chronicity and individuality — conditions where the standard 'one size fits all' approach of symptomatic treatment repeatedly fails to produce lasting results."
      }
    ],
    faq: [
      { q: "Can constitutional homoeopathy be taken alongside allopathic medicines?", a: "Yes. Homoeopathic remedies do not interact pharmacologically with conventional medicines. Many patients receive constitutional treatment alongside their prescribed allopathic medication, particularly for serious chronic diseases." },
      { q: "Is constitutional homoeopathy suitable for children?", a: "Absolutely. Children often respond particularly rapidly to constitutional treatment because their vital force is strong and they have fewer layers of chronic suppression. Paediatric constitutional prescribing is one of the most rewarding areas of classical homoeopathy." },
      { q: "How is the constitutional remedy chosen?", a: "The remedy is chosen by matching the complete symptom picture — physical, mental, and general — of the patient to the known pathogenetic effects of a homoeopathic remedy as documented in the Materia Medica. This requires deep clinical knowledge and experience." },
    ],
    conclusion: "Constitutional homoeopathic treatment is the most sophisticated and effective expression of homoeopathic medicine — a system that treats the whole person rather than isolated symptoms, and that seeks to restore health at the deepest possible level. If you have experienced disappointments with symptomatic homoeopathy or are looking for a truly personalised approach to your chronic condition, we invite you to experience classical constitutional prescribing at Heal & Cure Health Clinic, Uttarpara, Kolkata.",
    cta: "Book a Constitutional Consultation",
    relatedSlugs: ["homeopathy-for-diabetes", "why-children-respond-to-homeopathy"],
  },
  "managing-pcos-naturally": {
    slug: "managing-pcos-naturally",
    title: "Managing PCOS Naturally in Kolkata: Homoeopathy and Nutrition Combined",
    metaDescription: "Struggling with PCOS in Kolkata? Discover how a combined approach of classical homoeopathy and therapeutic nutrition can restore hormonal balance, regulate cycles, and address PCOS at its root. Expert advice from Heal & Cure Health Clinic.",
    category: "NUTRITION",
    author: "Pampita Banerjee, MSc Food & Nutrition & Dr. Souvik Dutta, BHMS, MD(Hom.)",
    readTime: "7 min read",
    publishDate: "March 2025",
    intro: "Polycystic Ovarian Syndrome (PCOS) — also called PCOD — is one of the most common hormonal disorders affecting women of reproductive age in India, with estimates suggesting that 1 in 5 women in urban areas is affected. In our clinic at Uttarpara, Kolkata, we see PCOS patients almost daily — young women struggling with irregular periods, painful cycles, acne, hair thinning, weight gain, and the emotional toll that comes with these symptoms. Conventional treatment typically involves oral contraceptive pills and Metformin, which manage symptoms but rarely address the underlying hormonal and metabolic dysregulation. At Heal & Cure, we offer an integrated approach combining classical homoeopathy with therapeutic nutrition — one that has produced significant results in our PCOS patient cohort.",
    sections: [
      {
        heading: "Understanding PCOS: Why a Root-Cause Approach Matters",
        content: "PCOS is fundamentally a metabolic-endocrine disorder with a significant constitutional component. At its core, most PCOS presentations involve insulin resistance — a condition where the body's cells fail to respond effectively to insulin, causing compensatory overproduction of insulin by the pancreas. Elevated insulin levels then stimulate the ovaries to produce excess androgens (male hormones), which disrupt follicle development, inhibit ovulation, and cause the classic PCOS symptoms — irregular cycles, cystic ovaries on ultrasound, excess facial and body hair (hirsutism), and scalp hair thinning. The inflammatory state associated with PCOS further complicates the picture. Addressing this multi-layered disorder requires more than symptom suppression. It requires restoring metabolic sensitivity, reducing systemic inflammation, and — from a homoeopathic perspective — correcting the constitutional predisposition that makes an individual susceptible to this specific pattern of hormonal imbalance."
      },
      {
        heading: "Homoeopathy for PCOS: Constitutional Prescribing for Hormonal Balance",
        content: "Classical homoeopathy approaches PCOS through the lens of constitutional prescribing — identifying the individual patient's unique symptom constellation and selecting a remedy that addresses the totality of her presentation. Key remedies frequently used in PCOS include Pulsatilla (for the patient who is emotionally sensitive, weepy, has changeable moods, and whose periods, when they come, are scanty and painful), Sepia (for the woman who feels emotionally flat, indifferent to loved ones, exhausted, and whose cycles are irregular with bearing-down pelvic sensations), Natrum muriaticum (for the reserved, sensitive patient with a strong grief history and irregular cycles worsened by consolation), and Calcarea carbonica (for the patient with weight gain tendency, cold feet, strong food cravings, and anxiety about health). These are examples — the actual prescription is always based on the complete individual case, not on a generalised protocol. Constitutional treatment over 3 to 6 months consistently produces measurable improvements in cycle regularity, reduction of androgen-related symptoms, and ultrasound evidence of cyst reduction in our clinical experience."
      },
      {
        heading: "Anti-Inflammatory Nutrition for PCOS: A Kolkata-Tailored Approach",
        content: "Nutritional intervention for PCOS must address insulin resistance and systemic inflammation simultaneously. At Heal & Cure, Pampita Banerjee develops personalised nutrition plans for PCOS patients that are built around the Bengali food culture while meeting modern clinical standards. The key nutritional principles for PCOS management include a low-glycaemic, high-fibre diet that prioritises whole grains (hand-pounded rice, oats, barley) over refined carbohydrates; adequate protein at every meal (eggs, fish, legumes, paneer) to reduce the glucose response and support hormone production; anti-inflammatory fats from mustard oil, fish, flaxseeds, and walnuts rather than refined vegetable oils; magnesium-rich foods (dark leafy greens, pumpkin seeds, dark chocolate in small amounts) which improve insulin sensitivity; and a significant reduction in processed foods, sugary beverages, and packaged 'health' products. In patients with significant insulin resistance, a time-restricted eating approach — eating within a 10 to 12 hour window — has shown additional benefit in improving insulin sensitivity and reducing androgen levels."
      },
      {
        heading: "The Combined Protocol: What Patients Experience",
        content: "In our clinical experience, the combination of constitutional homoeopathic treatment and personalised anti-inflammatory nutrition produces results that neither approach achieves alone. Patients who adopt both modalities typically report regular cycles within 3 to 4 months of treatment (compared to 6 to 12 months with nutrition alone), a more rapid reduction in acne and hair-related symptoms, better energy and mood stability, and — for those trying to conceive — improved ovulatory function. The synergy arises because constitutional homoeopathy works at the level of the body's regulatory intelligence, restoring the hormonal feedback mechanisms that PCOS disrupts, while therapeutic nutrition removes the dietary triggers (excess refined carbohydrates, inflammatory fats) and provides the raw materials (nutrients, antioxidants) that the restored hormonal system needs to function optimally. This is integrative medicine in its truest sense — not the mechanical combination of two separate treatments, but a coordinated clinical strategy where each element reinforces the other."
      }
    ],
    faq: [
      { q: "Can homoeopathy help with PCOS-related infertility?", a: "Constitutional homoeopathic treatment can improve ovulatory function in PCOS and has helped many patients conceive. It should be pursued under qualified medical supervision, and conventional fertility investigations should be completed before starting any natural treatment." },
      { q: "Is weight loss necessary to treat PCOS?", a: "Even a 5 to 10 percent reduction in body weight in overweight PCOS patients can significantly improve insulin sensitivity and restore cycle regularity. However, weight management in PCOS requires a specific nutritional approach — caloric restriction alone is often counterproductive." },
      { q: "How long does homoeopathic treatment for PCOS take?", a: "Most patients see initial improvements within 6 to 8 weeks. Significant hormonal changes typically require 4 to 6 months of consistent constitutional treatment alongside dietary modifications." },
    ],
    conclusion: "PCOS is a complex, multi-system condition that responds best to a comprehensive, individualised approach. At Heal & Cure Health Clinic, Uttarpara, Kolkata, our integrated protocol of classical homoeopathy and therapeutic nutrition has helped many young women reclaim hormonal balance, regular cycles, and renewed confidence. If you are struggling with PCOS in Kolkata or the surrounding areas of Hooghly, Howrah, or Serampore, we invite you to book a consultation and experience the difference of truly personalised care.",
    cta: "Book a PCOS Consultation",
    relatedSlugs: ["diet-mistakes-for-diabetics", "constitutional-homeopathic-treatment"],
  },
  "why-children-respond-to-homeopathy": {
    slug: "why-children-respond-to-homeopathy",
    title: "Why Children Respond So Well to Homoeopathy — A Paediatric Perspective",
    metaDescription: "Children are the most responsive patients in classical homoeopathy. Discover why paediatric homoeopathic treatment is safe, effective, and ideal for childhood ailments — from Dr. Souvik Dutta, Kolkata.",
    category: "HOMEOPATHY",
    author: "Dr. Souvik Dutta, BHMS, MD(Hom.)",
    readTime: "6 min read",
    publishDate: "February 2025",
    intro: "Of all the patient groups I treat at Heal & Cure Health Clinic, Uttarpara, Kolkata, children consistently produce the most gratifying responses to homoeopathic treatment. Parents who bring their children with chronic conditions — recurrent ear infections, asthma, eczema, bed-wetting, hyperactivity, or frequent tonsillitis — often express the same experience: after years of antibiotics, steroids, and symptomatic medications that manage but never cure, a single well-selected constitutional remedy produces changes that seem almost miraculous. There is nothing miraculous about it. There is a sound clinical reason why children respond so rapidly and deeply to homoeopathic treatment — and understanding that reason is key to appreciating what classical homoeopathy can achieve in paediatric care.",
    sections: [
      {
        heading: "The Vitality Factor: Why Children Heal Faster",
        content: "In homoeopathic philosophy, the capacity to respond to a therapeutic stimulus is directly related to the strength of the vital force — the innate, self-regulating intelligence that governs all physiological processes. In children, particularly those under 10 years of age, the vital force is at its strongest. It has not yet been depleted by decades of stress, chronic disease, suppressive medication, or environmental toxins. When a correctly chosen homoeopathic remedy acts as a stimulus to this strong vital force, the response is rapid, clear, and often dramatic. A constitutional remedy for a child's recurrent tonsillitis, correctly identified, may produce visible improvement within days — not because the remedy acts like an antibiotic (it does not), but because it stimulates the child's own immune and regulatory systems to resolve the underlying susceptibility that causes the tonsils to repeatedly become inflamed. This is the critical distinction: homoeopathy does not suppress symptoms; it removes the susceptibility that produces them."
      },
      {
        heading: "Fewer Layers of Suppression",
        content: "Adult patients who have had chronic conditions for decades — and have been treated with multiple rounds of antibiotics, steroids, antihistamines, and other suppressive medications — present with complex, layered case pictures. Each suppressive treatment has, in homoeopathic terms, driven the disease deeper, making the constitutional picture harder to read and the simillimum harder to identify. Children, especially those who have not yet had extensive conventional drug treatment, present with clear, uncomplicated constitutional pictures. Their symptoms are vivid, their constitutional type is often immediately apparent, and the simillimum can be identified more quickly and with greater confidence. This translates to faster, deeper, and more lasting therapeutic responses."
      },
      {
        heading: "Common Paediatric Conditions That Respond to Constitutional Homoeopathy",
        content: "The range of childhood conditions that respond well to classical constitutional homoeopathy is broad. Recurrent respiratory infections — tonsillitis, ear infections (otitis media), sinusitis, and recurrent bronchitis — are among the most common presentations in paediatric homoeopathic practice. Children who have been treated with repeated courses of antibiotics and still experience recurring infections are ideal candidates. Constitutional treatment addresses the underlying immunological susceptibility, reducing both the frequency and severity of infections over time. Allergic conditions — eczema, allergic rhinitis, asthma, and urticaria — respond particularly well to constitutional homoeopathy, which can achieve what conventional anti-allergic medication cannot: a genuine reduction in allergic sensitivity rather than mere suppression of the allergic response. Behavioural and neurodevelopmental conditions, including ADHD-like presentations, anxiety, sleep disorders, and bed-wetting (nocturnal enuresis), are also areas where constitutional homoeopathy has a significant evidence base and strong clinical track record."
      },
      {
        heading: "Safety Profile: Why Homoeopathy Is Ideal for Children",
        content: "One of the most significant concerns for parents is the safety of any treatment given to their child. Conventional medicines — including antibiotics, steroids, antihistamines, and bronchodilators — have well-documented side effects, some of which are of particular concern in growing children (antibiotic-related gut dysbiosis and its long-term immune consequences, corticosteroid effects on growth, and the sedating effects of first-generation antihistamines). Homoeopathic remedies in therapeutic doses are non-toxic, have no organ-specific toxicity, and do not interact with other medications. They are safe for newborns, infants, and children at every stage of development. The only risk in homoeopathy is an incorrect prescription — which produces no effect rather than a harmful one. This safety profile makes constitutional homoeopathy an ideal first-line approach for many paediatric conditions, and a valuable complementary approach for more serious conditions requiring conventional treatment."
      }
    ],
    faq: [
      { q: "At what age can a child start homoeopathic treatment?", a: "Homoeopathic treatment is safe from birth. Newborns and infants can be treated constitutionally. The case-taking for very young children focuses on the mother's description of the child's symptoms, temperament, and feeding patterns." },
      { q: "Can homoeopathy replace vaccination?", a: "No. Homoeopathy does not replace vaccination. Vaccines are evidence-based interventions against specific infectious diseases and should be followed as per the national immunisation schedule. Homoeopathy can be used alongside vaccination to support overall immune health." },
      { q: "My child is on antibiotics — can they start homoeopathy?", a: "Yes. Homoeopathic remedies can be started alongside antibiotic treatment. Once the acute infection has cleared, constitutional treatment can be initiated to address the underlying susceptibility and reduce recurrence." },
    ],
    conclusion: "Children are the most responsive and rewarding patients in homoeopathic practice. The combination of strong vital force, clear constitutional pictures, and fewer layers of therapeutic suppression makes paediatric homoeopathy one of the most effective applications of classical medicine available. If your child suffers from recurrent infections, allergies, skin conditions, or behavioural challenges, and you are looking for a safe, effective, and truly curative approach, we invite you to visit Heal & Cure Health Clinic, Uttarpara, Kolkata, for a detailed paediatric consultation.",
    cta: "Book a Paediatric Consultation",
    relatedSlugs: ["constitutional-homeopathic-treatment", "homeopathy-for-diabetes"],
  },
  "sedentary-lifestyle-kolkata": {
    slug: "sedentary-lifestyle-kolkata",
    title: "Kolkata's Hidden Health Crisis: How Sedentary Work Culture Is Harming Your Body — And What to Do About It",
    metaDescription: "Kolkata's growing sedentary work culture is silently driving a rise in lifestyle diseases. Learn how long desk hours are harming your health and what you can do — practical advice from Heal & Cure Health Clinic, Uttarpara.",
    category: "LIFESTYLE",
    author: "Dr. Souvik Dutta, BHMS, MD(Hom.) & Pampita Banerjee, MSc Nutrition",
    readTime: "6 min read",
    publishDate: "January 2025",
    intro: "Walk into any government office, IT company, or corporate sector workplace in Kolkata today, and you will find the same scene: rows of individuals seated at desks for 8 to 10 hours a day, with lunch eaten at their workstations, and commutes bookended by more sitting — in buses, metro trains, and cars. This is the reality of modern professional life in Kolkata, and it is producing a silent epidemic of lifestyle diseases that will define the city's public health landscape for the next generation. At Heal & Cure Health Clinic, we see the consequences every week: 28-year-olds with pre-diabetes, 35-year-olds with hypertension, 40-year-olds with chronic back pain and metabolic syndrome. The cause, in most cases, is not genetics alone — it is the profound metabolic disruption of a deeply sedentary lifestyle.",
    sections: [
      {
        heading: "What Sitting All Day Does to Your Body",
        content: "The human body was not designed for prolonged sitting. When we sit for extended periods, a cascade of metabolic disruptions begins within minutes. Lipoprotein lipase — the enzyme responsible for breaking down blood fats — virtually shuts down, causing triglyceride levels to rise. Insulin sensitivity decreases progressively with each hour of unbroken sitting, increasing the risk of Type 2 diabetes. The hip flexors shorten and tighten, the gluteal muscles become inactive (a phenomenon exercise scientists call 'gluteal amnesia'), and the spinal discs, deprived of the pumping action that movement provides, begin to degenerate. For the cardiovascular system, prolonged sitting reduces the venous return of blood from the legs, increasing the risk of deep vein thrombosis (DVT) and chronically elevated blood pressure. A landmark analysis of 13 studies found that people who sat for more than 8 hours a day with no physical activity had a risk of dying similar to those who smoke and are obese."
      },
      {
        heading: "The Kolkata-Specific Risk Factors",
        content: "Several factors make Kolkata's professional population particularly vulnerable to the health consequences of sedentary living. The traditional Bengali diet, while rich in nutritious elements like fish, lentils, and vegetables, also includes a high proportion of refined carbohydrates — white rice, maida, and sweets — that are metabolically disruptive when combined with inactivity. The city's traffic and infrastructure make active commuting (walking, cycling) difficult or impractical for most professionals. The culture of long working hours, particularly in government and corporate sectors, normalises desk-bound days of 9 to 11 hours. High ambient humidity and heat during much of the year discourage outdoor physical activity, particularly for those unaccustomed to exercising in hot conditions. Finally, the social culture of the city — centred around food-rich gatherings, adda (conversation over tea), and communal dining — adds further caloric load without a corresponding increase in energy expenditure."
      },
      {
        heading: "Practical Strategies That Actually Work in Kolkata",
        content: "The good news is that the health consequences of sedentary work can be significantly mitigated with relatively modest but consistent changes — changes that are realistic within the constraints of urban Kolkata life. The most evidence-backed intervention is breaking up sitting time. Research shows that taking a 2-minute walk every 30 minutes has a greater metabolic benefit than a single 30-minute exercise session at the end of the day. Set a phone alarm or use a standing reminder. Walk to a colleague's desk instead of messaging. Take phone calls standing or walking. At home, resist the pull of the sofa after dinner — a 15-minute post-dinner walk, a routine in many traditional families, has been shown to significantly reduce post-meal blood sugar spikes. For those with access to open spaces — Rabindra Sarobar, Eco Park, or even a local maidan — morning walks of 30 minutes at a brisk pace (sufficient to slightly elevate the heart rate) five days a week provide cardiovascular benefit that partially compensates for desk-bound days. Yoga and stretching routines, particularly those targeting hip flexors, thoracic spine, and hamstrings, can be done in 20 minutes at home and address much of the postural damage accumulation of desk work."
      },
      {
        heading: "Nutrition Strategies for the Sedentary Professional",
        content: "Physical activity alone cannot undo a poor diet, and dietary strategy for the sedentary professional requires a specific approach. Caloric needs are significantly lower for sedentary individuals than general dietary guidelines suggest. The standard advice to eat three full meals may result in caloric surplus for those who are largely inactive throughout the day. Smaller, nutrient-dense meals with adequate protein at each sitting help maintain muscle mass (which is progressively lost in sedentary lifestyles), regulate blood sugar, and prevent the energy dips and afternoon slumps that drive consumption of sugary chai and biscuits. Hydration is chronically neglected by office workers. Mild dehydration mimics hunger, drives unnecessary snacking, and reduces cognitive performance. Keeping a water bottle on the desk and targeting 2 to 2.5 litres of water per day is a simple, high-impact intervention. Reducing refined carbohydrates at the office lunch — eating less rice, more dal, vegetables, and fish — while keeping breakfast protein-rich, provides a much more stable metabolic profile for the sedentary professional than the traditional heavy lunch followed by an afternoon crash."
      }
    ],
    faq: [
      { q: "I have lower back pain from sitting all day. Can homoeopathy help?", a: "Yes. Constitutional homoeopathic treatment, combined with stretching and ergonomic corrections, can significantly reduce chronic lower back pain caused by sedentary work. Remedies are chosen based on the specific character of the pain and the individual's overall constitutional picture." },
      { q: "I have no time to exercise. What is the minimum I can do?", a: "Break your sitting time every 30 minutes with a 2-minute walk. Add a 15-minute post-dinner walk. This alone, consistently maintained, provides measurable metabolic benefit." },
      { q: "Can dietary changes alone reduce my risk of lifestyle diseases if I can't exercise?", a: "Dietary optimisation significantly reduces metabolic risk even without exercise. Reducing refined carbohydrates, increasing protein and fibre, and improving meal timing can collectively produce meaningful improvements in blood sugar, blood pressure, and weight." },
    ],
    conclusion: "The sedentary lifestyle that modern professional Kolkata demands is not going away — but its health consequences are not inevitable. Small, consistent changes in how you move, eat, and structure your day can produce significant metabolic benefits. At Heal & Cure Health Clinic, Uttarpara, Kolkata, we help working professionals identify and address the specific lifestyle factors driving their health concerns, with personalised homoeopathic and nutritional strategies that fit within real-world constraints. If you are experiencing the consequences of a sedentary lifestyle — weight gain, fatigue, back pain, or early metabolic disease — we invite you to book a consultation today.",
    cta: "Book a Lifestyle Health Consultation",
    relatedSlugs: ["diet-mistakes-for-diabetics", "managing-pcos-naturally"],
  },
};

const allArticles = Object.values(articles);

export default function ArticlePage() {
  const [, params] = useRoute("/health-tips/:slug");
  const slug = params?.slug ?? "";
  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[var(--bg-warm)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[var(--green-deep)] mb-4">Article Not Found</h1>
          <Link href="/health-tips" className="text-[var(--gold)] font-medium hover:underline">← Back to Health Tips</Link>
        </div>
      </div>
    );
  }

  const related = allArticles.filter(a => article.relatedSlugs.includes(a.slug));

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[var(--bg-warm)]">
      {/* Hero */}
      <div className={`${article.category === "NUTRITION" ? "bg-[var(--teal)]" : article.category === "LIFESTYLE" ? "bg-[var(--green-mid)]" : "bg-[var(--green-deep)]"} py-20`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/health-tips" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6 font-sans">
              <ArrowLeft className="w-4 h-4"/> Back to Health Tips
            </Link>
            <span className="inline-block bg-white/15 text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-4">{article.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm font-sans">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4"/>{article.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/>{article.readTime}</span>
              <span className="flex items-center gap-1.5"><Tag className="w-4 h-4"/>{article.publishDate}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          {/* Intro */}
          <p className="font-serif text-xl text-[var(--text-dark)] leading-relaxed mb-10 border-l-4 border-[var(--gold)] pl-6 italic">{article.intro}</p>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {article.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-serif text-2xl md:text-3xl text-[var(--green-deep)] mb-4">{section.heading}</h2>
                <p className="font-sans text-[var(--text-dark)] leading-relaxed text-base">{section.content}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <div className="mt-14 bg-[var(--bg-cream)] rounded-2xl p-8 border border-[var(--border)]">
              <h2 className="font-serif text-2xl text-[var(--green-deep)] mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-6">
                {article.faq.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-sans font-semibold text-[var(--text-dark)] mb-2">{item.q}</h3>
                    <p className="font-sans text-[var(--text-muted)] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conclusion */}
          <div className="mt-10 p-6 bg-white border border-[var(--border)] rounded-2xl">
            <p className="font-sans text-[var(--text-dark)] leading-relaxed">{article.conclusion}</p>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-[var(--green-deep)] rounded-2xl p-8 text-center">
            <p className="font-serif text-2xl text-white mb-2">Ready to take the next step?</p>
            <p className="font-sans text-white/70 text-sm mb-6">Personalised consultations at Heal & Cure Health Clinic, Uttarpara, Kolkata</p>
            <button
              onClick={() => window.Calendly?.initPopupWidget({ url: "SOUVIK_CALENDLY_URL" })}
              className="bg-[var(--gold)] text-[var(--text-dark)] px-8 py-3 rounded-full font-medium hover:bg-[var(--gold-light)] transition-all hover:scale-105"
            >
              {article.cta}
            </button>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-serif text-2xl text-[var(--green-deep)] mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/health-tips/${rel.slug}`}
                    className="block bg-white border border-[var(--border)] rounded-xl p-5 hover:border-[var(--gold)]/50 hover:shadow-md transition-all group">
                    <span className={`inline-block text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-2 ${rel.category === "NUTRITION" ? "bg-[var(--teal)]/10 text-[var(--teal)]" : "bg-[var(--green-deep)]/10 text-[var(--green-deep)]"}`}>{rel.category}</span>
                    <p className="font-serif text-lg text-[var(--text-dark)] group-hover:text-[var(--green-deep)] transition-colors leading-snug">{rel.title}</p>
                    <span className="font-sans text-xs text-[var(--gold)] mt-2 inline-block">Read Article →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
