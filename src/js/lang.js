const langSwitchDesktop = document.querySelector('.language__switch-desktop');
const langSwitchMobile = document.querySelector('.language__switch-mobile');



langSwitchDesktop.addEventListener('click', function () {
  this.classList.toggle('russian');
  langSwitchMobile.classList.toggle('active');
  toggleLanguage();
  updateYear();
});

langSwitchMobile.addEventListener('click', function () {
  this.classList.toggle('russian');
  langSwitchDesktop.classList.toggle('active');
  toggleLanguage();
  updateYear();
});

let currentLanguage = 'ru';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

  translations.forEach(({ selector, ru, en, multiple }) => {
    const elements = multiple 
      ? document.querySelectorAll(selector) 
      : [document.querySelector(selector)];

    elements.forEach((element) => {
      if (element) {
        if (typeof ru === 'string' && typeof en === 'string') {
          element.innerHTML = currentLanguage === 'ru' ? ru : en;
        } 
        
        else if (typeof ru === 'object' && typeof en === 'object') {
          const attrs = currentLanguage === 'ru' ? ru : en;
          Object.entries(attrs).forEach(([attr, value]) => {
            element.setAttribute(attr, value);
          });
        }
      }
    });
  });

  manageEnglishStylesheet(currentLanguage === 'en');
}

function manageEnglishStylesheet(enable) {
  const linkId = 'english-stylesheet'; 
  let link = document.getElementById(linkId);

  if (enable) {
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'src/css/english.css';
      document.head.appendChild(link);
    }
  } else {
    if (link) {
      link.remove();
    }
  }
}



