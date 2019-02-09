import addressParser from '../addressParser';
describe('Address Component Parser', () => {
    const mockComponents = [
        {
            long_name: '360',
            short_name: '360',
            types: [
                'street_number'
            ]
        },
        {
            long_name: 'Broadway',
            short_name: 'Broadway',
            types: [
                'route'
            ]
        },
        {
            long_name: 'Lower Manhattan',
            short_name: 'Lower Manhattan',
            types: [
                'neighborhood',
                'political'
            ]
        },
        {
            long_name: 'Manhattan',
            short_name: 'Manhattan',
            types: [
                'political',
                'sublocality',
                'sublocality_level_1'
            ]
        },
        {
            long_name: 'New York',
            short_name: 'New York',
            types: [
                'locality',
                'political'
            ]
        },
        {
            long_name: 'New York County',
            short_name: 'New York County',
            types: [
                'administrative_area_level_2',
                'political'
            ]
        },
        {
            long_name: 'New York',
            short_name: 'NY',
            types: [
                'administrative_area_level_1',
                'political'
            ]
        },
        {
            long_name: 'United States',
            short_name: 'US',
            types: [
                'country',
                'political'
            ]
        },
        {
            long_name: '10013',
            short_name: '10013',
            types: [
                'postal_code'
            ]
        },
        {
            long_name: '3912',
            short_name: '3912',
            types: [
                'postal_code_suffix'
            ]
        }
    ];
    it('should return an object', () => {
        expect(typeof addressParser(mockComponents)).toBe('object');
    });
    it('should have an streetAddress property', () => {
        expect(addressParser(mockComponents).streetAddress).toBeDefined();
        expect(addressParser(mockComponents).streetAddress).toEqual('360 Broadway');
    });
    it('should have a city', () => {
        expect(addressParser(mockComponents).city).toBeDefined();
        expect(addressParser(mockComponents).city).toEqual('New York');
    });
    it('should have a state', () => {
        expect(addressParser(mockComponents).state).toBeDefined();
        expect(addressParser(mockComponents).state).toEqual('NY');
    });
    it('should have a zip code', () => {
        expect(addressParser(mockComponents).zip).toBeDefined();
        expect(addressParser(mockComponents).zip).toEqual('10013');
    });
});
//# sourceMappingURL=addressParser.test.js.map