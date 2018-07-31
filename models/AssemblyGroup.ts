interface AssemblyGroup {
    group_id: number;
    part_mapping: number;
    group_name: string;
    parts: Part[];
    assembled: boolean;
    order_id: number;
}
