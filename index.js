// code your solution here

function superbowlWin(arr) {
    const result = arr.find(element =>{return element.result === "W"})
    if (result === undefined) {
        return result;
    } else {
        return result.year;
    }
}