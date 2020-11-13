let dictionary = {
    //Lesson 3.1
    "每": ["s", 3, 1, "měi", "each"],
    "次": ["s", 3, 1, "cì", "second"],
    "干": ["s", 3, 1, "gān", "to do"],
    "吗": ["s", 3, 1, "má", "?"],
    "开": ["s", 3, 1, "kāi", "open"],
    "恨": ["s", 3, 1, "hěn", "very"],
    "谢": ["s", 3, 1, "xiè", "thank"],
    //3.2
    "还": ["s", 3, 2, "hái", "still"],
    "能": ["s", 3, 2, "néng", "can"],
    "块": ["s", 3, 2, "kuài", "fast"],
    "慢": ["s", 3, 2, "màn", "slow"],
    "语": ["s", 3, 2, "yŭ", "language"],
    "言": ["s", 3, 2, "yán", "words/ talk"],
    "读": ["s", 3, 2, "dú", "to read"],
    //3.3
    "虫": ["s", 3, 3, "chóng", "insect"],
    "鸟": ["s", 3, 3, "niăo", "bird"],
    "鱼": ["s", 3, 3, "yú", "fish"],
    "牛": ["s", 3, 3, "niú", "cow"],
    "羊": ["s", 3, 3, "yáng", "sheep"],
    "肉": ["s", 3, 3, "ròu", "meat"],
    "龙": ["s", 3, 3, "lóng", "dragon"],
    "马": ["s", 3, 3, "mă", "horse"],
    //4.1
    "身": ["s", 4, 1, "shēn", "body"],
    "体": ["s", 4, 1, "tǐ", "body"],
    "眼": ["s", 4, 1, "yǎn/ wěn", "eye; eyelet"],
    "睛": ["s", 4, 1, "jīng/ jǐng", "eyeball; pupil of eye"],
    "脸": ["s", 4, 1, "liǎn", "face; cheek; reputation"],
    "耳": ["s", 4, 1, "ěr", "ear"],
    "鼻": ["s", 4, 1, "bí", "nose; first"],
    "牙": ["s", 4, 1, "yá/ yà", "tooth"],
    //4.1 Phrases
    "身体": ["p", 4, 1, "shēntǐ", "body"],
    "身高": ["p", 4, 1, "shēngāo", "height"],
    "一双 眼睛": ["p", 4, 1, "Yīshuāng yǎnjīng", "a pair of eyes"],
    "耳机": ["p", 4, 1, "Ěrjī", "headset/earphones"],
    "...不是... 就是...": ["p", 4, 1, "... Bùshì ... jiùshì ...", "... either ... or ..."],
    //4.2, 
    "腿": ["s", 4, 2, "tuǐ", "legs, thighs"],
    "脚": ["s", 4, 2, "jiǎo/ jué", "leg/ foot; base/ foundation"],
    "肚": ["s", 4, 2, "dù/ dǔ", "belly; tripe"],
    "背": ["s", 4, 2, "bèi/ bēi", "back/ carry on back"],
    "指": ["s", 4, 2, "zhǐ", "finger/ indicate"],
    "眉": ["s", 4, 2, "méi", "eyebrows"],
    "嘴": ["s", 4, 2, "zuǐ", "mouth/ lips"],
    "巴": ["s", 4, 2, "bā", "participle for 'hope'"],
    //4.2 Phrases
    "眉毛（眼眉）": ["p", 4, 2, "méimáo (yǎnméi)", "eyebrows"],
    "...再三...": ["p", 4, 2, "Zàisān", "again and again"],
    "手指头": ["p", 4, 2, "Shǒuzhǐ tou", "finger"],
    "鼻子": ["p", 4, 2, "Bízi", "nose"],
    //4.3, 
    "皮": ["s", 4, 3, "pí", "skin"],
    "服": ["s", 4, 3, "fū", "skin"],
    "肥": ["s", 4, 3, "féi", "fat"],
    "胖": ["s", 4, 3, "pàn", "fat"],
    "毛": ["s", 4, 3, "máo", "hair/ fur/ feathers"],
    "巾": ["s", 4, 3, "jīn", "towel"],
    "发": ["s", 4, 3, "fā/ fà", "send out; hair"],
    "汗": ["s", 4, 3, "hàn", "sweat"],
    //4.3 Phrases
    "...不过 还是...": ["p", 4, 3, "Búguò haíshì", "...but still..."],
    "...只是...": ["p", 4, 3,"zhǐshì", "... only/just ..."],
    "...只要...": ["p", 4, 3, "zhǐyào", "... as long as ..."],
    "最近": ["p", 4, 3, "zuìjìn", "...recently..."],
    //4.4, 
    "便": ["s", 4, 4, "pián/ biàn", "cheap/ convenient"],
    "宜": ["s", 4, 4, "yí", "suitable/ appropriate"],
    "处": ["s", 4, 4, "chǔ", "live/ live with/ place"],
    "理": ["s", 4, 4, "lǐ", "reason/ manage"],
    "超": ["s", 4, 4, "chāo", "surpass"],
    "市": ["s", 4, 4, "shì", "market; city"],
    "货": ["s", 4, 4, "huò", "goods/ products"],
    "架": ["s", 4, 4, "jià", "shelf/ rack"],
    //4.4 Phrases
    "哪怕 ... 也 ...": ["p", 4, 4, "nǎpà ... yé ...", "Even if ... then... "],
    "... 不在乎 ...": ["p", 4, 4, "... bú zàihū ...", "... don’t care about ..."],
    //4.5, 
    "网": ["s", 4, 5, "wǎng", "net; network"],
    "低": ["s", 4, 5, "dī", "low"],
    "折": ["s", 4, 5, "zhé", "break/ discount/ fold"],
    "扣": ["s", 4, 5, "kòu", "knock/ tap; button"],
    "豆": ["s", 4, 5, "dòu", "bean"],
    "包": ["s", 4, 5, "bāo", "bun/ bundle"],
    "米": ["s", 4, 5, "mǐ", "rice"],
    "面": ["s", 4, 5, "miàn", "face; flour"],
    //4.5 Phrases
    "上网": ["p", 4, 5, "shàngwǎng", "Go online"],
    "打折": ["p", 4, 5, "dǎzhé", "discount"],
    "折扣": ["p", 4, 5, "zhékòu", "discount"],
    "为的是": ["p", 4, 5, "wèideshì", "for/in order to"],
    "为了": ["p", 4, 5, "wèile", "for/in order to"],
    //4.6, 
    "顾": ["s", 4, 6, "gù", "look after"],
    "客": ["s", 4, 6, "kè/ qià", "guest/ customer"],
    "买": ["s", 4, 6, "mǎi", "purchase"],
    "卖": ["s", 4, 6, "mài", "sell"],
    "流": ["s", 4, 6, "liú", "flow/ stream"],
    "行": ["s", 4, 6, "xíng/ háng", "go/ walk/ line"],
    "短": ["s", 4, 6, "duǎn", "short/ brief"],
    "线": ["s", 4, 6, "xiàn", "line"],
    //4.6 Phrases
    "顾客": ["p", 4, 6, "gùkè", "customer"],
    "要不... 也行.": ["p", 4, 6, "yàobù... yéxíng.", "This... alternatively."],
    "流行": ["p", 4, 6, "liúxíng", "popular"],
    //4.7, 
    "啊": ["s", 4, 7, "ā/ á", "exclamatory particle"],
    "呀": ["s", 4, 7, "yā", "surprise particle"],
    "呢": ["s", 4, 7, "ne/ ní", "emphatic particle"],
    "啦": ["s", 4, 7, "la/ lā", "assertive particle"],
    "睡": ["s", 4, 7, "shuì", "sleep"],
    "觉": ["s", 4, 7, "jiào", "sleep/ feel"],
    "起": ["s", 4, 7, "qǐ", "rise/ stand up"],
    "床": ["s", 4, 7, "chuáng", "bed"],
    //4.8, 
    "饮": ["s", 4, 8, "yǐn", "drink/ kind of drink"],
    "料": ["s", 4, 8, "liào", "ingredients"],
    "食": ["s", 4, 8, "shí", "eat/ food"],
    "品": ["s", 4, 8, "pǐn", "product/ commodity"],
    "两": ["s", 4, 8, "liǎng", "two; both"],
    "吃": ["s", 4, 8, "chī", "eat"],
    "得": ["s", 4, 8, "dé/ děi", "get/ need"],
    "当": ["s", 4, 8, "dàng/ dāng", "proper/ when"],
    //4.9, 
    "渴": ["s", 4, 9, "kě", "thirsty"],
    "喝": ["s", 4, 9, "hē", "drink"],
    "杯": ["s", 4, 9, "bēi", "cup; glass"],
    "汁": ["s", 4, 9, "zhī", "juice"],
    "苹": ["s", 4, 9, "píng", "apple"],
    "果": ["s", 4, 9, "guǒ", "fruit"],
    "饭": ["s", 4, 9, "fàn", "cooked rice/ meal"],
    "菜": ["s", 4, 9, "cài", "vegetables/ dish"],
    //4.10
    "啤": ["s", 4, 10, "pí", "beer"],
    "酒": ["s", 4, 10, "jiǔ", "wine/ liquor"],
    "茶": ["s", 4, 10, "chá", "tea"],
    "吧": ["s", 4, 10, "bā", "bar/ emphatic particle"],
    "碗": ["s", 4, 10, "wǎn", "bowl"],
    "盘": ["s", 4, 10, "pán", "tray/ plate"],
    "盆": ["s", 4, 10, "pén", "basin/ tub"],
    "筷": ["s", 4, 10, "kuài", "chopsticks"],
    //4.11
    "鸡": ["s", 4, 11, "jī", "chicken"],
    "鸭": ["s", 4, 11, "yā", "duck"],
    "鹅": ["s", 4, 11, "é", "goose"],
    "蛋": ["s", 4, 11, "dàn", "egg"],
    "虎": ["s", 4, 11, "hǔ", "tiger; brave"],
    "兔": ["s", 4, 11, "tù", "rabbit"],
    "猫": ["s", 4, 11, "māo", "cat"],
    "狗": ["s", 4, 11, "gǒu", "dog"],
    //4.12
    "虾": ["s", 4, 12, "xiā", "shrimp/ prawn"],
    "象": ["s", 4, 12, "xiàng", "elephant"],
    "脑": ["s", 4, 12, "nǎo", "brain"],
    "袋": ["s", 4, 12, "dài", "pocket/ bag"],
    "猪": ["s", 4, 12, "zhū", "pig, hog, wild boar"],
    "狼": ["s", 4, 12, "láng", "wolf"],
    "蛇": ["s", 4, 12, "shé", "snake"],
    "猴": ["s", 4, 12, "hóu", "monkey/ ape"],
    //4.13
    "故": ["s", 4, 13, "gù", "old; because"],
    "代": ["s", 4, 13, "dài", "era/ generation"],
    "玉": ["s", 4, 13,"yù", "jade/ gem"],
    "石": ["s", 4, 13, "shí", "stone"],
    "送": ["s", 4, 13, "sòng", "send off/ give"],
    "给": ["s", 4, 13, "gěi/ jǐ", "give"],
    "礼": ["s", 4, 13, "lǐ", "gift/ ceremony"],
    "物": ["s", 4, 13, "wù", "thing/ substance"],
    //4.14
    "纪": ["s", 4, 14, "jì", "period/ age"],
    "念": ["s", 4, 14, "niàn", "think of/ recall"],
    "意": ["s", 4, 14, "yì", "meaning/ wish/ think"],
    "义": ["s", 4, 14, "yì", "justice"],
    "传": ["s", 4, 14, "zhuàn/ chuán", "send/ biography"],
    "统": ["s", 4, 14, "tǒng", "unite/ control"],
    "民": ["s", 4, 14, "mín", "people/ citizens"],
    "族": ["s", 4, 14, "zú", "family clan/ ethnic group"],



}
export default dictionary;