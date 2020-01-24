const structure = [{
        'folder': true,
        'title': 'Films',
        'children': [{
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [{
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [{
            'folder': true,
            'title': 'EPAM Homework answers',
            'children': null
        }]
    }
];


const rootNode = document.getElementById('root');

function displayStructure(data) {
    let folders = "<ul class='folder-container'>";
    for (let key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
            folders += displayStructure(data[key]);
            folders += '</ul></li>';
        } else if (data[key] === true) {
            folders += "<li class='folder-item'>" + '<i class="material-icons closed"></i>' +
                data['title'] + "</li><li class='folder-wrapper'>";
        } else if (key === 'title' && data['folder'] !== true) {
            folders += "<li class='file-item'>" + '<i class="material-icons">insert_drive_file</i>' +
                data['title'] + '</li>';
        } else if (data[key] === false || data[key] === null) {
            folders += '<i>Folder is empty</i>'
        }
    }
    return folders;
}
rootNode.innerHTML = displayStructure(structure);
let conteiners = document.getElementsByClassName('folder-item');
let i;

for (i = 0; i < conteiners.length; i++) {
    conteiners[i].addEventListener('click', function() {
        this.parentElement.querySelector('.folder-wrapper').classList.toggle('active');
        this.parentElement.querySelector('.material-icons').classList.toggle('opened');
    });
}