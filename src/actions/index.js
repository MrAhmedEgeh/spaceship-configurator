export const selectColor = (price, id) => {
    return({
        type: "select color",
        price: price,
        id: id,
    })
}
export const selectPower = (price, id) => {
    return({
        type: "select power",
        price: price,
        id: id,
    })
}
export const selectDrive = (price, id) => {
    return({
        type: "select drive",
        price: price,
        id: id,
    })
}
export const selectPackage = (price, id) => {
    return({
        type: "select package",
        price: price,
        id: id,
    })
}