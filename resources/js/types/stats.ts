import { LucideIcon } from "lucide-react";

export interface StatsComponentProps {
    index: number;
    stats: StatItem;
}

export interface StatItem {
    icon: LucideIcon;
    value: number;
    labelID: string;
    labelEN: string;
    suffix: string;
}
