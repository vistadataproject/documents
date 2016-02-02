<p align="center">
  <img src="http://i.dailymail.co.uk/i/pix/2012/10/23/article-0-0E22064400000578-261_634x503.jpg" 
  width="160px" height="120px" />

  <img src="http://www.spacelabshealthcare.com/wp-content/uploads/2013/08/elance-vital_500px.png" 
  width="160px" height="120px" />

  <img src="http://www.device.com.au/wp-content/themes/custom/js/timthumb.php?src=http://www.device.com.au/wp-content/uploads/2013/11/visi_mobile.png&w=460&h=345" 
  width="160px" height="120px" />

  <img src="http://www.mindtrek.org/wp-content/uploads/sites/3/2014/10/quantified-self-710x400.jpg" 
  width="160px" height="120px" />
</p>


## MetaVitals: A Metadata standard for Vital Signs

**Vital Signs measurement technology is evolving and becoming ubiquitous.**  It is getting smaller, going mobile, and going personal. Collecting vital signs used to be reserved for sick people in hospitals; now it is for well people in thier homes. Whether in sickness or in health, in hospitals or the the home, vital signs are a universally understood measure of health.

**Application in the Home**.  MetaVitals is useful to physiologists, fitness and wellness professionals, personal trainers, athletes, or anyone interested in the capture, analysis, and communication of real-time physiologic information - whether to monitor sickness (medical) or wellness (atheletes).

**Application in the Hospital.** The most 'vitals-intensive' area in of patient care in the hospital is anesthesia and critical care.  With this new communication standard for high density multi-modal physiological monitoring, as well as a mechanism to annotate concurrent discrete events (actions or observations), most of the "hard" problems of representing the anesthesia record are addressed.  The remaining data collected during the perioperative period is measured only once and is static (no velocity, no variablity, minimal volume) and therefore relatively easy to to model. Such a vocabulary to describe vitals will provide much more standadized handoffs between providers in the most efficient and meaningful way possible.

**Hospital care needs a bridge to Home care**. A new method to exchange this new source of patient-generated mobile vitals data with medical information systems in hospitals is necessary. This proposal addresses this gap for a standard exchangeable medium that crosses all boundaries fromhospitals, clinics, extended nusing care, homes, and all other locations where patients live or are cared for. This bridge will allow maximum portability of the patients vitals information, and incorporate it into clinical and lifstyle settings.


## MetaVitals: A Vocabulary for Decribing Vitals Precisely, with Nuance**

* **Nuance:** Qualitative, human description of entire trend (monotonic up/down; "smooth", within 20% baseline, spike/wave). This may have several enumerations of encoding, as well as provide free text.
* **Precision:** Objective, machine description of entire trend (descriptive statistics: N, Tstart, Tend, median, mode)
Objective comparison (of mode or median) with baseline, chronic value preoperatively
* **Context** information: who, what, when, where
* **Quality** info: measured date, expiration date, etc.

**Analogy**: the Cardiologists have developed a rich vocabulary for describing the EKG waveform, some using objective measures (mechine calculated: ST elevation/deprression, RR intervale, QRS width) and some using qualitative measures (human assessment of overall patterns, such as atrial fibrillation, VTach, etc).


**Benefits of MetaVitals**  Vital signs data can quickly reach large amounts of data (millions or billions) making it very difficult to navigate. In addition, because the raw data often contains artifacts, pure machine analysis (trend analysis, regression, descriptive statistics) will yield inaccurate results. Therefore human summarization through annotation and metatagging data allows us to do searches and cohort selection based on the metadata, rather than on the raw unprocessed, untiltered, sometimes inaccurate / artifact-laden data.

**Inspired by the fitness world**:  This Vitals model and metadata has broad appliation for Health, Wellness, and Healthcare in the broad population not just sick patients in the hospital. 


## MetaVitals: The Foundation for an Anesthesia Model

