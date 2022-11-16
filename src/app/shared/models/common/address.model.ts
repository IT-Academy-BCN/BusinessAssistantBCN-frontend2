export class Address {
    street_name: string;
    street_number: string | number;
    zip_code: string;
    district_id: string;
    town: string;
    location: {
        x: number;
        y: number;
    }

}