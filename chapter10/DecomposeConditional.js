/**
 * 分解条件表达式
 * decompose conditional
 */
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;

// 替换为==========>

if (summer())
    charge = summerCharge();
else
    charge = regularCharge();