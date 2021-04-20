interface PieCharts {
    value: number | string
    name: string
}

export interface Damage {
    saveCount: PieCharts[]
    trueCount: PieCharts[]
}

export interface ReportResponse {
    predicted_label: string
    scores: string[][]
}