/**
 * Modal class for the Porvider
 */

export class Provider {
    public first_name: string;
    public last_name: string;
    public email: string;
    public phone: string;
    public designation?: string;
    public region?: string;

    constructor(first_name: string, last_name: string, email: string, phone: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
    }
} 