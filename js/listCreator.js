class ListLoader {
    constructor(list, name) {
        this.list = list;
        this.name = name;
        this.items = []; 
}}

function loadList(listId) {
    fetch('/json/lists.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch JSON ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const listData = data.list.find(item => item.list === listId);

            if (listData) {
                const infoObj = new ListLoader(listData.list, listData.name);

                const ul = document.createElement('ul');

                for (let i = 1; i <= Object.keys(listData).length - 2; i++) {
                    const listItem = listData['list-item-' + i];
                    if (listItem) {
                        infoObj.items.push(listItem);
                        const li = document.createElement('li');
                        li.textContent = listItem;
                        ul.appendChild(li);
                    }
                }

                const parentElement = document.getElementById(listId === 2 ? 'skillsList' : 'skillsList2');
                if (parentElement) {
                    parentElement.appendChild(ul);
                } else {
                    console.error('Parent element not found.');
                }

                console.log('List found:', infoObj.list);
                console.log('Name:', infoObj.name);
                console.log('Items:', infoObj.items);

            } else {
                console.log('List with ID', listId, 'not found.');
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}