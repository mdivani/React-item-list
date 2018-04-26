export default (list, items) => {
    if(list) {
        return items.filter((item) => {
            return list.items.includes(item);
        });
    } else {
        return items;
    }
}