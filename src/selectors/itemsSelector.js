export default (list, items) => {
    if(list) {
        return items.filter((item) => {
            return list.items.some((itemList) => {
                return item.name === itemList.name;
            });
        });
    } else {
        return items;
    }
}