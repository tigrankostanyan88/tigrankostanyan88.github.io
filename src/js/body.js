window.onload = addStyleToSvg;

function addStyleToSvg() {
    addStyleFor("svg-front");
    addStyleFor("svg-back");
}


const exercises = {
    "neck": [
        "https://sworkit.com/wp-content/uploads/2022/02/ezgif.com-gif-maker-3.gif",
        "https://i.pinimg.com/originals/29/a9/a0/29a9a061698e5f6aa833dd40f8eff74a.gif",
        "https://www.vissco.com/wp-content/uploads/animation/sub/neck-extension.gif",
        "https://www.vissco.com/wp-content/uploads/animation/sub/neck-end-range-side-bend-isometric.gif"
    ],
    "stomach": [
        "https://i.pinimg.com/originals/cd/f1/3a/cdf13a4063a78f9c30207b567c16dfcb.gif",
        "https://www.icegif.com/wp-content/uploads/2022/07/icegif-473.gif",
        "https://www.icegif.com/wp-content/uploads/2022/07/icegif-475.gif"
    ],
    "chest": [
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellbenchpress-1457043820.gif?resize=640:*",
        "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1525881677751-9UA9D96OYQCDADXNDYOV/exercise+ball+chest+press.gif",
        "https://hips.hearstapps.com/menshealth-uk/main/assets/decline-push-up.gif?crop=0.5621019108280255xw:1xh;center,top&resize=980:*"
    ],
    "legs": [
        "https://i.pinimg.com/originals/be/27/60/be2760bc5000f6a9f33a2a7afd083955.gif",
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/legraisesinglelegalternating-1472061028.gif?crop=1xw:0.75xh;center,top&resize=1200:*",
        "https://i.pinimg.com/originals/23/be/b7/23beb72c8359dd53c69d6ca27d9647da.gif"
    ],
    "arms": [
        "https://i.pinimg.com/originals/5c/2d/d9/5c2dd9974b1788ccf34c748f9e9dc449.gif",
        "https://www.christinacarlyle.com/wp-content/uploads/2018/07/suns-out-guns-out-arm-workout.gif",
        "https://www.health.com/thmb/QQPsUETT6S0pmPbXhZ-SUT0n-X8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1-tricep-dips-4e241b5bde4b47b59b6801a99583dcd3.gif"
    ],
    "legs-back": [
        "https://www.verywellfit.com/thmb/-hnSxmKGSVCzc0CSPvhYKE-KdIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/105-Dead-Bug-Exercise-db168c892369485eb2315e5a1b6248fe.gif",
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/deadbuglegsonly-1472146304.gif?crop=1xw:0.75xh;center,top&resize=1200:*",
        "https://blog.myfitnesspal.com/wp-content/uploads/2019/02/Deadbugs.gif",
        "https://media1.popsugar-assets.com/files/thumbor/PVmu63CmismcU6SlPY_VDGZKO4g=/fit-in/792x528/top/filters:format_auto():upscale()/2017/03/16/755/n/1922729/87f8a40c98d7c402_EXAMPLE.Good-Morning.gif"
    ],
    "butt": [
        "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/21/1464361642-squat-w-raised-hee.gif?resize=980:*",
        "https://www.christinacarlyle.com/wp-content/uploads/2020/09/Butt-Exercises-by-Christina-Carlyle.gif",
        "https://www.christinacarlyle.com/wp-content/uploads/2018/07/The-Best-Glute-Exercises-Christina-Carlyle.gif",
        "https://i0.wp.com/theswimreport.com//wp-content/uploads/2015/06/FireHydrant-Small.gif?resize=640%2C360&ssl=1",
        "https://i0.wp.com/theswimreport.com//wp-content/uploads/2015/06/BentSide-LegLift.gif?resize=640%2C360&ssl=1"
    ],
    "back-outer": [
        "https://i.pinimg.com/originals/7b/ee/41/7bee41247c03b991d8a2ca9fb36c490d.gif",
        "https://i.pinimg.com/originals/ed/29/54/ed2954b76f3473526b3d0e8e5734686e.gif",
        "https://i.pinimg.com/originals/a2/ee/94/a2ee94edeb2631814b7c3581dd86ccda.gif"
    ],
    "shoulder": [
        "https://sworkit.com/wp-content/uploads/2022/02/ezgif.com-gif-maker-4.gif",
        "https://sworkit.com/wp-content/uploads/2022/02/ezgif.com-gif-maker-1.gif",
        "https://sworkit.com/wp-content/uploads/2022/02/ezgif.com-gif-maker-3.gif",
        "https://sworkit.com/wp-content/uploads/2022/02/ezgif.com-gif-maker.gif"
    ],
    "shoulder-back": [
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/supermanpullup-1472153970.gif?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/04/tpushup-1461693226.gif?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/02/plankstepup-1455818942.gif",
        "https://i.pinimg.com/originals/04/54/96/045496f98ecc6a0e3fd87018223c1002.gif"
    ],
    "arms-back": [
        "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/8.Dumbbell_Single-Arm_Rows_600x600.gif?v=1692257385",
        "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/supermanpullup-1472153970.gif?crop=1xw:1xh;center,top&resize=640:*",
        "https://cdn.shopify.com/s/files/1/0250/0362/2496/files/970.gif?v=1644832410",
        "https://i.pinimg.com/originals/b1/72/e2/b172e2b7128be162f13875ba91b84a17.gif",
        "https://i.pinimg.com/originals/da/37/13/da3713b288c59c13f051826e1df2b5f3.gif"
    ]
};

