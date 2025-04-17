const tests = [{
        question: "Ո՞ր նշանն է արգելում կանգ առնելը։",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Zeichen_283.svg/1200px-Zeichen_283.svg.png",
        options: [
            "Կանգառը արգելող նշանը",
            "Արգելում է միայն կանգ առնելը",
            "Արգելում է միայն կայանել",
            "Բոլոր նշանները"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Երբ է թույլատրվում շրջանցել կանգնած տրանսպորտային միջոցը։",
        image: "https://i.imgur.com/HJvVzno.jpeg",
        options: [
            "Երբ կան վերագրավող գծեր",
            "Երբ վարորդը ձեռքով հրավիրում է",
            "Երբ այն կանգնել է խախտմամբ",
            "Երբ անվտանգ է ու չես անցնում գիծը"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Ինչ է նշանակում կարմիր լույսը լուսացույցի վրա:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Traffic_light_red.svg/2048px-Traffic_light_red.svg.png",
        options: [
            "Թույլատրում է շարունակել շարժվել",
            "Պարտադիր կանգ",
            "Զգուշությամբ շարունակել",
            "Մեկենան կանգնեցնելու կարիք չկա"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Որտեղ պետք է կանգ առնել «Give Way» նշանի դեպքում:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Zeichen_205.svg/1024px-Zeichen_205.svg.png",
        options: [
            "Խաչմերուկից հետո",
            "Ոչ մի տեղ, եթե ճանապարհը ազատ է",
            "Խաչմերուկին մոտենալիս՝ համոզվելու համար",
            "Ճանապարհի աջ կողմում"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ի՞նչ դեպքում է արգելվում շրջադարձ կատարել:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/No_U-turn_symbol.svg/1024px-No_U-turn_symbol.svg.png",
        options: [
            "Երբ նշան չկա",
            "Երբ շրջադարձն արգելող նշան կա",
            "Երբ ճանապարհը միակողմանի է",
            "Երբ մեքենան կեղտոտ է"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ո՞վ ունի առաջնահերթություն կլոր խաչմերուկում:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zeichen_215.svg/1024px-Zeichen_215.svg.png",
        options: [
            "Մուտք գործող մեքենան",
            "Ճանապարհը փոխող մեքենան",
            "Կլոր խաչմերուկում գտնվող մեքենան",
            "Ոչ մեկը"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ինչու պետք է պահպանել անվտանգության հեռավորություն:",
        image: "https://i.imgur.com/xDeBlJZ.jpeg",
        options: [
            "Որպեսզի լավ տեսնել նշանները",
            "Որպեսզի վարորդը հանգիստ զգա",
            "Որպեսզի կարողանաս կանգնեցնել վթարային իրավիճակում",
            "Որպեսզի չընկնես տեսախցիկի տակ"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ինչ է նշանակում դեղին զիգզագ գիծը ճանապարհի կողքին:",
        image: "https://i.imgur.com/jtCNfsF.png",
        options: [
            "Կայանել կարելի է միայն գիշերը",
            "Արգելում է կանգ առնել և կայանել",
            "Թույլատրում է ցանկացած գործողություն",
            "Դա ուղղակի նախազգուշական նշում է"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ո՞վ կարող է երթևեկել հետիոտնին նախատեսված ճանապարհով:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Zeichen_239_-_Gehweg%2C_StVO_1992.svg/1024px-Zeichen_239_-_Gehweg%2C_StVO_1992.svg.png",
        options: [
            "Բոլոր տրանսպորտային միջոցները",
            "Հեծանվորդները",
            "Միայն հետիոտները",
            "Տաքսիները"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ինչ է նշանակում «STOP» նշանը:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/STOP_sign.svg/1024px-STOP_sign.svg.png",
        options: [
            "Դանդաղեցրու",
            "Կանգ առ միայն եթե մեքենա կա",
            "Պարտադիր կանգ՝ անկախ իրավիճակից",
            "Արգելում է կանգնել"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ո՞ր կողմով պետք է շրջանցել կանգնած ավտոբուսը:",
        image: "https://i.imgur.com/NyE6AOH.jpeg",
        options: [
            "Ձախից",
            "Աջից",
            "Նայած իրավիճակից",
            "Շրջանցել չի կարելի"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ինչ անել, եթե հնչում է շտապօգնության ձայնը մոտակայքում:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Armenian_ambulance.jpg/800px-Armenian_ambulance.jpg",
        options: [
            "Շարունակել սովորական երթևեկություն",
            "Կանգնել ու ճանապարհ տալ",
            "Արագացնել ընթացքը",
            "Հետադարձ կատարել"
        ],
        correctAnswerIndex: 1
    }
];

const groups = [{
        question: "Ո՞ր նշանն է արգելում կանգ առնելը։ 😒",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Zeichen_283.svg/1200px-Zeichen_283.svg.png",
        options: [
            "Կանգառը արգելող նշանը",
            "Արգելում է միայն կանգ առնելը",
            "Արգելում է միայն կայանել",
            "Բոլոր նշանները"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Ինչ է նշանակում կարմիր լույսը լուսացույցի վրա:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Traffic_light_red.svg/2048px-Traffic_light_red.svg.png",
        options: [
            "Թույլատրում է շարունակել շարժվել",
            "Պարտադիր կանգ",
            "Զգուշությամբ շարունակել",
            "Մեկենան կանգնեցնելու կարիք չկա"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Որտեղ պետք է կանգ առնել «Give Way» նշանի դեպքում:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Zeichen_205.svg/1024px-Zeichen_205.svg.png",
        options: [
            "Խաչմերուկից հետո",
            "Ոչ մի տեղ, եթե ճանապարհը ազատ է",
            "Խաչմերուկին մոտենալիս՝ համոզվելու համար",
            "Ճանապարհի աջ կողմում"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ի՞նչ դեպքում է արգելվում շրջադարձ կատարել:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/No_U-turn_symbol.svg/1024px-No_U-turn_symbol.svg.png",
        options: [
            "Երբ նշան չկա",
            "Երբ շրջադարձն արգելող նշան կա",
            "Երբ ճանապարհը միակողմանի է",
            "Երբ մեքենան կեղտոտ է"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ինչ է նշանակում դեղին զիգզագ գիծը ճանապարհի կողքին:",
        image: "https://i.imgur.com/jtCNfsF.png",
        options: [
            "Կայանել կարելի է միայն գիշերը",
            "Արգելում է կանգ առնել և կայանել",
            "Թույլատրում է ցանկացած գործողություն",
            "Դա ուղղակի նախազգուշական նշում է"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Ո՞վ կարող է երթևեկել հետիոտնին նախատեսված ճանապարհով:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Zeichen_239_-_Gehweg%2C_StVO_1992.svg/1024px-Zeichen_239_-_Gehweg%2C_StVO_1992.svg.png",
        options: [
            "Բոլոր տրանսպորտային միջոցները",
            "Հեծանվորդները",
            "Միայն հետիոտները",
            "Տաքսիները"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Ինչ է նշանակում «STOP» նշանը:",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/STOP_sign.svg/1024px-STOP_sign.svg.png",
        options: [
            "Դանդաղեցրու",
            "Կանգ առ միայն եթե մեքենա կա",
            "Պարտադիր կանգ՝ անկախ իրավիճակից",
            "Արգելում է կանգնել"
        ],
        correctAnswerIndex: 2
    }
]