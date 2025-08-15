import { ENUM_NAME } from '../../bridge';

export enum MSO_LANGUAGE_ID {
  /** No language specified. */
  NONE = 0,
  /** The Afrikaans language. */
  AFRIKAANS = 1078,
  /** The Albanian language. */
  ALBANIAN = 1052,
  /** The Amharic language. */
  AMHARIC = 1118,
  /** The Arabic language. */
  ARABIC = 1025,
  /** The Arabic Algeria language. */
  ARABIC_ALGERIA = 5121,
  /** The Arabic Bahrain language. */
  ARABIC_BAHRAIN = 15361,
  /** The Arabic Egypt language. */
  ARABIC_EGYPT = 3073,
  /** The Arabic Iraq language. */
  ARABIC_IRAQ = 2049,
  /** The Arabic Jordan language. */
  ARABIC_JORDAN = 11265,
  /** The Arabic Kuwait language. */
  ARABIC_KUWAIT = 13313,
  /** The Arabic Lebanon language. */
  ARABIC_LEBANON = 12289,
  /** The Arabic Libya language. */
  ARABIC_LIBYA = 4097,
  /** The Arabic Morocco language. */
  ARABIC_MOROCCO = 6145,
  /** The Arabic Oman language. */
  ARABIC_OMAN = 8193,
  /** The Arabic Qatar language. */
  ARABIC_QATAR = 16385,
  /** The Arabic Syria language. */
  ARABIC_SYRIA = 10241,
  /** The Arabic Tunisia language. */
  ARABIC_TUNISIA = 7169,
  /** The Arabic UAE language. */
  ARABIC_UAE = 14337,
  /** The Arabic Yemen language. */
  ARABIC_YEMEN = 9217,
  /** The Armenian language. */
  ARMENIAN = 1067,
  /** The Assamese language. */
  ASSAMESE = 1101,
  /** The Azeri Cyrillic language. */
  AZERI_CYRILLIC = 2092,
  /** The Azeri Latin language. */
  AZERI_LATIN = 1068,
  /** The Basque language. */
  BASQUE = 1069,
  /** The Belgian Dutch language. */
  BELGIAN_DUTCH = 2067,
  /** The Belgian French language. */
  BELGIAN_FRENCH = 2060,
  /** The Bengali language. */
  BENGALI = 1093,
  /** The Bosnian language. */
  BOSNIAN = 4122,
  /** The Bosnian Bosnia Herzegovina Cyrillic language. */
  BOSNIAN_BOSNIA_HERZEGOVINA_CYRILLIC = 8218,
  /** The Bosnian Bosnia Herzegovina Latin language. */
  BOSNIAN_BOSNIA_HERZEGOVINA_LATIN = 5146,
  /** The Brazilian Portuguese language. */
  BRAZILIAN_PORTUGUESE = 1046,
  /** The Bulgarian language. */
  BULGARIAN = 1026,
  /** The Burmese language. */
  BURMESE = 1109,
  /** The Byelorussian language. */
  BYELORUSSIAN = 1059,
  /** The Catalan language. */
  CATALAN = 1027,
  /** The Cherokee language. */
  CHEROKEE = 1116,
  /** The Chinese Hong Kong SAR language. */
  CHINESE_HONG_KONG_SAR = 3076,
  /** The Chinese Macao SAR language. */
  CHINESE_MACAO_SAR = 5124,
  /** The Chinese Singapore language. */
  CHINESE_SINGAPORE = 4100,
  /** The Croatian language. */
  CROATIAN = 1050,
  /** The Czech language. */
  CZECH = 1029,
  /** The Danish language. */
  DANISH = 1030,
  /** The Divehi language. */
  DIVEHI = 1125,
  /** The Dutch language. */
  DUTCH = 1043,
  /** The Edo language. */
  EDO = 1126,
  /** The English AUS language. */
  ENGLISH_AUS = 3081,
  /** The English Belize language. */
  ENGLISH_BELIZE = 10249,
  /** The English Canadian language. */
  ENGLISH_CANADIAN = 4105,
  /** The English Caribbean language. */
  ENGLISH_CARIBBEAN = 9225,
  /** The English Indonesia language. */
  ENGLISH_INDONESIA = 14345,
  /** The English Ireland language. */
  ENGLISH_IRELAND = 6153,
  /** The English Jamaica language. */
  ENGLISH_JAMAICA = 8201,
  /** The English NewZealand language. */
  ENGLISH_NEW_ZEALAND = 5129,
  /** The English Philippines language. */
  ENGLISH_PHILIPPINES = 13321,
  /** The English South Africa language. */
  ENGLISH_SOUTH_AFRICA = 7177,
  /** The English Trinidad Tobago language. */
  ENGLISH_TRINIDAD_TOBAGO = 11273,
  /** The English UK language. */
  ENGLISH_UK = 2057,
  /** The English US language. */
  ENGLISH_US = 1033,
  /** The English Zimbabwe language. */
  ENGLISH_ZIMBABWE = 12297,
  /** The Estonian language. */
  ESTONIAN = 1061,
  /** The Faeroese language. */
  FAEROESE = 1080,
  /** The Farsi language. */
  FARSI = 1065,
  /** The Filipino language. */
  FILIPINO = 1124,
  /** The Finnish language. */
  FINNISH = 1035,
  /** The French Congo DRC language. */
  FRANCH_CONGO_DRC = 9228,
  /** The French language. */
  FRENCH = 1036,
  /** The French Cameroon language. */
  FRENCH_CAMEROON = 11276,
  /** The French Canadian language. */
  FRENCH_CANADIAN = 3084,
  /** The French Coted Ivoire language. */
  FRENCH_COTED_IVOIRE = 12300,
  /** The French Haiti language. */
  FRENCH_HAITI = 15372,
  /** The French Luxembourg language. */
  FRENCH_LUXEMBOURG = 5132,
  /** The French Mali language. */
  FRENCH_MALI = 13324,
  /** The French Monaco language. */
  FRENCH_MONACO = 6156,
  /** The French Morocco language. */
  FRENCH_MOROCCO = 14348,
  /** The French Reunion language. */
  FRENCH_REUNION = 8204,
  /** The French Senegal language. */
  FRENCH_SENEGAL = 10252,
  /** The French West Indies language. */
  FRENCH_WEST_INDIES = 7180,
  /** The Frisian Netherlands language. */
  FRISIAN_NETHERLANDS = 1122,
  /** The Fulfulde language. */
  FULFULDE = 1127,
  /** The Gaelic Ireland language. */
  GAELIC_IRELAND = 2108,
  /** The Gaelic Scotland language. */
  GAELIC_SCOTLAND = 1084,
  /** The Galician language. */
  GALICIAN = 1110,
  /** The Georgian language. */
  GEORGIAN = 1079,
  /** The German language. */
  GERMAN = 1031,
  /** The German Austria language. */
  GERMAN_AUSTRIA = 3079,
  /** The German Liechtenstein language. */
  GERMAN_LIECHTENSTEIN = 5127,
  /** The German Luxembourg language. */
  GERMAN_LUXEMBOURG = 4103,
  /** The Greek language. */
  GREEK = 1032,
  /** The Guarani language. */
  GUARANI = 1140,
  /** The Gujarati language. */
  GUJARATI = 1095,
  /** The Hausa language. */
  HAUSA = 1128,
  /** The Hawaiian language. */
  HAWAIIAN = 1141,
  /** The Hebrew language. */
  HEBREW = 1037,
  /** The Hindi language. */
  HINDI = 1081,
  /** The Hungarian language. */
  HUNGARIAN = 1038,
  /** The Ibibio language. */
  IBIBIO = 1129,
  /** The Icelandic language. */
  ICELANDIC = 1039,
  /** The Igbo language. */
  IGBO = 1136,
  /** The Indonesian language. */
  INDONESIAN = 1057,
  /** The Inuktitut language. */
  INUKTITUT = 1117,
  /** The Italian language. */
  ITALIAN = 1040,
  /** The Japanese language. */
  JAPANESE = 1041,
  /** The Kannada language. */
  KANNADA = 1099,
  /** The Kanuri language. */
  KANURI = 1137,
  /** The Kashmiri language. */
  KASHMIRI = 1120,
  /** The Kashmiri Devanagari language. */
  KASHMIRI_DEVANAGARI = 2144,
  /** The Kazakh language. */
  KAZAKH = 1087,
  /** The Khmer language. */
  KHMER = 1107,
  /** The Kirghiz language. */
  KIRGHIZ = 1088,
  /** The Konkani language. */
  KONKANI = 1111,
  /** The Korean language. */
  KOREAN = 1042,
  /** The Lao language. */
  LAO = 1108,
  /** The Latin language. */
  LATIN = 1142,
  /** The Latvian language. */
  LATVIAN = 1062,
  /** The Lithuanian language. */
  LITHUANIAN = 1063,
  /** The Macedonian FYROM language. */
  MACEDONINAN_FYROM = 1071,
  /** The Malay Brunei Darussalam language. */
  MALAY_BRUNEI_DARUSSALAM = 2110,
  /** The Malayalam language. */
  MALAYALAM = 1100,
  /** The Malaysian language. */
  MALAYSIAN = 1086,
  /** The Maltese language. */
  MALTESE = 1082,
  /** The Manipuri language. */
  MANIPURI = 1112,
  /** The Maori language. */
  MAORI = 1153,
  /** The Marathi language. */
  MARATHI = 1102,
  /** The Mexican Spanish language. */
  MEXICAN_SPANISH = 2058,
  /** The Mongolian language. */
  MONGOLIAN = 1104,
  /** The Nepali language. */
  NEPALI = 1121,
  /** No proofing. */
  NO_PROOFING = 1024,
  /** The Norwegian Bokmol language. */
  NORWEGIAN_BOKMOL = 1044,
  /** The Norwegian Nynorsk language. */
  NORWEGIAN_NYNORSK = 2068,
  /** The Oriya language. */
  ORIYA = 1096,
  /** The Oromo language. */
  OROMO = 1138,
  /** The Pashto language. */
  PASHTO = 1123,
  /** The Polish language. */
  POLISH = 1045,
  /** The Portuguese language. */
  PORTUGUESE = 2070,
  /** The Punjabi language. */
  PUNJABI = 1094,
  /** The Quechua Bolivia language. */
  QUECHUA_BOLIVIA = 1131,
  /** The Quechua Ecuador language. */
  QUECHUA_ECUADOR = 2155,
  /** The Quechua Peru language. */
  QUECHUA_PERU = 3179,
  /** The Rhaeto Romanic language. */
  RHAETO_ROMANIC = 1047,
  /** The Romanian language. */
  ROMANIAN = 1048,
  /** The Romanian Moldova language. */
  ROMANIAN_MOLDOVA = 2072,
  /** The Russian language. */
  RUSSIAN = 1049,
  /** The Russian Moldova language. */
  RUSSIAN_MOLDOVA = 2073,
  /** The Sami Lappish language. */
  SAMI_LAPPISH = 1083,
  /** The Sanskrit language. */
  SANSKRIT = 1103,
  /** The Sepedi language. */
  SEPEDI = 1132,
  /** The Serbian Bosnia Herzegovina Cyrillic language. */
  SERBIAN_BOSNIA_HERZEGOVINA_CYRILLIC = 7194,
  /** The Serbian Bosnia Herzegovina Latin language. */
  SERBIAN_BOSNIA_HERZEGOVINA_LATIN = 6170,
  /** The Serbian Cyrillic language. */
  SERBIAN_CYRILLIC = 3098,
  /** The Serbian Latin language. */
  SERBIAN_LATIN = 2074,
  /** The Sesotho language. */
  SESOTHO = 1072,
  /** The Simplified Chinese language. */
  SIMPLIFIED_CHINESE = 2052,
  /** The Sindhi language. */
  SINDHI = 1113,
  /** The Sindhi Pakistan language. */
  SINDHI_PAKISTAN = 2137,
  /** The Sinhalese language. */
  SINHALESE = 1115,
  /** The Slovak language. */
  SLOVAK = 1051,
  /** The Slovenian language. */
  SLOVENIAN = 1060,
  /** The Somali language. */
  SOMALI = 1143,
  /** The Sorbian language. */
  SORBIAN = 1070,
  /** The Spanish language. */
  SPANISH = 1034,
  /** The Spanish Argentina language. */
  SPANISH_ARGENTINA = 11274,
  /** The Spanish Bolivia language. */
  SPANISH_BOLIVIA = 16394,
  /** The Spanish Chile language. */
  SPANISH_CHILE = 13322,
  /** The Spanish Colombia language. */
  SPANISH_COLOMBIA = 9226,
  /** The Spanish Costa Rica language. */
  SPANISH_COSTA_RICA = 5130,
  /** The Spanish Dominican Republic language. */
  SPANISH_DOMINICAN_REPUBLIC = 7178,
  /** The Spanish Ecuador language. */
  SPANISH_ECUADOR = 12298,
  /** The Spanish El Salvador language. */
  SPANISH_EL_SALVADOR = 17418,
  /** The Spanish Guatemala language. */
  SPANISH_GUATEMALA = 4106,
  /** The Spanish Honduras language. */
  SPANISH_HONDURAS = 18442,
  /** The Spanish Modern Sort language. */
  SPANISH_MODERN_SORT = 3082,
  /** The Spanish Nicaragua language. */
  SPANISH_NICARAGUA = 19466,
  /** The Spanish Panama language. */
  SPANISH_PANAMA = 6154,
  /** The Spanish Paraguay language. */
  SPANISH_PARAGUAY = 15370,
  /** The Spanish Peru language. */
  SPANISH_PERU = 10250,
  /** The Spanish Puerto Rico language. */
  SPANISH_PUERTO_RICO = 20490,
  /** The Spanish Uruguay language. */
  SPANISH_URUGUAY = 14346,
  /** The Spanish Venezuela language. */
  SPANISH_VENEZUELA = 8202,
  /** The Swahili language. */
  SWAHILI = 1089,
  /** The Swedish language. */
  SWEDISH = 1053,
  /** The Swedish Finland language. */
  SWEDISH_FINLAND = 2077,
  /** The Swiss French language. */
  SWISS_FRENCH = 4108,
  /** The Swiss German language. */
  SWISS_GERMAN = 2055,
  /** The Swiss Italian language. */
  SWISS_ITALIAN = 2064,
  /** The Syriac language. */
  SYRIAC = 1114,
  /** The Tajik language. */
  TAJIK = 1064,
  /** The Tamazight language. */
  TAMAZIGHT = 1119,
  /** The Tamazight Latin language. */
  TAMAZIGHT_LATIN = 2143,
  /** The Tamil language. */
  TAMIL = 1097,
  /** The Tatar language. */
  TATAR = 1092,
  /** The Telugu language. */
  TELUGU = 1098,
  /** The Thai language. */
  THAI = 1054,
  /** The Tibetan language. */
  TIBETAN = 1105,
  /** The Tigrigna Eritrea language. */
  TIGRIGNA_ERITREA = 2163,
  /** The Tigrigna Ethiopic language. */
  TIGRIGNA_ETHIOPIC = 1139,
  /** The Traditional Chinese language. */
  TRADITIONAL_CHINESE = 1028,
  /** The Tsonga language. */
  TSONGA = 1073,
  /** The Tswana language. */
  TSWANA = 1074,
  /** The Turkish language. */
  TURKISH = 1055,
  /** The Turkmen language. */
  TURKMEN = 1090,
  /** The Ukrainian language. */
  UKRAINIAN = 1058,
  /** The Urdu language. */
  URDU = 1056,
  /** The Uzbek Cyrillic language. */
  UZBEK_CYRILLIC = 2115,
  /** The Uzbek Latin language. */
  UZBEK_LATIN = 1091,
  /** The Venda language. */
  VENDA = 1075,
  /** The Vietnamese language. */
  VIETNAMESE = 1066,
  /** The Welsh language. */
  WELSH = 1106,
  /** The Xhosa language. */
  XHOSA = 1076,
  /** The Yi language. */
  YI = 1144,
  /** The Yiddish language. */
  YIDDISH = 1085,
  /** The Yoruba language. */
  YORUBA = 1130,
  /** The Zulu language. */
  ZULU = 1077,
  /** More than one language in specified range (read-only). */
  MIXED = -2
}
// @ts-ignore
MSO_LANGUAGE_ID[ENUM_NAME] = 'MSO_LANGUAGE_ID';
