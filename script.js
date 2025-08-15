const translations = {
    en: {
        metaDescription: "Fun calculator to estimate vaginal distance traveled, for mathematical curiosity!",
        title: "Vaginal Mileage Calculator",
        subtitle: "Calculate Your Vaginal Mileage",
        instructions: "Enter the data to find out how far you've traveled! 🌸",
        labelStartAge: "Age of first sexual activity (years):",
        labelCurrentAge: "Current age (years):",
        labelFrequencyMonthly: "Average monthly frequency of intercourse:",
        labelDurationMinutes: "Average duration of intercourse (minutes):",
        labelPenisLength: "Average penis length (cm):",
        labelCyclesPerMinute: "Penetration cycles per minute:",
        calculateButton: "Calculate Mileage! 👄",
        disableSound: "Disable Sound",
        enableSound: "Enable Sound",
        warning: "Warning: This calculator contains explicit themes and is intended for an adult audience for mathematical curiosity.",
        disclaimer: "Note: This is a theoretical calculation for curiosity purposes. The vagina does not experience 'wear' like a mechanical object. Consult a doctor for vaginal health information.",
        resultErrorInvalid: "Error: Please enter valid numeric values.",
        resultErrorStartAge: "Error: Starting age cannot be less than 17 years.",
        resultErrorAgeOrder: "Error: Current age must be greater than starting age.",
        resultErrorNegative: "Error: Values cannot be negative.",
        resultYearsActive: "Years of sexual activity",
        chartLabel: "Passion Moments (km)",
        chartTooltip: (year, distance, isLegend) => isLegend ? `Age: ${year}, Distance: ${distance} km (OnlyFans Peak!)` : `Age: ${year}, Distance: ${distance} km`,
        comparisons: {
            level1: (km) => `Wow, you've traveled ${km} km, like a walk from New York to Jersey City (~10 km)! 🌷`,
            level2: (km) => `Great! You've traveled ${km} km, like a marathon (42 km)! 🏃‍♀️`,
            level3: (km) => `Fantastic! You've traveled ${km} km, like a trip from New York to Washington, D.C. (~360 km)! 🚗`,
            level4: (km) => `Great! You've traveled ${km} km, like from New York to Boston (~350 km)! 🚂`,
            level5: (km) => `Incredible! You've traveled ${km} km, like from New York to Chicago (~1200 km)! ✈️`,
            level6: (km) => `Amazing! You've traveled ${km} km, like from New York to Miami (~1800 km)! 🏖️`,
            level7: (km) => `Wow, you've traveled ${km} km, like from New York to Los Angeles (~4000 km)! 🚀`,
            level8: (km) => `Epic! You've traveled ${km} km, like a coast-to-coast trip across the USA (~4500 km)! 🇺🇸`,
            level9: (km) => `Monumental! You've traveled ${km} km, like the width of the USA (~4800 km)! 🗽`,
            level10: (km) => `Legendary! You've traveled ${km} km, like a transcontinental journey (~6000 km)! 🌎`,
            level11: (km) => `Fantastic! You've traveled ${km} km, like from New York to Tokyo (~10800 km)! ✈️`,
            level12: (km) => `Mythical! You've traveled ${km} km, like from New York to Sydney (~16000 km)! 🌏`,
            earthMoon: (km) => `Galactic! You've traveled ${km} km, more than the Earth-Moon distance (~384400 km)! 🌕`
        },
        rewards: {
            romantic: "Romantic Explorer!",
            passionate: "Passionate Traveler!",
            epic: "Epic Champion!",
            galactic: "Galactic Legend!",
            highActivity: [
                { icon: "👑", message: "OnlyFans Legend! Your passion rules the web!" },
                { icon: "🎤", message: "Passion Icon! A star that lights up social media!" },
                { icon: "💫", message: "Sensual Star! Your energy is viral!" }
            ]
        }
    },
    it: {
        metaDescription: "Calcolatore divertente per stimare la distanza vaginale percorsa, per curiosità matematica!",
        title: "Pussy Kilometer",
        subtitle: "Calcolatore di Chilometraggio Vaginale",
        instructions: "Inserisci i dati per scoprire quanta strada hai percorso! 🌸",
        labelStartAge: "Età di inizio attività sessuale (anni):",
        labelCurrentAge: "Età attuale (anni):",
        labelFrequencyMonthly: "Frequenza media rapporti al mese:",
        labelDurationMinutes: "Durata media rapporto (minuti):",
        labelPenisLength: "Lunghezza media del pene (cm):",
        labelCyclesPerMinute: "Cicli di penetrazione al minuto:",
        calculateButton: "Calcola Chilometraggio! 👄",
        disableSound: "Disattiva Audio",
        enableSound: "Attiva Audio",
        warning: "Avviso: Questo calcolatore contiene temi espliciti ed è destinato a un pubblico adulto per scopi di curiosità matematica.",
        disclaimer: "Nota: Questo è un calcolo teorico per curiosità. La vagina non subisce 'usura' come un oggetto meccanico. Consulta un medico per informazioni sulla salute vaginale.",
        resultErrorInvalid: "Errore: Inserisci valori numerici validi.",
        resultErrorStartAge: "Errore: L'età di inizio non può essere inferiore a 17 anni.",
        resultErrorAgeOrder: "Errore: L'età attuale deve essere maggiore dell'età di inizio.",
        resultErrorNegative: "Errore: I valori non possono essere negativi.",
        resultYearsActive: "Anni di attività sessuale",
        chartLabel: "Momenti di Passione (km)",
        chartTooltip: (year, distance, isLegend) => isLegend ? `Età: ${year}, Distanza: ${distance} km (Picco OnlyFans!)` : `Età: ${year}, Distanza: ${distance} km`,
        comparisons: {
            level1: (km) => `Wow, hai percorso ${km} km, come una passeggiata da Roma a Frascati (~20 km)! 🌷`,
            level2: (km) => `Grande! Hai percorso ${km} km, come una maratona (42 km)! 🏃‍♀️`,
            level3: (km) => `Fantastico! Hai percorso ${km} km, come una fuga in barca da Napoli a Capri (~40 km)! ⛵`,
            level4: (km) => `Grande! Hai percorso ${km} km, come da Roma a Siena (~185 km)! 🚗`,
            level5: (km) => `Incredibile! Hai percorso ${km} km, come da Roma a Firenze (~250 km)! 🚂`,
            level6: (km) => `Stupefacente! Hai percorso ${km} km, come da Milano a Ginevra (~300 km)! 🏔️`,
            level7: (km) => `Wow, hai percorso ${km} km, come da Roma a Venezia (~400 km)! 🛶`,
            level8: (km) => `Epico! Hai percorso ${km} km, come da Roma a Monaco (~700 km)! ✈️`,
            level9: (km) => `Monumentale! Hai percorso ${km} km, come la lunghezza dell’Italia (~1000 km)! 🇮🇹`,
            level10: (km) => `Leggendario! Hai percorso ${km} km, come un viaggio sulla Transiberiana (~3000 km)! 🚆`,
            level11: (km) => `Fantastico! Hai percorso ${km} km, come da Roma a Tokyo (~9900 km)! ✈️`,
            level12: (km) => `Mitico! Hai percorso ${km} km, come da Roma a Sydney (~13000 km)! 🌏`,
            earthMoon: (km) => `Galattico! Hai percorso ${km} km, più della distanza Terra-Luna (~384400 km)! 🌕`
        },
        rewards: {
            romantic: "Romantica Esploratrice!",
            passionate: "Viaggiatrice Appassionata!",
            epic: "Campionessa Epica!",
            galactic: "Leggenda Galattica!",
            highActivity: [
                { icon: "👑", message: "OnlyFans Legend! La tua passione domina il web!" },
                { icon: "🎤", message: "Icona della Passione! Una star che incendia i social!" },
                { icon: "💫", message: "Star Sensuale! La tua energia è virale!" }
            ]
        }
    },
    es: {
        metaDescription: "¡Calculadora divertida para estimar la distancia vaginal recorrida, por curiosidad matemática!",
        title: "Calculadora de Kilometraje Vaginal",
        subtitle: "Calcula tu Kilometraje Vaginal",
        instructions: "¡Ingresa los datos para descubrir cuánto has recorrido! 🌸",
        labelStartAge: "Edad de inicio de actividad sexual (años):",
        labelCurrentAge: "Edad actual (años):",
        labelFrequencyMonthly: "Frecuencia media de relaciones al mes:",
        labelDurationMinutes: "Duración media de la relación (minutos):",
        labelPenisLength: "Longitud media del pene (cm):",
        labelCyclesPerMinute: "Ciclos de penetración por minuto:",
        calculateButton: "¡Calcular Kilometraje! 👄",
        disableSound: "Desactivar Sonido",
        enableSound: "Activar Sonido",
        warning: "Advertencia: Esta calculadora contiene temas explícitos y está destinada a un público adulto por curiosidad matemática.",
        disclaimer: "Nota: Este es un cálculo teórico con fines de curiosidad matemática. La vagina no sufre 'desgaste' como un objeto mecánico. Consulta a un médico para información sobre la salud vaginal.",
        resultErrorInvalid: "Error: Ingresa valores numéricos válidos.",
        resultErrorStartAge: "Error: La edad de inicio no puede ser menor a 17 años.",
        resultErrorAgeOrder: "Error: La edad actual debe ser mayor que la edad de inicio.",
        resultErrorNegative: "Error: Los valores no pueden ser negativos.",
        resultYearsActive: "Años de actividad sexual",
        chartLabel: "Momentos de Pasión (km)",
        chartTooltip: (year, distance, isLegend) => isLegend ? `Edad: ${year}, Distancia: ${distance} km (¡Pico de OnlyFans!)` : `Edad: ${year}, Distancia: ${distance} km`,
        comparisons: {
            level1: (km) => `¡Wow, has recorrido ${km} km, como un paseo de Madrid a Alcalá de Henares (~35 km)! 🌷`,
            level2: (km) => `¡Genial! Has recorrido ${km} km, como una maratón (42 km)! 🏃‍♀️`,
            level3: (km) => `¡Fantástico! Has recorrido ${km} km, como de Madrid a Valencia (~350 km)! 🚗`,
            level4: (km) => `¡Genial! Has recorrido ${km} km, como de Madrid a Barcelona (~600 km)! 🚂`,
            level5: (km) => `¡Increíble! Has recorrido ${km} km, como de Madrid a Sevilla (~550 km)! ✈️`,
            level6: (km) => `¡Asombroso! Has recorrido ${km} km, como la anchura de España (~1000 km)! 🇪🇸`,
            level7: (km) => `¡Wow, has recorrido ${km} km, como de Madrid a Lisboa (~600 km)! 🛶`,
            level8: (km) => `¡Épico! Has recorrido ${km} km, como de Madrid a París (~1100 km)! ✈️`,
            level9: (km) => `¡Monumental! Has recorrido ${km} km, como la longitud de España (~1500 km)! 🇪🇸`,
            level10: (km) => `¡Legendario! Has recorrido ${km} km, como de Madrid a Moscú (~3400 km)! 🚆`,
            level11: (km) => `¡Fantástico! Has recorrido ${km} km, como de Madrid a Tokio (~10700 km)! ✈️`,
            level12: (km) => `¡Mítico! Has recorrido ${km} km, como de Madrid a Sídney (~17600 km)! 🌏`,
            earthMoon: (km) => `¡Galáctico! Has recorrido ${km} km, más que la distancia Tierra-Luna (~384400 km)! 🌕`
        },
        rewards: {
            romantic: "¡Exploradora Romántica!",
            passionate: "¡Viajera Apasionada!",
            epic: "¡Campeona Épica!",
            galactic: "¡Leyenda Galáctica!",
            highActivity: [
                { icon: "👑", message: "¡Leyenda de OnlyFans! ¡Tu pasión domina la web!" },
                { icon: "🎤", message: "¡Ícono de la Pasión! ¡Una estrella que enciende las redes!" },
                { icon: "💫", message: "¡Estrella Sensual! ¡Tu energía es viral!" }
            ]
        }
    },
    ru: {
        metaDescription: "Весёлый калькулятор для оценки вагинального пробега, для математического любопытства!",
        title: "Калькулятор Вагинального Пробега",
        subtitle: "Рассчитай свой вагинальный пробег",
        instructions: "Введи данные, чтобы узнать, как далеко ты прошёл! 🌸",
        labelStartAge: "Возраст начала половой активности (годы):",
        labelCurrentAge: "Текущий возраст (годы):",
        labelFrequencyMonthly: "Средняя частота половых актов в месяц:",
        labelDurationMinutes: "Средняя продолжительность акта (минуты):",
        labelPenisLength: "Средняя длина пениса (см):",
        labelCyclesPerMinute: "Циклы проникновения в минуту:",
        calculateButton: "Рассчитать пробег! 👄",
        disableSound: "Отключить звук",
        enableSound: "Включить звук",
        warning: "Предупреждение: Этот калькулятор содержит откровенные темы и предназначен для взрослой аудитории для математического любопытства.",
        disclaimer: "Примечание: Это теоретический расчёт для любопытства. Влагалище не изнашивается, как механический объект. Обратитесь к врачу за информацией о вагинальном здоровье.",
        resultErrorInvalid: "Ошибка: Введите действительные числовые значения.",
        resultErrorStartAge: "Ошибка: Начальный возраст не может быть менее 17 лет.",
        resultErrorAgeOrder: "Ошибка: Текущий возраст должен быть больше начального.",
        resultErrorNegative: "Ошибка: Значения не могут быть отрицательными.",
        resultYearsActive: "Годы половой активности",
        chartLabel: "Моменты страсти (км)",
        chartTooltip: (year, distance, isLegend) => isLegend ? `Возраст: ${year}, Расстояние: ${distance} км (Пик OnlyFans!)` : `Возраст: ${year}, Расстояние: ${distance} км`,
        comparisons: {
            level1: (km) => `Вау, ты прошёл ${km} км, как прогулка из Москвы в Химки (~20 км)! 🌷`,
            level2: (km) => `Отлично! Ты прошёл ${km} км, как марафон (42 км)! 🏃‍♀️`,
            level3: (km) => `Фантастика! Ты прошёл ${km} км, как из Москвы в Санкт-Петербург (~650 км)! 🚂`,
            level4: (km) => `Отлично! Ты прошёл ${km} км, как из Москвы в Казань (~800 км)! 🚗`,
            level5: (km) => `Невероятно! Ты прошёл ${km} км, как из Москвы в Екатеринбург (~1400 км)! ✈️`,
            level6: (km) => `Удивительно! Ты прошёл ${km} км, как из Москвы в Новосибирск (~2800 км)! 🛶`,
            level7: (km) => `Вау, ты прошёл ${km} км, как из Москвы в Владивосток (~6400 км)! 🚀`,
            level8: (km) => `Эпично! Ты прошёл ${km} км, как ширина России (~10000 км)! 🇷🇺`,
            level9: (km) => `Монументально! Ты прошёл ${km} км, как путешествие по Транссибу (~9000 км)! 🚆`,
            level10: (km) => `Легендарно! Ты прошёл ${km} км, как из Москвы в Токио (~7500 км)! ✈️`,
            level11: (km) => `Фантастика! Ты прошёл ${km} км, как из Москвы в Сидней (~14500 км)! 🌏`,
            level12: (km) => `Мифично! Ты прошёл ${km} км, как из Москвы в Нью-Йорк (~7500 км)! ✈️`,
            earthMoon: (km) => `Галактично! Ты прошёл ${km} км, больше, чем расстояние от Земли до Луны (~384400 км)! 🌕`
        },
        rewards: {
            romantic: "Романтический Исследователь!",
            passionate: "Страстный Путешественник!",
            epic: "Эпический Чемпион!",
            galactic: "Галактическая Легенда!",
            highActivity: [
                { icon: "👑", message: "Легенда OnlyFans! Твоя страсть покоряет интернет!" },
                { icon: "🎤", message: "Икона Страсти! Звезда, зажигающая соцсети!" },
                { icon: "💫", message: "Чувственная Звезда! Твоя энергия заразительна!" }
            ]
        }
    },
    zh: {
        metaDescription: "有趣的计算器，用于估算阴道行驶距离，仅为数学好奇！",
        title: "阴道里程计算器",
        subtitle: "计算你的阴道里程",
        instructions: "输入数据，了解你走了多远！ 🌸",
        labelStartAge: "首次性活动年龄（年）：",
        labelCurrentAge: "当前年龄（年）：",
        labelFrequencyMonthly: "每月平均性交频率：",
        labelDurationMinutes: "平均性交持续时间（分钟）：",
        labelPenisLength: "平均阴茎长度（厘米）：",
        labelCyclesPerMinute: "每分钟插入周期：",
        calculateButton: "计算里程！ 👄",
        disableSound: "禁用声音",
        enableSound: "启用声音",
        warning: "警告：此计算器包含成人主题，仅限成年观众用于数学好奇。",
        disclaimer: "注意：这是一个出于好奇的理论计算。阴道不会像机械物体那样“磨损”。请咨询医生了解阴道健康信息。",
        resultErrorInvalid: "错误：请输入有效的数值。",
        resultErrorStartAge: "错误：起始年龄不能小于17岁。",
        resultErrorAgeOrder: "错误：当前年龄必须大于起始年龄。",
        resultErrorNegative: "错误：值不能为负。",
        resultYearsActive: "性活动年数",
        chartLabel: "激情时刻（公里）",
        chartTooltip: (year, distance, isLegend) => isLegend ? `年龄：${year}，距离：${distance} 公里（OnlyFans巅峰！）` : `年龄：${year}，距离：${distance} 公里`,
        comparisons: {
            level1: (km) => `哇，你走了 ${km} 公里，就像从北京到天津（约120公里）！ 🌷`,
            level2: (km) => `太棒了！你走了 ${km} 公里，就像一场马拉松（42公里）！ 🏃‍♀️`,
            level3: (km) => `太好了！你走了 ${km} 公里，就像从北京到上海（约1200公里）！ 🚂`,
            level4: (km) => `很棒！你走了 ${km} 公里，就像从北京到南京（约900公里）！ 🚗`,
            level5: (km) => `不可思议！你走了 ${km} 公里，就像从北京到广州（约1900公里）！ ✈️`,
            level6: (km) => `惊人！你走了 ${km} 公里，就像从北京到成都（约1500公里）！ 🛶`,
            level7: (km) => `哇，你走了 ${km} 公里，就像从北京到乌鲁木齐（约2400公里）！ 🚀`,
            level8: (km) => `史诗级！你走了 ${km} 公里，就像中国的宽度（约4000公里）！ 🇨🇳`,
            level9: (km) => `壮观！你走了 ${km} 公里，就像中国的长度（约5500公里）！ 🇨🇳`,
            level10: (km) => `传奇！你走了 ${km} 公里，就像从北京到东京（约2100公里）！ ✈️`,
            level11: (km) => `太棒了！你走了 ${km} 公里，就像从北京到悉尼（约8900公里）！ 🌏`,
            level12: (km) => `神话般！你走了 ${km} 公里，就像从北京到纽约（约11000公里）！ ✈️`,
            earthMoon: (km) => `银河系！你走了 ${km} 公里，超过地球到月球的距离（约384400公里）！ 🌕`
        },
        rewards: {
            romantic: "浪漫探险家！",
            passionate: "激情旅行者！",
            epic: "史诗冠军！",
            galactic: "银河传奇！",
            highActivity: [
                { icon: "👑", message: "OnlyFans传奇！你的激情统治网络！" },
                { icon: "🎤", message: "激情偶像！点燃社交媒体的明星！" },
                { icon: "💫", message: "感性之星！你的能量席卷网络！" }
            ]
        }
    },
    ja: {
        metaDescription: "数学的好奇心のための、膣の走行距離を推定する楽しい計算機！",
        title: "膣マイレージ計算機",
        subtitle: "あなたの膣マイレージを計算",
        instructions: "データを入力して、どれだけ遠くを旅したか発見！ 🌸",
        labelStartAge: "性的活動開始年齢（年）：",
        labelCurrentAge: "現在の年齢（年）：",
        labelFrequencyMonthly: "月平均の性交頻度：",
        labelDurationMinutes: "平均性交時間（分）：",
        labelPenisLength: "平均ペニス長（センチ）：",
        labelCyclesPerMinute: "1分あたりの挿入サイクル：",
        calculateButton: "マイレージを計算！ 👄",
        disableSound: "音をオフ",
        enableSound: "音をオン",
        warning: "警告：この計算機には成人向けのテーマが含まれており、数学的好奇心のために成人向けです。",
        disclaimer: "注：これは好奇心のための理論的計算です。膣は機械的な物体のようには「摩耗」しません。膣の健康については医師に相談してください。",
        resultErrorInvalid: "エラー：有効な数値を入力してください。",
        resultErrorStartAge: "エラー：開始年齢は17歳未満にできません。",
        resultErrorAgeOrder: "エラー：現在の年齢は開始年齢より大きくなければなりません。",
        resultErrorNegative: "エラー：値は負にできません。",
        resultYearsActive: "性的活動の年数",
        chartLabel: "情熱の瞬間（キロメートル）",
        chartTooltip: (year, distance, isLegend) => isLegend ? `年齢：${year}、距離：${distance} km（OnlyFansのピーク！）` : `年齢：${year}、距離：${distance} km`,
        comparisons: {
            level1: (km) => `ワオ、${km} kmを旅した、まるで東京から横浜（約30km）への散歩！ 🌷`,
            level2: (km) => `素晴らしい！${km} kmを旅した、まるでマラソン（42km）！ 🏃‍♀️`,
            level3: (km) => `最高！${km} kmを旅した、東京から大阪（約550km）みたい！ 🚂`,
            level4: (km) => `すごい！${km} kmを旅した、東京から名古屋（約350km）みたい！ 🚗`,
            level5: (km) => `信じられない！${km} kmを旅した、東京から福岡（約900km）みたい！ ✈️`,
            level6: (km) => `驚くべきことに！${km} kmを旅した、東京から札幌（約800km）みたい！ 🛶`,
            level7: (km) => `ワオ、${km} kmを旅した、日本の長さ（約3000km）みたい！ 🇯🇵`,
            level8: (km) => `壮大！${km} kmを旅した、東京からソウル（約1200km）みたい！ ✈️`,
            level9: (km) => `記念碑的！${km} kmを旅した、東京から北京（約2100km）みたい！ 🚀`,
            level10: (km) => `伝説的！${km} kmを旅した、東京からシドニー（約7800km）みたい！ 🌏`,
            level11: (km) => `素晴らしい！${km} kmを旅した、東京からニューヨーク（約10800km）みたい！ ✈️`,
            level12: (km) => `神話的！${km} kmを旅した、東京からロンドン（約9500km）みたい！ ✈️`,
            earthMoon: (km) => `銀河的！${km} kmを旅した、地球から月までの距離（約384400km）以上！ 🌕`
        },
        rewards: {
            romantic: "ロマンチックな探検家！",
            passionate: "情熱的な旅人！",
            epic: "壮大なチャンピオン！",
            galactic: "銀河の伝説！",
            highActivity: [
                { icon: "👑", message: "OnlyFansの伝説！あなたの情熱がウェブを支配！" },
                { icon: "🎤", message: "情熱のアイコン！ソーシャルメディアを照らすスター！" },
                { icon: "💫", message: "官能的なスター！あなたのエネルギーはバイラル！" }
            ]
        }
    }
};

