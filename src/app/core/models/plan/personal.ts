export class PlanPersonal_POST {
  name: string
  value: string
  start: string
  end: string
}

export class PlanPersonal_GET extends PlanPersonal_POST {
  id: number
}
