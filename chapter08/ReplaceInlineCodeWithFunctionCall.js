/**
 * 移动语句
 * sidle statements
 */
let appliesToMass = false;
for (const s of states) {
    if (s === "MA") appliesToMass = true;
}


//=====>


appliesToMass = states.includes("MA");