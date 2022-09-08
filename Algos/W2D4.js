/**
 * From a Chipotle interview.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15


const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20
// rise: 20

// 
const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12-1 =11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels(waterLevels) {
    let rise = -1;
    let high, low = waterLevels[0];

    for (var i = 1; i < waterLevels.length; i++) {
        if (waterLevels[i] > low && waterLevels[i] > high) {
            high = waterLevels[i]
            rise = high - low;

            // console.log("low test"+low)
        }
        if (waterLevels[i] <= low) {
            low = waterLevels[i]
            high = waterLevels[i]
            // console.log("high test"+high)
        }
    }
    return "The Rise is " + rise
}

console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))