const translations = [
  { selector: '.header__title', ru: 'владислав<br>подолян', en: 'vladislav<br>podolian' },
  { selector: '#navLinkInfo', ru: 'инфо', en: 'about' },
  { selector: '#navLinkCase', ru: 'кейсы', en: 'cases' },
  { selector: '#navLinkContact', ru: 'контакты', en: 'contact' },
  { selector: '.showreel__header', ru: 'креативный<br>продюсер', en: 'creative<br>producer' },
  { selector: '.showreel__text', ru: 'сценарист<br>криэйтор', en: 'scriptwriter<br>creator' },
  { 
    selector: '.showreel__play-hover', 
    ru: { src: '/src/img/icons/tooltip-ru.svg' }, 
    en: { src: '/src/img/icons/tooltip-en.svg' }
  },
  { 
    selector: '.info__text', 
    ru: 'салют! я влад, мне&nbsp;24. живу&nbsp;в&nbsp;москве. имею опыт работы как&nbsp;на&nbsp;агентской, так&nbsp;и&nbsp;на&nbsp;клиентской стороне. люблю, умею, практикую в&nbsp;продакшен полного цикла: смогу придумать, запитчить и&nbsp;засупервайзить идею для&nbsp;вашего бизнеса. летсгоу&nbsp;сотрудничать&nbsp;:)', 
    en: 'hey! it’s me vlad and i’m based in&nbsp;moscow but&nbsp;working worldwide. agency or&nbsp;client side? been there, done&nbsp;that, know the&nbsp;drill inside-out. i’m&nbsp;all&nbsp;about full-cycle production, from dreaming up big ideas and&nbsp;pitching ‘em to&nbsp;nailing down every step through to&nbsp;final delivery. if you’re after someone with a&nbsp;hands-on and&nbsp;no-bs approach, let’s team up and&nbsp;make some next-level stuff happen :)' 
  },
  { selector: '#skillCMP', ru: 'фрк 360', en: 'cmp 360' },
  { selector: '#skillShowrun', ru: 'шоуран', en: 'showrun' },
  { selector: '.brands__header', ru: 'я работал с этими брендами:', en: 'i’ve worked with these brands:' },
  { selector: '.teams__header', ru: 'и с этими командами:', en: 'and with these teams:' },
  { selector: '.cases__header', ru: 'вот мои кейсы:', en: 'here are my cases:' },
  { 
    selector: '.what-we-do', 
    ru: 'что делали мы:', 
    en: 'about:', 
    multiple: true 
  },
  { 
    selector: '.what-i-do', 
    ru: 'что делал я:', 
    en: 'my impact:', 
    multiple: true 
  },
  {
    selector: '#case-1-about',
    ru: 'летняя 360 кампания Okko вместе с&nbsp;Zebra Hero и ролик, снятый Андреем и&nbsp;Антоном Шавкеро.',
    en: 'Okko’s television commercial in&nbsp;collaboration with Zebra Hero, produced by&nbsp;Shavkero brothers.'
  },
  {
    selector: '#case-1-impact',
    ru: 'упаковка big idea, скриптрайтинг ролика, разверстка концепции на&nbsp;различные форматы: кейвижуалы, оффлайн, диджитал.',
    en: 'creation of the big idea, conceptual ideation, video scriptwriting, and&nbsp;creative oversight throughout the&nbsp;pre-&nbsp;and&nbsp;post-production.'
  },
  { selector: '#caseYandex', ru: 'яндекс', en: 'yandex' },
  {
    selector: '#case-2-about',
    ru: 'промо-кампания проекта “Искра” для&nbsp;Яндекс Музыки совместно с&nbsp;На&nbsp;Шуме, <a href="https://www.youtube.com/watch?v=33rFk4_IsEM" target="_blank">спешл</a> с&nbsp;участием Нашей Тани, Амуры и&nbsp;Liili.',
    en: '<a href="https://www.youtube.com/watch?v=33rFk4_IsEM" target="_blank">promo-campaign</a> for the Iskra project by Yandex Music, produced by&nbsp;On&nbsp;the&nbsp;Noise, featuring Nasha Tanya, Amura, and Liili.'
  },
  {
    selector: '#case-2-impact',
    ru: 'скриптдокторинг, сценарий монтажа.',
    en: 'script doctoring and directing the edit.'
  },
  {
    selector: '#case-3-about',
    ru: 'имиджевая фрк&nbsp;360 для&nbsp;Okko и&nbsp;ролик, снятый совместно со&nbsp;Stereotactic на&nbsp;саундтрек Тоси&nbsp;Чайкиной.',
    en: 'Okko’s summer 360 campaign featuring a&nbsp;video produced by Stereotactic, with the soundtrack by Tosya Chaikina.'
  },
  {
    selector: '#case-3-impact',
    ru: 'упаковка big&nbsp;idea, скриптрайтинг ролика, разработка джингла и&nbsp;саундтрека, разверстка концепции на&nbsp;различные форматы.',
    en: 'creation of the big idea, video scriptwriting, jingle and soundtrack developing, and expanding the concept across offline and digital platforms.'
  },
  {
    selector: '#case-3-award',
    ru: '<span class="case__description_color_green case__description_color_green_award">МедиаБренд 2024</span><br>лучший<br>имиджевый проморолик',
    en: '<span class="case__description_color_green case__description_color_green_award">MediaBrand 2024</span><br>the best<br>image promo video'
  },
  { selector: '#caseToples', ru: 'топлес', en: 'toples' },
  {
    selector: '#case-4-about',
    ru: 'большой <a href="https://www.youtube.com/watch?v=K17DKfhYgCk" target="_blank">выпуск</a> НаШуме с&nbsp;Яном Топлесом в&nbsp;честь <span style="white-space: nowrap;">10-летия</span> его проекта.',
    en: 'On the Noise’s <a href="https://www.youtube.com/watch?v=K17DKfhYgCk" target="_blank">episode</a> featuring Ian Toples, celebrating the 10th project’s anniversary'
  },
  {
    selector: '#case-4-impact',
    ru: 'скриптрайтинг,<br>упаковка коммерческих интеграций.',
    en: 'scriptwriting and developing commercial integrations.'
  },
  {
    selector: '#case-5-about',
    ru: 'гала-ивент в&nbsp;кинотеатре “Октябрь” перед стартом нового сезона.',
    en: 'the gala event at the "October" cinema marking the start of Okko’s new season.'
  },
  {
    selector: '#case-5-impact',
    ru: 'упаковка big&nbsp;idea, разработка визуальной айдентики, разверстка на&nbsp;различные носители и&nbsp;посмы.',
    en: 'сreation of the big idea, visual identity developing and deployment across various media and posms.'
  },
  {
    selector: '#case-5-award-1',
    ru: '<span class="case__description_color_red case__description_color_red_award">МедиаБренд 2023</span><br>лучший проморолик<br>специального события',
    en: '<span class="case__description_color_red case__description_color_red_award">MediaBrand 2023</span><br>the best promo video<br>for a special event'
  },
  {
    selector: '#case-5-award-2',
    ru: '<span class="case__description_color_red case__description_color_red_award">МедиаБренд 2023</span><br>лучший имиджевый<br>ролик онлайн-кинотеатра',
    en: '<span class="case__description_color_red case__description_color_red_award">MediaBrand 2023</span><br>the best image video<br>for an online cinema'
  },
 
  { selector: '#caseBlueprint', ru: 'блюпринт', en: 'blueprint' },
  {
    selector: '#case-6-about',
    ru: '<a href="https://theblueprint.ru/culture/special/okko-zritelskiy-opyt" target="_blank">спецпроект</a> о&nbsp;насмотренности и&nbsp;зрительском опыте совместно с&nbsp;Blueprint при&nbsp;участии Риналя Мухаметова, Софии Лебедевой и&nbsp;Лизы Ищенко.',
    en: '<a href="https://theblueprint.ru/culture/special/okko-zritelskiy-opyt" target="_blank">special project</a> on viewer experience in&nbsp;collaboration with Blueprint, featuring Rinal Mukhametov, Sofia Lebedeva, and&nbsp;Lisa Ishchenko.'
  },
  {
    selector: '#case-6-impact',
    ru: 'разработка капсулы мерча, упаковка идеи и&nbsp;смыслов, креативный супервайзинг лендинга.',
    en: 'creation of the clothing capsule, conceptual ideation, and creative oversight of the landing page.'
  },
  {
    selector: '#case-6-award',
    ru: '<span class="case__description_color_green case__description_color_green_award">МедиаБренд 2023</span><br>лучшая брендированная<br>или сувенирная продукция',
    en: '<span class="case__description_color_green case__description_color_green_award">MediaBrand 2023</span><br>best branded<br>or souvenirs production'
  },

  {
    selector: '#case-7-about',
    ru: 'дженерик-видео для фестивалей<br>и кинотеатров под саундтрек “смотри&nbsp;меня,&nbsp;смотри”.',
    en: 'generic promo video for festivals<br>and cinemas.'
  },
  {
    selector: '#case-7-impact',
    ru: 'упаковка идеи,<br>разработка саундтрека.',
    en: 'concept creation,<br>soundtrack developing.'
  },
  {
    selector: '#case-7-award-1',
    ru: '<span class="case__description_color_blue case__description_color_red_award">МедиаБренд 2024</span><br>лучший<br>контентный проморолик',
    en: '<span class="case__description_color_blue case__description_color_red_award">MediaBrand 2024</span><br>the best<br>content promo video'
  },
  {
    selector: '#case-7-award-2',
    ru: '<span class="case__description_color_blue case__description_color_red_award">МедиаБренд 2024</span><br>лучший<br>имиджевый проморолик',
    en: '<span class="case__description_color_blue case__description_color_red_award">MediaBrand 2024</span><br>the best<br>image promo video'
  },
  {
    selector: '#case-7-award-3',
    ru: '<span class="case__description_color_blue case__description_color_red_award">МедиаБренд 2024</span><br>лучший<br>оригинальный саундтрек',
    en: '<span class="case__description_color_blue case__description_color_red_award">MediaBrand 2024</span><br>the best<br>original soundtrack'
  },
  { selector: '.form__title', ru: 'поработаем?', en: 'ready to collab?' },
  { selector: '.form__description',
    ru: 'расскажите подробнее<br>про<span id="dynamic-word">идею</span>',
    en: 'let’s talk<br>about the<span id="dynamic-word">idea</span>'
  },
  { selector: '#fulltime', ru: 'фултайм', en: 'full-time' },
  { selector: '#freelance', ru: 'фриланс', en: 'freelance' },
  { selector: '#outsorce', ru: 'аутсорс', en: 'outsourcing' },
  { selector: '#other', ru: 'другое', en: 'other' },
  { 
    selector: '#name', 
    ru: { placeholder: 'имя' }, 
    en: { placeholder: 'name' }
  },
  { 
    selector: '#message', 
    ru: { placeholder: 'комментарий' }, 
    en: { placeholder: 'message' }
  },
  { selector: '#file-label', ru: 'прикрепить бриф', en: 'upload the brief' },
  { selector: '.form__checkbox-text',
    ru: 'Я соглашаюсь с <a href="personal_data.pdf" target="_blank">условиями</a> обработки и использования моих персональных данных.',
    en: 'I agree to the <a href="personal_data.pdf" target="_blank">terms</a> of processing and use of my personal data.'
  },
  { 
    selector: '#submitButton', 
    ru: { value: 'отправить' }, 
    en: { value: 'send' }
  },
  { selector: '.footer__copy',
    ru: '<p>© <span id="currentYear"></span> Владислав Подолян. Все&nbsp;права&nbsp;защищены.<p><a href="/policy.pdf" target="_blank">политика конфиденциальности</a>',
    en: '<p>© <span id="currentYear"></span> Vladislav Podolian. All&nbsp;rights&nbsp;reserved.<p><a href="/policy.pdf" target="_blank">privacy policy</a>'
  },

  { selector: '#startButton', ru: 'играть', en: 'play' },
  { selector: '#restartButton', ru: 'еще разок? :)', en: 'one more time? :)' },

  { selector: '#thanks', ru: 'спасибо!<br>я скоро вам напишу :)', en: 'appreciate!<br>i’ll hit you up shortly :)' },
  { selector: '#closeBtn', ru: 'продолжить', en: 'continue' },
];