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


function display(arguments) {
    let folders = "";
    let closedIcon = "<i class='material-icons closed'></i>";
    let fileIcon = "<i class='material-icons'>insert_drive_file</i>";
    let wrapper = "<ul class='folder-wrapper'>";
    arguments.forEach(element => {
        if (element['folder']) {
            folders += "<div class='folder-container'>" + "<li class='folder-item'>" + closedIcon +
                element['title'] + "</li>" + wrapper;
        }
        if (element['title'] && !element['folder']) {
            folders += "<li class='file-item'>" + fileIcon +
                element['title'] + '</li>';
        }
        if (element['children']) {
            folders += display(element['children']);
            folders += '</div></li>';
        }
        if (element['children'] === false) {
            folders += "<div class='folder-container'>" + '<i>Folder is empty</i>' + "</div>" + "</div>";
        }
        if (element['children'] === null) {
            folders += "<div class='folder-container'>" + '<i>Folder is empty</i>' + "</div>" + "</div>";
        }

    });
    return folders;
}


rootNode.innerHTML = display(structure);
let conteiners = document.getElementsByClassName('folder-item');
let m;

for (m = 0; m < conteiners.length; m++) {
    conteiners[m].addEventListener('click', function() {
        this.parentElement.querySelector('.folder-wrapper').classList.toggle('active');
        this.parentElement.querySelector('.material-icons').classList.toggle('opened');
    });
}