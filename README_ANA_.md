Cum Funcționează?

1. Feature Extraction: Extragem caracteristici precum lungimea mesajului, numărul de majuscule, cuvinte cheie spam în română (gratuit, câștig/castig, bani, urgent), punctuație excesivă. Sistemul recunoaște cuvinte ATÂT cu diacritice CÂT și fără!

2. Algoritm Naive Bayes: Calculăm probabilitățile că un mesaj este spam sau ham pe baza caracteristicilor extrase din 24 mesaje în limba română.

3. Normalizare Text: Convertim textul fără diacritice (ă→a, î→i, ș→s, ț→t) pentru a detecta spam-ul chiar dacă e scris "castig" în loc de "câștig".

4. Scoring: Fiecare caracteristică contribuie la un scor final. Cuvinte precum "câștig", "gratuit", "urgent" cresc scorul de spam, iar mesaje normale cu întrebări cresc scorul legitim.

Cuvinte spam
Cuvânt CU diacritice | Cuvânt FĂRĂ diacritice | Pattern folosit
câștig, câștigat | castig, castigat | c[aâă][șs]tig
accesează | acceseaza | accese[aă]z[aă]
apasă | apasaap | as[aă]
vizitează | visiteaza | vizite[aă]z[aă]
ofertă | oferta | ofert[aă]
promoție | promotie | promo[țt]ie
grabă | graba | grab[aă]
recompensă | recompensa | recompens[aă]

Detector Spam ML (Română)

Acest proiect reprezintă un sistem de clasificare a mesajelor în SPAM sau HAM (legitime), antrenat pe un dataset în limba română și implementat în React. Modelul combină un Naive Bayes simplificat cu un sistem de scorare bazat pe reguli, optimizat pentru caracteristicile specifice mesajelor spam din limba română.

1. Funcționalități principale

- Clasificarea unui mesaj introdus de utilizator în SPAM / HAM
- Antrenarea automată a unui model Naive Bayes (simplificat)
- Extracția unui set extins de caracteristici lingvistice
- Calculul scorurilor SPAM/HAM pe baza regulilor adaptate limbii române
- Analiza explicabilă a rezultatului (scoruri + trăsături detectate)
- Vizualizare dataset prin grafic Pie (Recharts)
- Suport pentru mesaje cu și fără diacritice
- Interfață modernă cu TailwindCSS + Lucide Icons

2. Structura generală a proiectului

Componenta principală este SpamDetectorML.jsx, care conține:
SpamDetectorML
├── trainingData // Dataset cu mesaje SPAM/HAM
├── normalizeDiacritics() // Normalizare text fără diacritice
├── extractFeatures() // Extracție caracteristici
├── trainNaiveBayes() // Antrenarea modelului
├── predict() // Calcul scoruri + decizie finală
├── handleClassify() // Clasificarea mesajului utilizatorului
├── handleTrain() // Antrenarea inițială automată
└── UI React + Recharts // Interfață + grafice + rezultate

3. Datasetul de antrenament

Datasetul include mesaje:

SPAM: promoții false, câștiguri, link-uri suspecte

HAM: mesaje normale în română din contexte uzuale

Fiecare element are structura:

{ text: "...", label: 1 } // SPAM
{ text: "...", label: 0 } // HAM

4. Normalizarea textului

Pentru acuratețe, modelul normalizează automat diacriticele pentru a detecta corect cuvintele cheie:

ă â → a
î i → i
ș → s
ț → t

Astfel, „câștig” și „castig” sunt tratate identic.

5. Extracția caracteristicilor (Feature Extraction)

Funcția extractFeatures() extrage caractere numerice, lingvistice și semantice. Setul de caracteristici folosit:

5.1. Caracteristici structurale

length — lungimea mesajului
wordCount — numărul total de cuvinte
upperCaseCount — număr litere majuscule
upperCaseRatio — procent litere majuscule

5.2. Cuvinte cheie asociate spam-ului

Fiecare este booleean (0 / 1):

hasCastig – câștig, premiu, recompensa
hasGratuit – gratuit, gratis, cadou
hasBani – bani, lei, cash, credit
hasUrgent – urgent, acum, imediat, rapid
hasClick – click, accesează, link
hasOferta – ofertă, reducere, promoție

5.3. Simboluri suspecte

exclamationCount
questionCount

5.4. Prezența numerelor

hasNumbers
numberCount

6. Modelul Machine Learning: Naive Bayes Simplificat

Modelul grupează dataset-ul în două clase:

spamProb = total spam / total mesaje
hamProb = total ham / total mesaje

În versiunea aceasta Naive Bayes este utilizat pentru:

- structurarea datelor
- estimări de probabilitate
- baza regulilor de scorare

Clasificarea finală nu folosește direct formulele Bayesiene — scorarea rule-based este mai eficientă pentru un dataset redus în limba română.

7. Sistemul de scorare SPAM / HAM

Funcția predict() atribuie puncte pentru trăsături specifice.

7.1. Scor SPAM
Condiție Punctaj
conține cuvinte legate de câștig / premiu +2.5
conține „gratuit / gratis” +2
menționează bani / lei / credit +2
urgent / acum / rapid +1.5
conține click / link +1
ofertă / reducere +1.5
majuscule peste 30% +2
mai mult de 2 semne „!” +2
mesaj scurt + multe majuscule +1.5

7.2. Scor HAM
Condiție Bonus
mesaj 5–30 cuvinte +1
majuscule < 10% +1.5
fără semne „!” +0.5
între 1 și 2 semne de întrebare +1

7.3. Decizia finală
totalScore = spamScore - hamScore

dacă totalScore > 0 → SPAM
altfel → HAM

7.4. Nivelul de încredere
confidence = min( |totalScore| / 10 \* 100 , 100 )

8. Interfața și vizualizările

Componenta utilizează:

Recharts — afișează distribuția dataset-ului (PieChart)
TailwindCSS — stilizare modernă, responsive
Lucide React — iconografie
UI explicabil — afișează toate caracteristicile detectate

9. Rulare proiect
   npm install
   npm start

Aplicația va porni la:

http://localhost:5173

10. Posibile extinderi
    Model Naive Bayes complet (probabilități per-feature)
    Model Logistic Regression / SVM
    Export dataset extern
    Îmbunătățirea regulatorului pentru detecție avansată
    Antrenare cu un corp mare de mesaje reale

Rulare

cd .\spam-detector\
npm run dev
