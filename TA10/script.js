function getSum(nums) {
    let sum = nums.reduce((total, num) => total + num, 0);
    console.log(sum);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

getSum(nums);
