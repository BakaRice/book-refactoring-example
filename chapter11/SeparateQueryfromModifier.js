/**
 * 将查询函数和修改函数分离
 * Separate Query from Modifier
 */
function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill();
    return result;
}


function totalOutstanding() {
    return customer.invoices.reduce((total, each) => each.amount + total, 0);
}
function sendBill() {
    emailGateway.send(formatBill(customer));
}

/**
 * 有这样一个函数：它会遍历一份恶棍（miscreant）名单，检查一群人（people）里是否混进了恶棍。
 * 如果发现了恶棍，该函数会返回恶棍的名字，并拉响警报。
 * 如果人群中有多名恶棍，该函数也只汇报找出的第一名恶棍（我猜这就已经够了）。
 */
function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don";
        }
        if (p === "John") {
            setOffAlarms();
            return "John";
        }
    }
    return "";
}
function findMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            // setOffAlarms(); => 这里本质上是一种修改操作 可以分离出去
            return "Don";
        }
        if (p === "John") {
            setOffAlarms();
            return "John";
        }
    }
    return "";
}
const found = findMiscreant(people);
alertForMiscreant(people);

function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return;
        }
        if (p === "John") {
            setOffAlarms();
            return;
        }
    }
    return;
}
function alertForMiscreant(people) {
    if (findMiscreant(people) !== "") setOffAlarms();
}
