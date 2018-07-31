interface ProductionStep {
    id: number;
    part_number: number;
    name: string;
    status: string;
    description: string;
    edge_value?: string;
    edge_position?: string;
}
