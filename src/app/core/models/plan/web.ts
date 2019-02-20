export class PlanWeb_POST {
  name: string
  start: string
  anticipated_end: string
  isCompleted: Boolean
  body: string
  current_process: string
}

export class PlanWeb_GET extends PlanWeb_POST {
  id: number
  last_modified: string
}