let currentLanguage = 'it';
let isCalculating = false;
let mileageChartInstance = null;
let isSoundEnabled = true;
let currentAudio = null;

function updateLanguage() {
    const lang = translations[currentLanguage] || translations.it;
    console.log('Aggiornamento lingua:', currentLanguage); // Debug
    try {
        document.documentElement.lang = currentLanguage;
        document.getElementById('meta-description').content = lang.metaDescription;
        document.getElementById('page-title').textContent = lang.title;
        document.getElementById('main-title').textContent = `💗 ${lang.title}`;
        document.getElementById('subtitle').textContent = lang.subtitle;
        document.getElementById('instructions').textContent = lang.instructions;
        document.getElementById('label-startAge').textContent = lang.labelStartAge;
        document.getElementById('label-currentAge').textContent = lang.labelCurrentAge;
        document.getElementById('label-frequencyMonthly').textContent = lang.labelFrequencyMonthly;
        document.getElementById('label-durationMinutes').textContent = lang.labelDurationMinutes;
        document.getElementById('label-penisLength').textContent = lang.labelPenisLength;
        document.getElementById('label-cyclesPerMinute').textContent = lang.labelCyclesPerMinute;
        document.getElementById('calculateButton').textContent = lang.calculateButton;
        document.getElementById('warning').textContent = lang.warning;
        document.getElementById('disclaimer').textContent = lang.disclaimer;
        document.getElementById('toggleSoundButton').textContent = isSoundEnabled ? lang.disableSound : lang.enableSound;
        if (mileageChartInstance) {
            mileageChartInstance.data.datasets[0].label = lang.chartLabel;
            mileageChartInstance.update();
        }
    } catch (e) {
        console.error('Errore durante l\'aggiornamento della lingua:', e);
    }
}

