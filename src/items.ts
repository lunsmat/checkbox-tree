export interface Item {
    id: string;
    label: string;
    selected: boolean;
    subItems?: Item[];
};

const items: Item = {
    id: '1',
    label: 'Something 1',
    selected: false,
    subItems: [
        {
            id: '11',
            label: 'Something 1.1',
            selected: false,
            subItems: [
                {
                    id: '111',
                    label: 'Something 1.1.1',
                    selected: false,
                },
        
                {
                    id: '112',
                    label: 'Something 1.1.2',
                    selected: false,
                },
        
                {
                    id: '113',
                    label: 'Something 1.1.3',
                    selected: false,
                },
            ],
        },

        {
            id: '12',
            label: 'Something 1.2',
            selected: false,
        },

        {
            id: '13',
            label: 'Something 1.3',
            selected: false,
        },
    ],
};

export default items;
