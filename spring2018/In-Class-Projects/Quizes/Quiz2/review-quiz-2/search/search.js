function search(nameList, searchTerm) {
    return nameList.filter((el) =>
        el.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
}
