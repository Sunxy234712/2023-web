const arr = [
    { id: 1, name: "xy" },
    { id: 2, name: "bxl" },
    { id: 3, name: "bxl3" },
];

arr.filter((item) => {
    return item.id === 1;
});

const index = arr.findIndex(item => {
    return item.id === 2
})
console.log('index', index)


arr.splice(index, 1)
console.log('arr', arr)