function addStyleFor(svgFilePrefix) {
    const svgObject = document.getElementById(svgFilePrefix);

    if (!svgObject) {
        console.warn(`❗ SVG object with ID '${svgFilePrefix}' not found`);
        return;
    }

    const tryInject = () => {
        const svgDocument = svgObject.contentDocument;

        if (!svgDocument) {
            console.warn(`❗ SVG document for '${svgFilePrefix}' not loaded`);
            return;
        }

        const svgElements = svgDocument.getElementsByClassName("hover");
        if (!svgElements.length) {
            console.warn(`⚠️ No elements with class 'hover' found in '${svgFilePrefix}'`);
            return;
        }

        for (let i = 0; i < svgElements.length; i++) {
            const svgElement = svgElements[i];
            const children = svgElement.children;
            const originalColors = [];

            for (let j = 0; j < children.length; j++) {
                originalColors[j] = children[j].style.fill || "#00B8B0";
            }

            // ✅ click effect
            svgElement.addEventListener("mouseover", function () {
                 printBodyPart(svgElement.id);
                const id = svgElement.id;
                if (exercises[id]) {
                    showExercises(id, exercises[id]);
                }


                // Bring parent element to front
                svgElement.style.position = "relative";
                svgElement.style.zIndex = "9999";

                for (let j = 0; j < children.length; j++) {
                    const svgItem = children[j];
                    svgItem.style.fill = "#00B8B0";
                    svgItem.style.transition = "all 0.3s ease";
                    svgItem.style.transform = "translateY(-5px) scale(1.04";
                    svgItem.style.position = "relative";
                    svgItem.style.zIndex = "11";
                }
                
            });


            svgElement.addEventListener("mouseout", function () {
                svgElement.style.cursor = "pointer";
                 printBodyPart(svgElement.id);
                const id = svgElement.id;

                console.log(id)
                if (exercises[id]) {
                    showExercises(id, exercises[id]);
                }

                // Bring parent element to front
                svgElement.style.position = "relative";
                svgElement.style.zIndex = "9999";

                for (let j = 0; j < children.length; j++) {
                    const svgItem = children[j];
                    svgItem.style.fill = "#b7312d";
                    svgItem.style.transition = "all 0.3s ease";
                    svgItem.style.transform = "translateY(0) scale(1)";
                    svgItem.style.position = "relative";
                    svgItem.style.zIndex = "11";
                }
                
            })
           
        }
    };

    if (svgObject.contentDocument) {
        tryInject();
    } else {
        svgObject.addEventListener("load", tryInject);
    }
}


function showExercises(part, list) {
    const container = document.getElementById("exercise-list");

    const legsExercise = exercises[part];

    container.innerHTML = `
    ${legsExercise.map(ex => `<div class="col-md-4 col-sm-6">
        <img class="massage-type" src="${ex}" alt="">
    </div>`).join("")}
  `;
}

function printBodyPart(bodyPartId) {
    const printElement = document.getElementById("body-part-print");
    printElement.innerHTML = bodyPartId ? formatBodyPartName(bodyPartId) : "&nbsp;";
}

function formatBodyPartName(id) {
    return id
        .replace(/-/g, " ")
        .replace(/\b\w/g, char => char.toUpperCase());
}