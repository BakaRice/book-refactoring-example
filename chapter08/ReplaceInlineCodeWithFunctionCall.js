/**
 * 以函数调用取代内联代码
 * Replace Inline Code with Function Call
 */
let appliesToMass = false;
for (const s of states) {
    if (s === "MA") appliesToMass = true;
}


//=====>


appliesToMass = states.includes("MA");