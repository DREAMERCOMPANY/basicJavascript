const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b)
console.log(numbers)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const ordersSort = orders.sort((a,b)=> a.total - b.total )
console.log(ordersSort);