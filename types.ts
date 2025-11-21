export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
}

export interface ResignationTrendData {
  year: string;
  rate: number;
}

export interface ResignationReasonData {
  reason: string;
  percentage: number;
}