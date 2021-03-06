import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {Badge, Button} from 'native-base';
import {inject, observer} from "mobx-react";

@observer
export default class CategoriesLabels extends Component {
    componentDidMount(): void {
        this.props.ProductStore.getCategoriesByStore();
    }

    render() {
        return (
            <View style={styles.badgeContainer}>
                {this.props.ProductStore.categories &&
                <ScrollView horizontal={true}
                            decelerationRate={0}
                            snapToAlignment={"center"}
                            showsHorizontalScrollIndicator={false}
                >
                    <FlatList
                        horizontal={false}
                        numColumns={30}
                        renderItem={({item}) => this._renderItem(item)}
                        keyExtractor={item => '' + item.id}
                        data={this.props.ProductStore.categories}
                    />
                </ScrollView>}
            </View>
        );
    }

    _renderItem = (item) => {
        return (
            <Button onPress={()=> this._categoryButtonOnClick(item)} small bordered success style={this.props.ProductStore.selectedCategoryId === item.id ? styles.selectedBadge : styles.badge}>
                    <Text style={this.props.ProductStore.selectedCategoryId === item.id ? styles.selectedBadgeText : styles.badgeText}>{item.title + "|" + item.id}</Text>
            </Button>);
    }

    _categoryButtonOnClick = async (item) => {
        this.props.flatlistref.scrollToOffset({y: 0, animated: true});
        // console.log(item.id);

        if (this.props.ProductStore.selectedCategoryId === item.id) {
            await this.props.ProductStore.getStoreProductsByCategoryId(0,1)
        } else {
            await this.props.ProductStore.getStoreProductsByCategoryId(item.id, 1);
        }
        // await this.props.ProductStore.setCurrentCategoryValue(this.props.ProductStore.selectedCategoryId === item.id ? 0 : item.id)
        await this.props.ProductStore.setCategories([...this.props.ProductStore.categories]);
    }
}

const styles = StyleSheet.create({
    badgeContainer: {
        paddingHorizontal: 7, paddingVertical: 7, flexDirection: 'row',
    },
    badge: {
        marginRight: 2
    }, selectedBadge: {
        backgroundColor: "#3949AB",marginRight: 2
    }, badgeText: {
        fontSize: 12, paddingVertical: 3, paddingHorizontal: 2
    },selectedBadgeText : {
        fontSize: 12, paddingVertical: 3, paddingHorizontal: 2,color:'white'
    }

});
