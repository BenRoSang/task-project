
import { v4 as uuid } from 'uuid';

export const sectors = [
    {
        id: uuid(),
        name: 'Manufacturing',
        children: [
            { id: uuid(), name: 'Construction materials' },
            { id: uuid(), name: 'Electronics and Optics' },
            {
                id: uuid(),
                name: 'Food and Beverage',
                children: [
                    { id: uuid(), name: 'Bakery & confectionery products' },
                    { id: uuid(), name: 'Beverages' },
                    { id: uuid(), name: 'Fish & fish products' },
                    {id: uuid(), name: 'Meat & meat products' },
                    { id: uuid(), name: 'Milk & dairy products' },
                    { id: uuid(), name: 'Other' },
                    { id: uuid(), name: 'Sweets & snack food' }
                ]
            },
            {
                id: uuid(), name: 'Furniture',
                children: [
                    { id: uuid(), name: 'Bathroom/sauna'},
                    { id: uuid(), name: 'Bedroom'},
                    { id: uuid(), name: 'Childrenâ€™s room'},
                    { id: uuid(), name: 'Kitchen'},
                    { id: uuid(), name: 'Living room'},
                    { id: uuid(), name: 'Office'},
                    { id: uuid(), name: 'Other (Furniture)'},
                    { id: uuid(), name: 'Outdoor'},
                    { id: uuid(), name: 'Project furniture'}
                ]
            },
            {
                id: uuid(), name: 'Machinery',
                children: [
                    { id: uuid(), name: 'Machinery components'},
                    { id: uuid(), name: 'Machinery equipment/tools'},
                    { id: uuid(), name: 'Manufacture of machinery'},
                    { id: uuid(), name: 'Maritime'},
                    {
                        id: uuid(), name: 'Machinery',
                        children: [
                            { id: uuid(), name: 'Aluminium and steel workboats' },
                            { id: uuid(), name: 'Boat/Yacht building' },
                            { id: uuid(), name: 'Ship repair and conversion' }
                        ]
                    },
                    { id: uuid(), name: 'Metal structures' },
                    { id: uuid(), name: 'Other' },
                    { id: uuid(), name: 'Repair and maintenance service' }
                ]
            },
            {
                id: uuid(), name: 'Metalworking',
                children: [
                    { id: uuid(), name: 'Construction of metal structures'},
                    { id: uuid(), name: 'Houses and buildings'},
                    { id: uuid(), name: 'Metal products'},
                    {
                        id: uuid(), name: 'Metal works',
                        children: [
                            { id: uuid(), name: 'CNC-machining'},
                            { id: uuid(), name: 'Forgings, Fasteners'},
                            { id: uuid(), name: 'Gas, Plasma, Laser cutting'},
                            { id: uuid(), name: 'MIG, TIG, Aluminum welding'},
                        ]
                    }
                ]
            },
            {
                id: uuid(), name: 'Plastic and Rubber',
                children: [
                    { id: uuid(), name: 'Packaging'},
                    { id: uuid(), name: 'Plastic goods'},
                    {
                        id: uuid(), name: 'Plastic processing technology',
                        children: [
                            { id: uuid(), name: 'Blowing'},
                            { id: uuid(), name: 'Moulding'},
                            { id: uuid(), name: 'Plastics welding and processing'},
                        ]
                    },
                    { id: uuid(), name: 'Plastic profiles'}
                ]
            },
            {
                id: uuid(), name: 'Printing',
                children: [
                    { id: uuid(), name: 'Advertising'},
                    { id: uuid(), name: 'Book/Periodicals printing'},
                    { id: uuid(), name: 'Labelling and packaging printing'},
                ]
            },
            {
                id: uuid(), name: 'Textile and Clothing',
                children: [
                    { id: uuid(), name: 'Clothing'},
                    { id: uuid(), name: 'Textile'}
                ]
            },
            {
                id: uuid(), name: 'Wood',
                children: [
                    { id: uuid(), name: 'Other (Wood)'},
                    { id: uuid(), name: 'Wooden building materials'},
                    { id: uuid(), name: 'Wooden houses'},
                ]
            }
        ]
    },
    {
        id: uuid(), name: 'Other',
        children: [
            { id: uuid(), name: 'Creative industries'},
            { id: uuid(), name: 'Energy technology'},
            { id: uuid(), name: 'Environment'},
        ]
    },
    {
        id: uuid(), name: 'Service',
        children: [
            { id: uuid(), name: 'Business services'},
            { id: uuid(), name: 'Engineering'},
            {
                id: uuid(), name: 'Information Technology and Telecommunications',
                children: [
                    { id: uuid(), name: 'Data processing, Web portals, E-marketing'},
                    { id: uuid(), name: 'Programming, Consultancy'},
                    { id: uuid(), name: 'Software, Hardware'},
                    { id: uuid(), name: 'Telecommunications'}
                ]
            },
            { id: uuid(), name: 'Tourism'},
            { id: uuid(), name: 'Translation services'},
            {
                id: uuid(), name: 'Transport and Logistics',
                children: [
                    { id: uuid(), name: 'Air'},
                    { id: uuid(), name: 'Rail'},
                    { id: uuid(), name: 'Road'},
                    { id: uuid(), name: 'Water'},
                ]
            },
        ]
    }
];