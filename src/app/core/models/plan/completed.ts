export class PlanCompleted_POST {
  item: number
  value: string
  time: string
}

export class PlanCompleted_GET extends PlanCompleted_POST {
  id: number
}