Anesthesia data is sharply devided between discrete **static data** that is invariant over time (such as patient and procedure data collected in the pre- and post-op periods), from the **dynamic data** that is changing continously over time (vitals and other observations/events) during the intraop period. The structure of these two categories of data are so different it makes creating an anthesia model challenging. By separating these two categories, and focusing only on the dyamic data, this separates concerns, and makes the model tractable. This leaves only the "easy" task of modeling preop or postop data, which is fairly standard medical charting of discrete data.

The MetaVitals standard models the dynamic, continuously changing data only.  By vitue of a standard vocabulary to describe and summarize time-variant and streaming data and their trends this acts as a human "first-pass filter" and classification scheme to extract the knowledge and patterns of these trends, which humans can do far better than machines even today.


***

### Health and Fitness Data Standards

**GPX - GPS Exchange Format**
* https://en.wikipedia.org/wiki/GPS_Exchange_Format
* http://www.earlyinnovations.com/gpsphotolinker/about-gpx-and-tcx-file-formats.html

**TCX - Training Center XML** 
* https://en.wikipedia.org/wiki/Training_Center_XML
* Is same as GPX, plus tracks for HR, cadence calories, and summary data in the form of laps  

**PWX - PowerAgent Export file**
* A Timex proprietary format; no other vendors use it.

***
### Vendor Data, Tools, Standards, and Schemas

**Garmin**
* Features:  https://connect.garmin.com/en-US/features/
* Metadata:  https://connect.garmin.com/features/export
* Garmin XSD Library:  http://www8.garmin.com/xmlschemas/index.jsp#/web/docs/xmlschemas

***
**Apple HealthKit**
* https://developer.apple.com/library/ios/documentation/HealthKit/Reference/HealthKit_Framework/
* https://forum.quantifiedself.com/thread-healthkit?highlight=export%2bdata
* Based on the forums the export is nonstandard XML:
* http://blog.zenobase.com/post/100624681047
* Quantified Self Access app provides some data:
* http://quantifiedself.com/access-app/app

***
**Nike**
* Only limited data export capability -> further investigate
* http://fieldguide.gizmodo.com/export-your-data-to-get-more-from-your-fitness-tracker-1639466864
* https://mattstuehler.com/lab/NikePlus/

***
**Fitbit**
* Exports TXC file +  4 categories of data: Body, Foods, Activities, Sleep
* http://help.fitbit.com/articles/en_US/Help_article/Can-I-export-my-fitness-data-to-my-computer

***
### The Quantified Self: Integrating Personal Fitness Data

* http://quantifiedself.com/
* Contains great visualizations of personal health data -> good starting point for MetaVitals visualization
* Search the forum for 'data export'
* https://forum.quantifiedself.com/
* One does not find too much export happening. -> continue investion and query the forum directly.
* Other posts don't suggest much data export / integration is happening:
* http://www.theverge.com/2013/1/11/3866228/body-request-give-me-back-my-data
* http://www.theverge.com/2013/6/4/4392996/fitness-tracker-data-platforms-launch-giving-users-control
* File/Activity Converters and Exporters:
* http://www.dcrainmaker.com/tools
* http://www.pwx2gpx.com/
* Data Aggregation/Integration Apps
* https://zenobase.com/#/


**Takehome message**
* Fitness data integration is not happening acros devices because there is no data standard.
* This is a large gap that we can fill with MetaVitals extension to Schema.org or to HealthSchema.org

***
Note:  A public-facing website has been reserved for release of this standard at the right time
* Github: https://github.com/metavitals
* Public: https://metavitals.org 


## Vitals Schema: Schema.org to the rescue?

Searching for "vitals" in Schema.org comes up with a blank.
https://schema.org/docs/meddocs.html

The only thing remotely close to a vital sign is: 
https://schema.org/MedicalSign

**Therefore, this is a "Greenfield" area for us to define this as we want!**




