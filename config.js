var config = {
    style: 'mapbox://styles/kelsharrell/cks9fdza22n2d17mnuiwnpqvq',
    accessToken: 'pk.eyJ1Ijoia2Vsc2hhcnJlbGwiLCJhIjoiY2tzN3p6ZXoxMGtncDJubzI1cTVwZTdrbSJ9.-alNg8ClUqGS9wbDZN3yeA',
    showMarkers: false,
    markerColor: '#000',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Events of the Nov. 1, 1991 shooting',
    byline: 'By Kelsey Harrell for The Daily Iowan',
    footer: 'The Daily Iowan',
    chapters:[
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '30th anniversary of the Nov. 1 shooting at the University of Iowa',
            description: 'The University of Iowa campus was rocked by one of the biggest tragedies in its history 30 years ago when former UI graduate student Gang Lu shot and killed five people, and injuring one. Three decades later, the U.S. still sees cases of gun violence at schools across the country and the UI campusis still feeling the effects of the shooting.',
            location: {
              center: [-91.56783, 41.66372],
              zoom: 12.94,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'van',
            alignment: 'right',
            hidden: false,
            title: '3:30 p.m., Friday, Nov. 1, 1991',
            description: 'Gang Lu attended a meeting for the theoretical space plasma physics research group in conference room 309 on the third floor of Van Allen Hall.',
            location: {
              center: [-91.53188, 41.66198],
              zoom: 18.77,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'van',
            alignment: 'right',
            hidden: false,
            title: '3:40 p.m., Friday, Nov. 1, 1991',
            description: 'Lu shot three attendees of the meeting &mdash; physics and astronomy professor Christoph Goertz, physics and astronomy associate professor Robert Smith, and post-doctoral research investigator Linhua Shan &mdash; in rapid succession.',
            location: {
              center: [-91.53224, 41.66223],
              zoom: 18.00,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'van',
            alignment: 'right',
            hidden: false,
            title: '3:41:30 p.m., Friday, Nov. 1, 1991',
            description: 'Lu proceeded to the second floor of Van Allen Hall to shoot the chairman of the department, Dwight Nicholson, in his office.',
            location: {
              center: [-91.53224, 41.66223],
              zoom: 18.00,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'police',
            alignment: 'right',
            hidden: false,
            title: '3:42 p.m., Friday, Nov. 1, 1991',
            description: 'The Iowa City Police Department received the first call about the shooting.',
            location: {
              center: [-91.52975, 41.66039],
              zoom: 18.00,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jessup',
            alignment: 'right',
            hidden: false,
            title: '3:45 p.m., Friday, Nov. 1, 1991',
            description: 'Lu walked three blocks (~5-minute walk) to Jessup Hall to T. Anne Cleary’s office. He shot student temporary employee Miya Rodolfo&#8211;Sioson in the head for unknown reasons. Lu then shot T. Anne Cleary, an associate vice president for Academic Affairs and grievance officer at the university, in the head. Cleary died the following day at the University of Iowa Hospitals and Clinics.',
            location: {
              center: [-91.53612, 41.66190],
              zoom: 19.00,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jessup',
            alignment: 'right',
            hidden: false,
            title: '3:50 p.m., Friday, Nov. 1, 1991',
            description: 'Lu was found in room 203 of Jessup Hall with a self-inflicted gunshot wound to the head, and died shortly after the police arrived',
            location: {
              center: [-91.53612, 41.66190],
              zoom: 19.00,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