function adjustChartHeight() {
    const formContainer = document.querySelector('.form-container');
    const chartContainer = document.querySelector('.chart-container');
    const canvas = document.getElementById('mileageChart');
    if (formContainer && chartContainer && canvas) {
        const formHeight = formContainer.offsetHeight;
        chartContainer.style.height = `${formHeight}px`;
        canvas.style.height = `${formHeight}px`;
        if (mileageChartInstance) {
            mileageChartInstance.resize();
        }
        console.log('Altezza grafico adattata:', formHeight); // Debug
    }
}

function playMoan(progress) {
    if (!isSoundEnabled) return;
    
    const moan1 = document.getElementById('moan1');
    const moan2 = document.getElementById('moan2');
    const moan3 = document.getElementById('moan3');

    let audioToPlay = null;
    if (progress < 0.33) {
        audioToPlay = moan1;
    } else if (progress < 0.66) {
        audioToPlay = moan2;
    } else {
        audioToPlay = moan3;
    }

    if (currentAudio && currentAudio !== audioToPlay) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (audioToPlay && audioToPlay !== currentAudio) {
        currentAudio = audioToPlay;
        audioToPlay.play().catch(() => console.log('Errore riproduzione audio:', audioToPlay.id)); // Debug
    }
}

function calculateMileage() {
    if (isCalculating) return;
    isCalculating = true;
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = true;

    const lang = translations[currentLanguage] || translations.it;
    const resultDiv = document.getElementById('result');
    const inputs = {
        startAge: parseFloat(document.getElementById('startAge').value),
        currentAge: parseFloat(document.getElementById('currentAge').value),
        frequencyMonthly: parseFloat(document.getElementById('frequencyMonthly').value),
        durationMinutes: parseFloat(document.getElementById('durationMinutes').value),
        penisLength: parseFloat(document.getElementById('penisLength').value),
        cyclesPerMinute: parseFloat(document.getElementById('cyclesPerMinute').value)
    };

    try {
        // Validazione
        if (Object.values(inputs).some(isNaN)) {
            throw new Error(lang.resultErrorInvalid);
        }
        if (inputs.startAge < 17) {
            throw new Error(lang.resultErrorStartAge);
        }
        if (inputs.startAge >= inputs.currentAge) {
            throw new Error(lang.resultErrorAgeOrder);
        }
        if (Object.values(inputs).some(val => val < 0)) {
            throw new Error(lang.resultErrorNegative);
        }

        // Calcolo
        const yearsActive = inputs.currentAge - inputs.startAge;
        const distancePerCycleCm = inputs.penisLength * 2;
        const distancePerMinuteCm = distancePerCycleCm * inputs.cyclesPerMinute;
        const distancePerSessionCm = distancePerMinuteCm * inputs.durationMinutes;
        const distancePerMonthCm = distancePerSessionCm * inputs.frequencyMonthly;
        const distancePerYearCm = distancePerMonthCm * 12;
        const totalDistanceCm = distancePerYearCm * yearsActive;
        const totalDistanceKm = totalDistanceCm / 100000;

        // Dati per il grafico
        const years = Array.from({ length: Math.floor(yearsActive) + 1 }, (_, i) => inputs.startAge + i);
        const yearlyDistance = totalDistanceKm / yearsActive;
        const distances = years.map((_, i) => {
            const baseDistance = yearlyDistance * i;
            const variation = Math.sin(i / yearsActive * Math.PI * 2) * yearlyDistance * 0.3;
            return Math.max(0, baseDistance + variation);
        });
        distances[distances.length - 1] = totalDistanceKm;

        // Colore dinamico
        let chartColor = '#ff69b4';
        if (totalDistanceKm < 200) chartColor = '#ffb6c1';
        else if (totalDistanceKm < 1000) chartColor = '#ff69b4';
        else if (totalDistanceKm < 5000) chartColor = '#ff1493';
        else chartColor = '#c71585';

        // Confronto umoristico
        const comparisonThresholds = [
            { threshold: 50, key: 'level1' },
            { threshold: 100, key: 'level2' },
            { threshold: 150, key: 'level3' },
            { threshold: 200, key: 'level4' },
            { threshold: 300, key: 'level5' },
            { threshold: 400, key: 'level6' },
            { threshold: 600, key: 'level7' },
            { threshold: 800, key: 'level8' },
            { threshold: 1200, key: 'level9' },
            { threshold: 5000, key: 'level10' },
            { threshold: 10000, key: 'level11' },
            { threshold: 40000, key: 'level12' },
            { threshold: Infinity, key: 'earthMoon' }
        ];

        let comparison = '';
        for (const { threshold, key } of comparisonThresholds) {
            if (totalDistanceKm < threshold) {
                if (lang.comparisons[key]) {
                    comparison = lang.comparisons[key](totalDistanceKm.toFixed(2));
                    console.log(`Confronto selezionato: ${key}, Distanza: ${totalDistanceKm.toFixed(2)} km`); // Debug
                } else {
                    console.error(`Chiave di confronto non trovata: ${key}`);
                    comparison = lang.comparisons.earthMoon(totalDistanceKm.toFixed(2)); // Fallback
                }
                break;
            }
        }

        // Sistema di premi
        let rewardHTML = '';
        let rewardMessage = '';
        if (totalDistanceKm > 5000 && yearsActive <= 10 && inputs.frequencyMonthly > 50) {
            const randomReward = lang.rewards.highActivity[Math.floor(Math.random() * lang.rewards.highActivity.length)];
            rewardHTML = `<div class="reward">${randomReward.icon}</div>`;
            rewardMessage = randomReward.message;
        } else if (totalDistanceKm < 200) {
            rewardHTML = '<div class="reward">🥉</div>';
            rewardMessage = lang.rewards.romantic;
        } else if (totalDistanceKm < 1000) {
            rewardHTML = '<div class="reward">🥈</div>';
            rewardMessage = lang.rewards.passionate;
        } else if (totalDistanceKm < 5000) {
            rewardHTML = '<div class="reward">🥇</div>';
            rewardMessage = lang.rewards.epic;
        } else {
            rewardHTML = '<div class="reward">✨</div>';
            rewardMessage = lang.rewards.galactic;
        }

        resultDiv.innerHTML = `
            <strong>${lang.resultYearsActive}: ${yearsActive.toFixed(1)}</strong><br>
            <div class="odometer">0.00 km</div>
            <div class="reward-container"></div>
        `;

        const odometer = resultDiv.querySelector('.odometer');
        const rewardContainer = resultDiv.querySelector('.reward-container');
        rewardContainer.style.display = 'none';
        let currentKm = 0;
        const targetKm = totalDistanceKm;
        const duration = Math.min(8000, Math.max(5000, targetKm * 100));
        let currentYearIndex = 0;
        const kmPerYear = totalDistanceKm / yearsActive;

        // Inizializza il grafico
        if (mileageChartInstance) mileageChartInstance.destroy();
        const ctx = document.getElementById('mileageChart').getContext('2d');
        mileageChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: lang.chartLabel,
                    data: [],
                    borderColor: chartColor,
                    backgroundColor: chartColor,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 1000 },
                scales: {
                    x: {
                        type: 'linear',
                        title: { display: true, text: 'Età', color: '#333', font: { size: 14 } },
                        min: inputs.startAge,
                        max: inputs.currentAge,
                        ticks: { stepSize: 1 }
                    },
                    y: {
                        title: { display: true, text: 'Distanza (km)', color: '#333', font: { size: 14 } },
                        min: 0,
                        suggestedMax: totalDistanceKm * 1.2
                    }
                },
                plugins: {
                    legend: { display: true, position: 'top', labels: { font: { size: 14 } } },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const year = context.raw.x;
                                const distance = context.raw.y.toFixed(2);
                                const isLegend = totalDistanceKm > 5000 && yearsActive <= 10 && inputs.frequencyMonthly > 50 && context.dataIndex === years.length - 1;
                                return lang.chartTooltip(year, distance, isLegend);
                            }
                        }
                    }
                }
            }
        });

        // Adatta l'altezza del grafico
        adjustChartHeight();

        function animateOdometer(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            currentKm = targetKm * progress;

            // Riproduci audio in base al progresso
            playMoan(progress);

            // Aggiorna il grafico
            if (currentYearIndex < years.length && currentKm >= kmPerYear * (currentYearIndex + 1)) {
                mileageChartInstance.data.datasets[0].data.push({ x: years[currentYearIndex], y: distances[currentYearIndex] });
                mileageChartInstance.update();
                currentYearIndex++;
            }

            odometer.textContent = `${currentKm.toFixed(2)} km`;

            if (progress < 1) {
                requestAnimationFrame(animateOdometer);
            } else {
                odometer.textContent = `${targetKm.toFixed(2)} km`;
                mileageChartInstance.data.datasets[0].data = years.map((year, i) => ({ x: year, y: distances[i] }));
                if (totalDistanceKm > 5000 && yearsActive <= 10 && inputs.frequencyMonthly > 50) {
                    mileageChartInstance.data.datasets[0].label = 'OnlyFans Legend!';
                }
                mileageChartInstance.update();
                rewardContainer.innerHTML = `${rewardHTML}<span class="reward-message">${rewardMessage}<br>${comparison}</span>`;
                rewardContainer.style.display = 'flex';
                rewardContainer.classList.add('fullscreen-reward');
                setTimeout(() => {
                    rewardContainer.classList.add('fade-out');
                    setTimeout(() => {
                        rewardContainer.classList.remove('fullscreen-reward', 'fade-out');
                    }, 1000); // Durata della dissolvenza
                }, 4000); // Durata totale del reward
                isCalculating = false;
                calculateButton.disabled = false;
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                    currentAudio = null;
                }
            }
        }

        let startTime = null;
        requestAnimationFrame(animateOdometer);
    } catch (e) {
        resultDiv.innerHTML = `<p class="error">${e.message}</p>`;
        console.error('Errore durante il calcolo:', e);
        isCalculating = false;
        calculateButton.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM caricato, inizializzazione...'); // Debug
    updateLanguage();
    adjustChartHeight();

    const calculateButton = document.getElementById('calculateButton');
    const toggleSoundButton = document.getElementById('toggleSoundButton');
    const languageSelect = document.getElementById('language');
    const moan1 = document.getElementById('moan1');
    const moan2 = document.getElementById('moan2');
    const moan3 = document.getElementById('moan3');

    if (!calculateButton || !toggleSoundButton || !languageSelect || !moan1 || !moan2 || !moan3) {
        console.error('Elementi DOM non trovati');
        return;
    }

    calculateButton.addEventListener('click', () => {
        console.log('Pulsante Calcola cliccato'); // Debug
        calculateMileage();
    });

    toggleSoundButton.addEventListener('click', () => {
        console.log('Pulsante suono cliccato'); // Debug
        isSoundEnabled = !isSoundEnabled;
        toggleSoundButton.textContent = isSoundEnabled ? translations[currentLanguage].disableSound : translations[currentLanguage].enableSound;
        if (!isSoundEnabled && currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    });

    languageSelect.addEventListener('change', (e) => {
        console.log('Lingua selezionata:', e.target.value); // Debug
        currentLanguage = e.target.value;
        updateLanguage();
        adjustChartHeight();
    });

    window.addEventListener('resize', adjustChartHeight);
});