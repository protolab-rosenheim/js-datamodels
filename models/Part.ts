interface Part {
    part_number: number;
    order_id: number;
    assembly_group_id: number;
    imos_id: number;
    part_mapping: number;
    material_code: string;
    finished_length: number;
    finished_width: number;
    finished_thickness: number;
    cut_length: number;
    cut_width: number;
    overcapacity: number;
    undercapacity: number;
    grain_id: number;
    description: string;
    production_steps: ProductionStep[];
    coatings: Coating[];
    extra_route: string;
    pattern_info: string;
    label_info: string;
    edge_transition: string;
    batch_number: string;
    status: string;
}
