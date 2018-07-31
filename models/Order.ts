interface Order {
    id: number;
    customer_order: string;
    customer: string;
    delivery_date: Date;
    shipping_date: Date;
    assembly_groups: AssemblyGroup[];
}
