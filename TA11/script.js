function duplicates(nums) {
    let counts = nums.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    let duplicatesCount = Object.values(counts).filter(count => count > 1).length;
    console.log(duplicatesCount);
}

const nums = [1, 2, 2, 3, 4, 4, 4, 5];

duplicates(nums);
