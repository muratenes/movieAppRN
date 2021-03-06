import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    basketDetailContainer: {
        flex: 10, flexDirection: 'column', paddingVertical: 10, paddingHorizontal: 10, borderColor: '#dedede', borderWidth: 2, marginHorizontal: 5, marginVertical: 4
    },
    totalPrice: {
        fontWeight: 'bold'
    },
    itemStyle: {
        padding: 3
    }, iconContainer: {
        flex: 5, paddingVertical: 1, textAlign: 'center', alignItems: 'center', alignContent: 'center'
    },
    title: {
        fontSize: 11.4,
        color: '#5e5e5e',
        flex: 1, flexWrap: 'wrap'
    },
    itemDetailContainer: {
        flexDirection: 'row',
        flex: 3,
        height: '100%'
    }, itemBoxContainer: {
        flex: 5, flexDirection: 'row'
    },
    itemQtyContainer: {
        flex: 5,
        flexDirection: 'column',
    },inputContainer : {
        flex: 1.3,justifyContent:'center',alignItems:'center'
    },
    input: {
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center'
    }, noItemONBasketText: {
        fontSize: 20,
        color: '#5a5a5a'
    }, productsText: {
        fontSize: 20,
        color: '#a19b9b'
    }, priceText: {
        fontSize: 14.5, fontWeight: '600', color: '#757575'
    }, priceTextWhenDiscount: {
        fontSize: 14.5, fontWeight: '600', color: '#d32f2f', textDecorationLine: 'line-through', marginRight: 2
    }, discountPriceText: {
        fontSize: 14.5, fontWeight: '600', color: '#43A047'
    }
});